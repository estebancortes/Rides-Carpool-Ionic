
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

export interface Vehicle {
  id?: string;
  brand: string;
  model: string;
  year: string;
  bookingType: string;
  licencePlate: string;
}

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

  user$: Observable<any>;
  private vehiclesCollection: AngularFirestoreCollection<Vehicle>;
  private vehicles: Observable<Vehicle[]>;

  constructor(private storage: AngularFireStorage, private afAuth: AngularFireAuth, private firestore: AngularFirestore) {
    this.user$ = this.afAuth.authState;
    this.vehiclesCollection = this.firestore.collection<Vehicle>('vehicles');
    this.vehicles = this.vehiclesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getCurrentUser() {
    return this.afAuth.authState;
  }

  registerUser(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // create user document in Firestore
        return this.firestore.collection('users').doc(userCredential.user.uid).set({
          email: email
      });
    });
  }

  loginUser(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  resetPassword(email: string): Promise<void> {
    return this.afAuth.sendPasswordResetEmail(email);
  }

  sendVerificationEmail(): Promise<void> {
    return this.afAuth.currentUser.then(u => u?.sendEmailVerification());
  }

  saveUserData(userId: string, gender: string, firstName: string, lastName: string, yearOfBirth: number, bio: string, mobile:any) {
    return this.firestore.collection('users').doc(userId).update({
      gender: gender,
      firstName: firstName,
      lastName: lastName,
      yearOfBirth: yearOfBirth,
      bio: bio,
      mobile: mobile
    });
  }

  async setProfilePic(file: any): Promise<void> {
    const userId = await this.afAuth.currentUser.then(u => u?.uid);
    const filePath = `profilePics/${userId}`;
    const fileRef = this.storage.ref(filePath);
    const uploadTask = fileRef.put(file);

    uploadTask.percentageChanges().subscribe(percent => {
      // Show upload progress if needed
    });

    uploadTask.snapshotChanges().pipe(
      finalize(async () => {
        const downloadURL = await fileRef.getDownloadURL().toPromise();
        await this.firestore.collection('users').doc(userId).update({ profilePic: downloadURL });
      })
    ).subscribe();
  }

  // async testArrayupload(url){
  //   const userId = await this.afAuth.currentUser.then(u => u?.uid);
  //   const userDocRef = this.firestore.collection('users').doc(userId);
  //   userDocRef.get().subscribe((doc:any) => {
  //     const idPictures = doc.data()?.idPictures || [];
  //     idPictures.push(url);
  //     userDocRef.update({ idPictures: idPictures });
  //   });
  // }

  async uploadIdPic(file: any): Promise<void> {
    const userId = await this.afAuth.currentUser.then(u => u?.uid);
    const filePath = `Ids/${userId}/${new Date().getTime()}_${file.name}`;
    const fileRef = this.storage.ref(filePath);
    const uploadTask = fileRef.put(file);

    uploadTask.percentageChanges().subscribe(percent => {
      // Show upload progress if needed
    });

    uploadTask.snapshotChanges().pipe(
      finalize(async () => {
        const downloadURL = await fileRef.getDownloadURL().toPromise();
        const userDocRef = this.firestore.collection('users').doc(userId);
          userDocRef.get().subscribe((doc:any) => {
            const idPictures = doc.data()?.idPictures || [];
            idPictures.push(downloadURL);
            userDocRef.update({ idPictures: idPictures });
          });
        })
    ).subscribe();
  }

  
  getUserData(userId: string): Observable<any> {
    return this.firestore.doc(`users/${userId}`).valueChanges();
  }

  changeEmail(newEmail: string, userId:string): Promise<void> {
    console.log(newEmail);
    return this.afAuth.currentUser.then((user) => {
      user.updateEmail(newEmail);
      return this.firestore.collection('users').doc(userId).update({
        email: newEmail
      });
    });
  }

  getVehicles(): Observable<Vehicle[]> {
    return this.vehicles;
  }

  getVehiclesList(userId: string): Observable<Vehicle[]> {
    return this.firestore
      .collection<Vehicle>(`users/${userId}/vehicles`)
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data() as Vehicle;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }

  addVehicle(vehicle: Vehicle, userId: string) {
    const userDoc = this.firestore.doc(`users/${userId}`);
    const id = this.firestore.createId();
    vehicle.id = id;
    return userDoc.collection('vehicles').doc(id).set(vehicle);
  }

  updateVehicle(vehicle: Vehicle, userId: string) {
    const userDoc = this.firestore.doc(`users/${userId}`);
    return userDoc.collection('vehicles').doc(vehicle.id).update(vehicle);
  }

  createRide(ride: any) {
    const usernames = ['John Doe', 'Jane Doe', 'Jimmy', 'Amy Winehouse', 'Peter Parker'];
    const numberPlates = ['EDS-342', 'FRS-756', 'GHI-789', 'JKL-012', 'MNO-345'];
    const cars = ['Toyota prado 2007 Blanco', 'Chevrolet Spark 2010 Negro', 'Toyota Hilus 2017 Gris', 'Sisuki Jimmy  2019 Rojo'];

    const id = this.firestore.createId();
    ride.rideId = id;
    ride.name = usernames[Math.floor(Math.random() * usernames.length)],
    ride.car =  cars[Math.floor(Math.random() * cars.length)],
    ride.numberPlate = numberPlates[Math.floor(Math.random() * numberPlates.length)],
    ride.cost = Math.floor(Math.random() * 100) + 1;
    return this.firestore.collection('offeredRides').doc(ride.rideId).set(ride);
  }

  deleteRide(rideId: string): Promise<void> {
    const rideRef = this.firestore.collection('offeredRides').doc(rideId);
    return rideRef.delete();
  }

  getOfferedRides(){
    return this.firestore
      .collection<any>(`offeredRides`)
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data() as any;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }

  bookRide(ride: any, userId:any) {
    const userDoc = this.firestore.doc(`users/${userId}`);
    const id = this.firestore.createId();
    ride.id = id;
    return userDoc.collection('bookedRides').doc(id).set(ride);
  }

  getBookedRides(userId: string): Observable<Vehicle[]> {
    return this.firestore
      .collection<any>(`users/${userId}/bookedRides`)
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data() as any;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }

}

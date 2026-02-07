import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/services/data.service';
import { FirebaseService } from '@app/services/firebase.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss'],
})
export class VerifyEmailPage implements OnInit {

  emailData: any;
  email:string;
  isVerified:boolean = false;
  constructor(public service: DataService, private firebaseService:FirebaseService) {
    this.emailData = environment.EMAIL_VERIFICATION;

  }

  ngOnInit() {
    this.firebaseService.getCurrentUser().subscribe((user) => {
      console.log(user);
      this.email = user.email;
      this.isVerified = user.emailVerified;
      // this.userId = user.uid;
      // this.email = user.email;
    });
  }

  verify(){
    this.firebaseService.sendVerificationEmail().then((res:any)=>{
      alert("Verification email has been sent your email. Please check your email.");
    }, err=>{
      alert(err.message);
    });
  }

} 

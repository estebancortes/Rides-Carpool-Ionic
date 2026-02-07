
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '@app/services/firebase.service';
import { environment } from '@env/environment';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-new-vehicle',
  templateUrl: './add-new-vehicle.page.html',
  styleUrls: ['./add-new-vehicle.page.scss'],
})
export class AddNewVehiclePage implements OnInit {

  public license = '';
  // public newvehicleData = environment.NEW_VECHILE_DATA;
  private valueName: any;

  userId:string;
  selectedBrand:string;
  selectedModelo:string;
  selectedYear:string;
  selectedColor:string;
  selectedBookingType:string;

  brands = [{
    name: 'Toyota',
  },
  {
    name: 'Yamaha',
  },
  {
    name: 'Auteco',
  },
  {
    name: 'Land Rover',
  },
  {
    name: 'Honda',
  },
  {
    name: 'Chevrolet',
  },
  {
    name: 'Mitsubishi',
  },
  {
    name: 'Susuki',
  },
  {
    name: 'Volvo',
  },
  {
    name: 'Susuki',
  }
  ]

  modelo = [{
      name: 'Camry',
    },
    {
      name: 'Suv',
    },
    {
      name: 'Pick Up',
    },
    {
      name: 'Sedan',
    }
  ]
  
  year = [{
      name: '2000',
    },
    {
      name: '2001',
    },
    {
      name: '2002',
    },
    {
      name: '2003',
    },
    {
      name: '2004',
    },
    {
      name: '2005',
    },
    {
      name: '2006',
    },
    {
      name: '2007',
    },
    {
      name: '2008',
    },
    {
      name: '2009',
    },
    {
      name: '2010',
    },
    {
      name: '2011',
    },
    {
      name: '2012',
    },
    {
      name: '2013',
    },
    {
      name: '2014',
    },
    {
      name: '2015',
    },
    {
      name: '2016',
    },
    {
      name: '2017',
    },
    {
      name: '2018',
    }
  ]

  color = [{
    name: 'Negro',
  },
  {
    name: 'Amarillo',
  },
  {
    name: 'Rojo',
  },
  {
    name: 'Blanco',
  }
  ]

  bookingType = [{
    name: 'Carro 7 puestos',
  },
  {
    name: 'Camioneta 6 puestos',
  },
  {
    name: 'Auto de 4 puestos',
  },
  {
    name: 'Caravan 8 puestos',
  },
  {
    name: 'Moto 2 puestos',
  }
  ]

  constructor(private navctrl: NavController, private firebaseService:FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getCurrentUser().subscribe((user) => {
      this.userId = user.uid;
    });
  }

  openpageTRansition() {
    this.navctrl.back();
  }

  addVehicle(){
    let data = {
      brand: this.selectedBrand,
      model: this.selectedModelo,
      year: this.selectedYear,
      bookingType: this.selectedBookingType,
      licencePlate: this.license
    }
    this.firebaseService.addVehicle(data, this.userId);
  }


}

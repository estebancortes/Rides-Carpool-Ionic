
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './pages/tabs/tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'offer',
        children: [
          {
            path: '', loadChildren: () => import('./pages/pickup/pickup.module').then(m => m.PickupPageModule)
          }
        ]
      },

      {
        path: 'inbox',
        children: [
          {
            path: '', loadChildren: () => import('./pages/inbox/inbox.module').then(m => m.InboxPageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: 'find-ride',
        children: [
          {
            path: '', loadChildren: () => import('./pages/find-ride/find-ride.module').then(m => m.FindRidePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'add-car',
    loadChildren: () => import('./pages/add-car/add-car.module').then(m => m.AddCarPageModule)
  },
  {
    path: 'add-new-vehicle',
    loadChildren: () => import('./pages/add-new-vehicle/add-new-vehicle.module').then(m => m.AddNewVehiclePageModule)
  },
  {
    path: 'add-return-description',
    loadChildren: () => import('./pages/add-return-description/add-return-description.module').then(m => m.AddReturnDescriptionPageModule)
  },
  {
    path: 'booking-confirmation',
    loadChildren: () => import('./pages/booking-confirmation/booking-confirmation.module').then(m => m.BookingConfirmationPageModule)
  },
  {
    path: 'book-instantly',
    loadChildren: () => import('./pages/book-instantly/book-instantly.module').then(m => m.BookInstantlyPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./pages/calendar/calendar.module').then(m => m.CalendarPageModule)
  },
  {
    path: 'check-booking',
    loadChildren: () => import('./pages/check-booking/check-booking.module').then(m => m.CheckBookingPageModule)
  },
  {
    path: 'coming-back',
    loadChildren: () => import('./pages/coming-back/coming-back.module').then(m => m.ComingBackPageModule)
  },
  {
    path: 'delete-ride',
    loadChildren: () => import('./pages/delete-ride/delete-ride.module').then(m => m.DeleteRidePageModule)
  },
  {
    path: 'direction',
    loadChildren: () => import('./pages/direction/direction.module').then(m => m.DirectionPageModule)
  },
  {
    path: 'driving-license',
    loadChildren: () => import('./pages/driving-license/driving-license.module').then(m => m.DrivingLicensePageModule)
  },
  {
    path: 'drop-off',
    loadChildren: () => import('./pages/drop-off/drop-off.module').then(m => m.DropOffPageModule)
  },
  {
    path: 'edit-price',
    loadChildren: () => import('./pages/edit-price/edit-price.module').then(m => m.EditPricePageModule)
  },
  {
    path: 'edit-price-list',
    loadChildren: () => import('./pages/edit-price-list/edit-price-list.module').then(m => m.EditPriceListPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
  },
  {
    path: 'edit-ride',
    loadChildren: () => import('./pages/edit-ride/edit-ride.module').then(m => m.EditRidePageModule)
  },
  {
    path: 'find-ride',
    loadChildren: () => import('./pages/find-ride/find-ride.module').then(m => m.FindRidePageModule)
  },
  {
    path: 'find-ride-search-result',
    loadChildren: () => import('./pages/find-ride-search-result/find-ride-search-result.module').then(m => m.FindRideSearchResultPageModule)
  },
  {
    path: 'forget-password',
    loadChildren: () => import('./pages/forget-password/forget-password.module').then(m => m.ForgetPasswordPageModule)
  },
  {
    path: 'inbox',
    loadChildren: () => import('./pages/inbox/inbox.module').then(m => m.InboxPageModule)
  },
  {
    path: 'journey',
    loadChildren: () => import('./pages/journey/journey.module').then(m => m.JourneyPageModule)
  },
  {
    path: 'login-form',
    loadChildren: () => import('./pages/login-form/login-form.module').then(m => m.LoginFormPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./pages/map/map.module').then(m => m.MapPageModule)
  },
  {
    path: 'middle-seat',
    loadChildren: () => import('./pages/middle-seat/middle-seat.module').then(m => m.MiddleSeatPageModule)
  },
  {
    path: 'offer-ride-confirmation',
    loadChildren: () => import('./pages/offer-ride-confirmation/offer-ride-confirmation.module').then(m => m.OfferRideConfirmationPageModule)
  },
  {
    path: 'passengers-option',
    loadChildren: () => import('./pages/passengers-option/passengers-option.module').then(m => m.PassengersOptionPageModule)
  },
  {
    path: 'phone-verification',
    loadChildren: () => import('./pages/phone-verification/phone-verification.module').then(m => m.PhoneVerificationPageModule)
  },
  {
    path: 'pickup',
    loadChildren: () => import('./pages/pickup/pickup.module').then(m => m.PickupPageModule)
  },
  {
    path: 'preferences',
    loadChildren: () => import('./pages/preferences/preferences.module').then(m => m.PreferencesPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'recommended-price',
    loadChildren: () => import('./pages/recommended-price/recommended-price.module').then(m => m.RecommendedPricePageModule)
  },
  // {
  //   path: 'return-time',
  //   loadChildren: () => import('./pages/return-time/return-time.module').then(m => m.ReturnTimePageModule)
  // },
  {
    path: 'ride-details',
    loadChildren: () => import('./pages/ride-details/ride-details.module').then(m => m.RideDetailsPageModule)
  },
  // {
  //   path: 'select-time',
  //   loadChildren: () => import('./pages/select-time/select-time.module').then(m => m.SelectTimePageModule)
  // },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'signup-with-email',
    loadChildren: () => import('./pages/signup-with-email/signup-with-email.module').then(m => m.SignupWithEmailPageModule)
  },
  {
    path: 'stop-over',
    loadChildren: () => import('./pages/stop-over/stop-over.module').then(m => m.StopOverPageModule)
  },
  {
    path: 'total-passengers',
    loadChildren: () => import('./pages/total-passengers/total-passengers.module').then(m => m.TotalPassengersPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./pages/verify-email/verify-email.module').then(m => m.VerifyEmailPageModule)
  },
  {
    path: 'verify-id',
    loadChildren: () => import('./pages/verify-id/verify-id.module').then(m => m.VerifyIdPageModule)
  },
  {
    path: 'verify-phone',
    loadChildren: () => import('./pages/verify-phone/verify-phone.module').then(m => m.VerifyPhonePageModule)
  },
  {
    path: 'stop-over-location',
    loadChildren: () => import('./pages/stop-over-location/stop-over-location.module').then(m => m.StopOverLocationPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

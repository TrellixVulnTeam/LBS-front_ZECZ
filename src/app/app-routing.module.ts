import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { LabBookingComponent } from './lab-booking/lab-booking.component';
import { ProfileComponent } from './profile/profile.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { AdminComponent } from './admin/admin.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { LectureBookingDetailsComponent } from './lecture-booking-details/lecture-booking-details.component';
import { LectureHomeComponent } from './lecture-home/lecture-home.component';
import { LectureLabBookingsComponent } from './lecture-lab-bookings/lecture-lab-bookings.component';
import { LectureProfileComponent } from './lecture-profile/lecture-profile.component';
import { ViewScheduleComponent } from './view-schedule/view-schedule.component';
import { NotificationsComponent } from './notifications/notifications.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'home', component: HomeComponent},
  {path: 'index', component: IndexComponent},
  {path: 'lab-booking', component: LabBookingComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'booking-details', component: BookingDetailsComponent},
  {path: 'view-user', component: ViewUserComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'lecture-booking-details', component: LectureBookingDetailsComponent},
  {path: 'lecture-home', component: LectureHomeComponent},
  {path: 'lecture-lab-bookings', component: LectureLabBookingsComponent},
  {path: 'lecture-profile', component: LectureProfileComponent},
  {path: 'view-schedule', component: ViewScheduleComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, RegisterComponent,
   ForgotPasswordComponent, HomeComponent, IndexComponent, LabBookingComponent, ProfileComponent,
  BookingDetailsComponent, ViewUserComponent, AdminComponent, ScheduleComponent] 

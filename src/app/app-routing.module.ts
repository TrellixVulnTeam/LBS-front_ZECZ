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
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'index', component: IndexComponent},
  {path: 'lab-booking', component: LabBookingComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'booking-details', component: BookingDetailsComponent, canActivate: [AuthGuard]},
  {path: 'view-user', component: ViewUserComponent, canActivate: [AuthGuard]},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  {path: 'schedule', component: ScheduleComponent, canActivate: [AuthGuard]},
  {path: 'lecture-booking-details', component: LectureBookingDetailsComponent, canActivate: [AuthGuard]},
  {path: 'lecture-home', component: LectureHomeComponent, canActivate: [AuthGuard]},
  {path: 'lecture-lab-bookings', component: LectureLabBookingsComponent, canActivate: [AuthGuard]},
  {path: 'lecture-profile', component: LectureProfileComponent, canActivate: [AuthGuard]},
  {path: 'view-schedule', component: ViewScheduleComponent, canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, RegisterComponent,
   ForgotPasswordComponent, HomeComponent, IndexComponent, LabBookingComponent, ProfileComponent,
  BookingDetailsComponent, ViewUserComponent, AdminComponent, ScheduleComponent] 

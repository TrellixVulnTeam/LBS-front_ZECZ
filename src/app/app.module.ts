import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgImageSliderModule } from 'ng-image-slider';
import {NgxPaginationModule} from 'ngx-pagination';

//import service class
import { IssueService } from './issue.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { IndexComponent } from './index/index.component';
import { LabBookingComponent } from './lab-booking/lab-booking.component';
import { ProfileComponent } from './profile/profile.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { AdminComponent } from './admin/admin.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ViewBookingsComponent } from './view-bookings/view-bookings.component';
import { LectureLabBookingsComponent } from './lecture-lab-bookings/lecture-lab-bookings.component';
import { LectureBookingDetailsComponent } from './lecture-booking-details/lecture-booking-details.component';
import { LectureProfileComponent } from './lecture-profile/lecture-profile.component';
import { LectureHomeComponent } from './lecture-home/lecture-home.component';
import { ViewScheduleComponent } from './view-schedule/view-schedule.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AuthGuard } from './auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    IndexComponent,
    LabBookingComponent,
    ProfileComponent,
    BookingDetailsComponent,
    ViewUserComponent,
    AdminComponent,
    ScheduleComponent,
    ViewBookingsComponent,
    LectureLabBookingsComponent,
    LectureBookingDetailsComponent,
    LectureProfileComponent,
    LectureHomeComponent,
    ViewScheduleComponent,
    NotificationsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgImageSliderModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'home', component: HomeComponent },
      { path: 'index', component: IndexComponent },
      { path: 'lab-booking', component: LabBookingComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'booking-details', component: BookingDetailsComponent },
      { path: 'view-user', component: ViewUserComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'schedule', component: ScheduleComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'schedule', component: ScheduleComponent },
      { path: 'view-bookings', component: ViewBookingsComponent },
      { path: 'lecture-labBookings', component: LectureLabBookingsComponent },
      { path: 'lecture-BookingDetails', component: LectureBookingDetailsComponent },
      { path: 'lecture-profile', component: LectureProfileComponent },
      { path: 'lecture-home', component: LectureHomeComponent },
      { path: 'notifications', component: NotificationsComponent },


      { path: '', redirectTo: '/index', pathMatch: 'full' },
    ]),
    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter() {
          return localStorage.getItem('token');

        },
        allowedDomains: ['localhost'],
        disallowedRoutes: ['http://localhost:3000/login'],
      }
    }),
    BrowserAnimationsModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

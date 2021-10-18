
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras} from '@angular/router';
import { HttpClient } from '@angular/common/http'; 




export class notifications {
  constructor(
    public Notification_ID: string,
    public Notification: string,
    public Notification_Date: string,
  ) {
  }
}
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor(private http:HttpClient,private router: Router) { }

 //array to store notifications
notification: notifications[];

  ngOnInit(): void {
    this.getNotifications()
  }



  getNotifications(){

    this.http.get<any>('http://localhost:3000/get_notification').subscribe(
      response => {
       
        
        this.notification = response;
     
        console.log(response);
      }
    );




  }
}

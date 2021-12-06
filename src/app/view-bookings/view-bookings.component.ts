import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router, NavigationExtras} from '@angular/router';
import { HttpClient } from '@angular/common/http'; 
import Swal from 'sweetalert2';
import { ngxCsv } from 'ngx-csv/ngx-csv';

export class bookings {
  constructor(
    public Booking_ID: string,
    public Lab_Name: string,
    public Lab_Slot: string,
    public Num_Bookings: string,
    public User_ID: number,
    public date: string,
   
  ) {
  }
}
//Exports class for details to store localstorage data
export class Details{
  constructor(
    public stud_no: string,
    public stu_name: string,
    public lab_slot: string,
    public Lab_Name: string,
    public Num_Bookings: string,
    public date: string,
    
  ){}
}


@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.css']
})
export class ViewBookingsComponent implements OnInit {

  constructor(private http:HttpClient,private router: Router) { }
  //variable to store the token
  tittle: string;
  //array to store the data from the database
  view:bookings[];
  bookings: bookings[];
 //array to store the data from the localstorage
 detail: Details[];
 //variable to store the student Number
 stuNumber: number;
 //variable that store the number of booking
 Num_Bookings: string;
 //variable for search
 Booking:number;



  ngOnInit(): void {
    this.tittle = localStorage.getItem("token");
    this.getDetails();
  
  }
 

    //get Detail funtion that store the data from local storage to the detail array
    //and connects to booking API
    getDetails(){
      this.http.get<any>('http://localhost:3000/bookings')
    .subscribe(response => {

      this.view = response;
      console.log(response);
    })
        
    }

     // function for search
 Search(){
  
  if(this.Booking > 0){
  this.view = this.view.filter(res=>{
    return JSON.stringify(res.Booking_ID).toLocaleLowerCase().match(JSON.stringify(this.Booking).toLocaleLowerCase())
  })
}else{
  this.http.get<any>('http://localhost:3000/bookings')
  .subscribe(response => {

    this.view = response;
    console.log(response);
  })

}
 }
   
    //on submit function that calls the booking detail API
    onSubmit(data){
      

      var options = { 
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalseparator: '.',
        showLabels: true, 
        showTitle: false,
        title: 'Bookings',
        useBom: true,
        headers: ["Booking_ID", "Lab_Name", "Lab_Slot", "User_ID", "Num_Bookings","Date"]
      };
     
      new ngxCsv(this.view, "records", options);
     
    }

  


    //On click function for logout
      onClick()
      {
        
        localStorage.removeItem("token");
        this.router.navigate(['/index']);
      }


    

}

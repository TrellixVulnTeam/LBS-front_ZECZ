
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router, NavigationExtras} from '@angular/router';
import { HttpClient } from '@angular/common/http'; 
import Swal from 'sweetalert2';
import { EMPTY } from 'rxjs';
import { isEmpty } from 'rxjs/operators';





export class Schedule {
  constructor(
    public Lab_ID: string,
    public Lab_Name: string,
    public Lab_Slot: string,
    public Lab_Capacity: string,
    public Lab_availability: string,
    public Lab_Date: string,
    public time: string,
    public descr: string,
    public users: string,
    public status: string,
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
  selector: 'app-view-schedule',
  templateUrl: './view-schedule.component.html',
  styleUrls: ['./view-schedule.component.css']
})

export class ViewScheduleComponent implements OnInit {

  constructor(private http:HttpClient,private router: Router) { }
  //variable to store the token
  tittle: string;
  //array to store the data from the database
  view:Schedule[];
 //array to store the data from the localstorage
 detail: Details[];
 //variable to store the student Number
 stuNumber: number;
 //variable that store the number of booking
 Num_Bookings: string;
 //Pagination
 totalLength:any;
  page: number = 1;
  page2: number = 2;
  page3: number = 3;

//variable for search
date:string;
date2 :string;





  ngOnInit(): void {
    this.tittle = localStorage.getItem("token");
    this.getDetails();
    
  
  }

      // function for search
 Search(){

  
  if(this.date.length > 9){
    this.view = this.view.filter(res=>{
      return JSON.stringify(res.Lab_Date.substr(0,10)).toLocaleLowerCase().match(JSON.stringify(this.date).toLocaleLowerCase())
    })
    }
    else{
      this.http.get<any>('http://localhost:3000/view-schedule')
      .subscribe(response => {
    
        this.view = response;
        this.totalLength = response.length;
        console.log(response);
        
      }) 
      
    
    }
     
 
}

  sendData(event: any)
  {
    console.log(event.target.value);
  }

    //get Detail funtion that store the data from local storage to the detail array
    //and connects to booking API
    getDetails(){
      this.http.get<any>('http://localhost:3000/view-schedule')
    .subscribe(response => {

      this.view = response;
      this.totalLength = response.length;
      console.log(response);
    })
        
    }

    //on submit function that calls the booking detail API
    onSubmit(data){

    
      
    }
   
    delete(data){

      var jsonPerson = '{"Lab_ID":'+ data +'}';
      var personObject = JSON.parse(jsonPerson);

      console.warn(data +'/updateLabStatus');

      this.http.post('http://localhost:3000/updateLabStatus',personObject, {responseType: 'text'})
      .subscribe((result)=>{
      console.warn("result",result)
      if(result =="Schedule cancelled")
      {
        Swal.fire(
         
          'Schedule cancelled',
          '',
          'success'
        )
        
      }else
      {


        Swal.fire(
          result,
          '',
          'warning'
        )
       
      }
    })

  }

    //On click function for logout
      onClick()
      {
        
        localStorage.removeItem("token");
        this.router.navigate(['/index']);
      }

}

import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router, NavigationExtras} from '@angular/router';
import { HttpClient } from '@angular/common/http'; 
import Swal from 'sweetalert2';


//Exports class for bookings to store database data
export class bookings {
  constructor(
    public Booking_ID: string,
    public Lab_Name: string,
    public Lab_Slot: string,
    public Num_Bookings: string,
    public User_ID: string,
    public date: string,
   
  ) {
  }
}
//Exports class for details to store localstorage data
export class Details{
  constructor(
    public lec_id: string,
    public lec_name: string,
    public lec_surname: string,
    public email: string,
  ){}
}

@Component({
  selector: 'app-lecture-booking-details',
  templateUrl: './lecture-booking-details.component.html',
  styleUrls: ['./lecture-booking-details.component.css']
})


export class LectureBookingDetailsComponent  implements OnInit {

  constructor(private http:HttpClient,private router: Router) { }
  //variable to store the token
  tittle: string;
  //array to store the data from the database
  booking:bookings[];
 //array to store the data from the localstorage
 detail: Details[];
 //variable to store the student Number
 stuNumber: number;
 //variable that store the number of booking
 Num_Bookings: string;

  ngOnInit(): void {
    this.tittle = localStorage.getItem("token");
    this.getDetails();
  }

    //get Detail funtion that store the data from local storage to the detail array
    //and connects to booking API
    getDetails(){
      this.detail = JSON.parse(this.tittle);
        this.stuNumber = JSON.parse(this.detail[0].lec_id);
        
        var st = JSON.stringify(this.stuNumber)
        console.log(st);

        //converting string to object
        var jsonPerson = '{"stuNumber":'+ st +'}';
        var personObject = JSON.parse(jsonPerson);

        //Retrieve information from the database
      this.http.post('http://localhost:3000/bookingStatus',personObject,{responseType:'text'})
      .subscribe((result) =>{
        this.booking = JSON.parse(result);
        console.warn("Results", result);
        //this.booking = result;
      });
      //API for number of bookings
      this.http.post('http://localhost:3000/bookingsNum',personObject,{responseType:'text'})
      .subscribe((result) =>{
        //this.Num_Bookings = JSON.stringify(result);
        this.Num_Bookings = result;
        console.log(this.Num_Bookings);
      });
      console.warn(jsonPerson);

        
    }

    onDelete(data){    
      

      //converting student number to object   
      this.detail = JSON.parse(this.tittle);
      this.stuNumber = JSON.parse(this.detail[0].lec_id);
      
      var st = JSON.stringify(this.stuNumber)

    var jsonPerson = '{"bookingID":'+ st +'}';
    var personObject = JSON.parse(jsonPerson);

  
      console.log(data)
      Swal.fire({
        title: 'Are you sure you want to cancel this booking',
        text: '',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'YES',
        cancelButtonText: 'NO'
      }).then((result) => {
        if (result.isConfirmed) {
    
          //Add the User to the Database
          this.http.post('http://localhost:3000/lec_cancelBooking',personObject,{responseType: 'text'})
          .subscribe((result)=>{
              console.warn("result",result)
              if(result == 'booking has been cancelled')
              {
                Swal.fire(
                  'you have successfully cancelled your booking',
                  '',
                  'success'
                )
              }else{
                
                Swal.fire(
                  result,
                  '',
                  'warning'
                )
               
              }
              
          })
          console.warn(data);
    
          
          
        
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled!',
            '',
            'error'
          )
        }
      })

    }

    //on submit function that calls the booking detail API
    onSubmit(data){
    
    }


    //On click function for logout
      onClick()
      {
        
        localStorage.removeItem("token");
        this.router.navigate(['/index']);
      }

}

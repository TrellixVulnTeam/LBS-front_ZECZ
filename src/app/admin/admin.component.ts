import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';
import { IssueService } from '../issue.service';
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http'; 
import Swal from 'sweetalert2';
import { GroupedObservable } from 'rxjs';
import { __values } from 'tslib';
import { FormsModule } from '@angular/forms';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

export class notifications {
  constructor(
    public Notification_ID: string,
    public Notification: string,
    public Notification_Date: string,
  ) {
  }
}



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})




export class AdminComponent implements OnInit {

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

//on Delete button for deleting notifications
  delete(data){
    var jsonPerson = '{"Notification_ID":'+ data +'}';
    var personObject = JSON.parse(jsonPerson);

    console.log(data)
    Swal.fire({
      title: 'Are you sure you want to delete this Notification',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'YES',
      cancelButtonText: 'NO'
    }).then((result) => {
      if (result.isConfirmed) {
  
        //Add the User to the Database
        this.http.post('http://localhost:3000/DeleteNotification',personObject,{responseType: 'text'})
        .subscribe((result)=>{
            console.warn("result",result)
            if(result == 'Notification successfully deleted')
            {
              Swal.fire(
                'Notification successfully deleted',
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

 //on submit for sending notification

 onSubmit(data)
  {
    
        //sweet Alerts pop up messages
    Swal.fire({
      title: 'Do you want to send this Notification',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'YES',
      cancelButtonText: 'NO'
    }).then((result) => {
      if (result.isConfirmed) {
        // TODO: Use EventEmitter with form value
        //console.warn(this.ngForm.value);
        

        //Add the User to the Database
        this.http.post('http://localhost:3000/notification',data, {responseType:'text'})
        .subscribe((result)=>{
            console.warn("result",result)
            //On submit validation
            if(result == 'Notification sent successfully')
            {
              Swal.fire(
                result,
                '',
                'success'
              )
              //Navigate to the Login page
              
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
          'Cancelled',
          'Could Not Add The User!',
          'error'
        )
      }
    })

  }


  refresh(): void {
    window.location.reload();
  }






  //On click function for logout
  onClick()
  {
    
    localStorage.removeItem("token");
    this.router.navigate(['/index']);
  }

}

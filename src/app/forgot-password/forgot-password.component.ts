import { Component, OnInit } from '@angular/core';
//import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';
//import { IssueService } from '../issue.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private router: Router, private http:HttpClient) { }
//variable to store the selected radio button
answer = '';
  ngOnInit(): void {
  }
  onSubmit(data) {
    // TODO: Use EventEmitter with form value
    //console.warn(this.resetpassForm.value);
    

    //sweet Alerts pop up messages
    Swal.fire({
      title: 'Send the Password to this Email?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'YES',
      cancelButtonText: 'NO'
    }).then((result) => {
      if (result.isConfirmed) {

        //Send data to the API if the selected radio button is for the student
        if(this.answer == 'student')
        {
          this.http.post('http://localhost:3000/forgotPassword',data,{responseType: 'text'})
          .subscribe((result)=>{
            console.warn("result",result)
            if(result == 'student number does not exist please create an account or contact admin' || result == 'please enter student number' )
            {
              Swal.fire(
                result,
                '',
                'warning'
              )
            }else{
              
              Swal.fire(
                'Your password has been sent!',
                '',
                'success'
              )
              //Navigate to the Login page
              this.router.navigate(['/login']);
            }
            
          })

        }
        

        //Send data to the API if the selected radio button is for the Lecturer
        if(this.answer == 'lecturer')
        {
          this.http.post('http://localhost:3000/lecturerPassword',data,{responseType: 'text'})
          .subscribe((result)=>{
            console.warn("result",result)
            if(result == 'Lecturer number does not exist please create an account or contact admin' || result == 'please enter student number' )
            {
              Swal.fire(
                result,
                '',
                'warning'
              )
            }else{
              
              Swal.fire(
                'Your password has been sent!',
                '',
                'success'
              )
              //Navigate to the Login page
              this.router.navigate(['/login']);
            }
            
          })

        }
        

        //check if the radio button is clicked
        if(this.answer == "")
        {
          Swal.fire(
            'Select your Role as a Student or Lecturer',
            '',
            'error'
          )
        }
        
      
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled!',
          '',
          'error'
        )
      }
    })
  }

}
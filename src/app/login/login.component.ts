import { Component, OnInit, Input } from '@angular/core';
//import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';
//import { IssueService } from '../issue.service';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import * as jwtEncrypt from 'jwt-token-encrypt';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {



  constructor(private http: HttpClient, private router: Router) { }
  @Input()
  //variable to store the selected radio button
  answer = '';

  ngOnInit(): void {
  }



  onSubmit(data) {
    // TODO: Use EventEmitter with form value
    //console.warn(this.loginForm.value);
 /*
    const encryption = {
      key: 'AAAAAAAAAAAAAA',
      algorithm: 'aes-256-cbc',
    };

   const jwtDetails = {
      secret: '1234567890', // to sign the token
      // Default values that will be automatically applied unless specified.
      //algorithm: 'HS256',
      //expiresIn: '12h',
      //notBefore: '0s',
      // Other optional values
      key: 'ThisIsMyAppISS',// is used as ISS but can be named iss too
  };*/


    //Check if Selected Radio button is for student
    if (this.answer == "Student") {
      console.log(this.answer);
      //Retrieve Information from the database
      this.http.post('http://localhost:3000/login', data, { responseType: 'text' })
        .subscribe((result) => {
          console.warn("result", result)
          if (result == "incorrect username or password" || result == "Enter Values") {
            Swal.fire(
              result,
              '',
              'warning'
            )

          } else {
            /* const jwt = async()=> {
               
               const token = await jwtEncrypt.generateJWT(
               this.answer,
               encryption,
               result
             );}
             //store the results using a token
             localStorage.setItem("token", result)
            */
            Swal.fire(

              'Successfully Logged In!',
              '',
              'success'
            )
            //Navigate to the Home page
            this.router.navigate(['/home']);
          }

        })
      console.warn(data);
    }
    //Check if Selected Radio button is for Lecturer
    if (this.answer == "Lecturer") {
      console.log(this.answer);
      //Retrieve Information from the database
      this.http.post('http://localhost:3000/lec_login', data, { responseType: 'text' })
        .subscribe((result) => {
          console.warn("result", result)
          if (result == "incorrect username or password" || result == "Enter Values") {
            Swal.fire(
              result,
              '',
              'warning'
            )

          } else {

            //store the results using a token
            localStorage.setItem("token",result);

            Swal.fire(
              'Successfully Logged In!',
              '',
              'success'
            )
            //Navigate to the Home page

            this.router.navigate(['/lecture-home']);


          }

        })
      console.warn(data);
    }
    //Check if Selected Radio button is for Admin
    if (this.answer == "Admin") {
      console.log(this.answer);

      //Retrieve fronm database
      this.http.post('http://localhost:3000/adminLogin', data, { responseType: 'text' })
        .subscribe((result) => {
          console.warn("result", result)
          if (result == "incorrect username or password" || result == "Enter Values") {
            Swal.fire
              (result,
                '',
                'warning'
              )
            //Navigate to the Admin  page


          } else {
            localStorage.setItem("token", result)

            Swal.fire(
              'Successfully Logged In!',
              '',
              'success'
            )

            this.router.navigate(['/admin']);

          }
        })
      console.warn(data);

    }

    //check if the radio button is clicked
    if (this.answer == "") {
      Swal.fire(
        'Select Radio Button',
        '',
        'error'
      )
    }



  }


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; 
import Swal from 'sweetalert2';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private http:HttpClient,private router: Router) { }

  ngOnInit(): void {
  }

  onClick()
  {
    //navigate to the login page
    this.router.navigate(['/login']);
  }
  updates(){
    //navigate to the notification page
    this.router.navigate(['/notifications']);
  }
  //image slider
  imageObject: Array<object> = [{
      thumbImage: 'assets/images/LBS6.jpg',
      text:'Lab booking system group'
    },
    {
      thumbImage:'assets/images/LBS1.jpg',
      text:'Lab booking system group'
    },
    {
      thumbImage: 'assets/images/LBS2.jpg',
      text:'Lab booking system group'
    },
    {
      thumbImage: 'assets/images/LBS4.jpg',
      text:'Lab booking system group'
    },
    {
      thumbImage: 'assets/images/LBS3.jpg',
      text:'Lab booking system group'
    },
    {
      thumbImage: 'assets/images/LBS5.jpg',
      text:'Lab booking system group'
    },
  ]

}


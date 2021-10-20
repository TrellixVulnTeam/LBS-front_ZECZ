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
  imageObject: Array<object> = [
    {
      thumbImage:'assets/images/lab3.jpg',
      text:'Lab booking system group'
    },
    {
      thumbImage: 'assets/images/lab6.jpeg',
      text:'Lab booking system group'
    },
    {
      thumbImage: 'assets/images/lab2.jpg',
      text:'Lab booking system group'
    },
    {
      thumbImage: 'assets/images/lab7.jpg',
      text:'Lab booking system group'
    },
    {
      thumbImage: 'assets/images/lab1.jpg',
      text:'Lab booking system group'
    },
    {
      thumbImage: 'assets/images/lab4.jpg',
      text:'Lab booking system group'
    },
    {
      thumbImage: 'assets/images/lab5.jpg',
      text:'Lab booking system group'
    },
  ]

}


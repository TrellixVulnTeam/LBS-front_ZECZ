import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

export class Students {
  constructor(
    public stud_no: string,
    public stu_name: string,
    public stud_surname: string,
    public email: string,
  ){}
}

export class Lecturers {
  constructor(
    public lec_id: string,
    public lec_name: string,
    public lec_email: string,
  ){}
}



@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  constructor(private http:HttpClient, private router: Router) { }
  //student array to store data from database
  student:Students[];

  lecturer:Lecturers[];

  

  ngOnInit(): void {
    
    this.getStudents();
    this.getLecturer();
    
  }
  //On click function for logout
  onClick()
  {
    
    localStorage.removeItem("token");
    this.router.navigate(['/index']);
  }

  delete(data){

    var jsonPerson = '{"stuNumber":'+ data +'}';
    var personObject = JSON.parse(jsonPerson);

    console.log(data)
    Swal.fire({
      title: 'Are you sure you want to delete this user',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'YES',
      cancelButtonText: 'NO'
    }).then((result) => {
      if (result.isConfirmed) {
  
        //Add the User to the Database
        this.http.post('http://localhost:3000/DeleteStudent',personObject,{responseType: 'text'})
        .subscribe((result)=>{
            console.warn("result",result)
            if(result == 'The student is successfully deleted')
            {
              Swal.fire(
                'user has been successfuly deleted',
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

deleteLecturer(data){
  var jsonPerson = '{"lecturerID":'+ data +'}';
  var personObject = JSON.parse(jsonPerson);

  console.log(data)
    Swal.fire({
      title: 'Are you sure you want to delete this user',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'YES',
      cancelButtonText: 'NO'
    }).then((result) => {
      if (result.isConfirmed) {
  
        //Add the User to the Database
        this.http.post('http://localhost:3000/DeleteLecturer',personObject,{responseType: 'text'})
        .subscribe((result)=>{
            console.warn("result",result)
            if(result == 'The Lecturer is successfully deleted')
            {
              Swal.fire(
                'user has been successfuly deleted',
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


  getStudents(){
    this.http.get<any>('http://localhost:3000/studentsList')
    .subscribe(response => {

      this.student = response;
      console.log(response);
    })
  }
  getLecturer(){
    this.http.get<any>('http://localhost:3000/LecturersList')
    .subscribe(response => {
      this.lecturer = response;
      console.log(response);
    })
  }
  

}

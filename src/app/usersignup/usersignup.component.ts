import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { FormserService } from '../formser.service';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent {
  constructor(private fs:FormserService){
  }
  formdata:any;
  ngOnInit():void{
    this.formdata=new FormGroup({
      name:new FormControl(""),
      username:new FormControl(""),
      email:new FormControl(""),
      phonenumber:new FormControl(""),
      password:new FormControl(""),
      confirmpassword:new FormControl("")
    

    })
  }
   action(data:any){
    console.log(data)
  this.fs.userpost(data).subscribe((res)=>{
    if(res.submit==true){
      alert("submitted successfully")
    }
    else{
      alert("not saved")
    }
  },(err)=>{
    console.log(err);
  })
  }
  }
  
  




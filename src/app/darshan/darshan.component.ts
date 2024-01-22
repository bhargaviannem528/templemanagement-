import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormserService } from '../formser.service';

@Component({
  selector: 'app-darshan',
  templateUrl: './darshan.component.html',
  styleUrls: ['./darshan.component.css']
})
export class DarshanComponent {
  constructor(private fs:FormserService){
  }
  formdata:any;
  ngOnInit():void{
    this.formdata=new FormGroup({
     
      name:new FormControl(""),
      mobile:new FormControl(""),
      darshantype:new FormControl(""),
      date:new FormControl(""),
      cost:new FormControl("")
    })
  }
   action(data:any){
    console.log(data)
  this.fs.darshanpost(data).subscribe((res)=>{
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
  
  


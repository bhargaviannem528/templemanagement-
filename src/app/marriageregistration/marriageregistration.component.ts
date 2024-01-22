import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormserService } from '../formser.service';

@Component({
  selector: 'app-marriageregistration',
  templateUrl: './marriageregistration.component.html',
  styleUrls: ['./marriageregistration.component.css']
})
export class MarriageregistrationComponent {
  constructor(private fs:FormserService){
  }
  formdata:any;
  ngOnInit():void{
    this.formdata=new FormGroup({
      bridename:new FormControl(""),
      groomname:new FormControl(""),
      date:new FormControl(""),
      mail:new FormControl(""),
      phone:new FormControl(""),
      info:new FormControl(""),

    })
  }
   action(data:any){
    console.log(data)
  this.fs.marriagepost(data).subscribe((res)=>{
    if(res.submit==true){
      alert("saved successfully")
    }
    else{
      alert("not saved")
    }
  },(err)=>{
    console.log(err);
  })
  }
  }
  
  


import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormserService } from '../formser.service';

@Component({
  selector: 'app-pooja',
  templateUrl: './pooja.component.html',
  styleUrls: ['./pooja.component.css']
})
export class PoojaComponent {
  constructor(private fs:FormserService){
  }
  formdata:any;
  ngOnInit():void{
    this.formdata=new FormGroup({
     poojatype:new FormControl(""),
      cost:new FormControl(""),
      name:new FormControl(""),
      mobile:new FormControl(""),
      type:new FormControl("")
    

    })
  }
   action(data:any){
    console.log(data)
  this.fs.poojapost(data).subscribe((res)=>{
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
  
  





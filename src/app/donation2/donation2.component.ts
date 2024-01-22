import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormserService } from '../formser.service';

@Component({
  selector: 'app-donation2',
  templateUrl: './donation2.component.html',
  styleUrls: ['./donation2.component.css']
})
export class Donation2Component {
  constructor(private fs:FormserService){
  }
  formdata:any;
  ngOnInit():void{
    this.formdata=new FormGroup({
      type:new FormControl(""),
      amount:new FormControl(""),
      date:new FormControl("")
    })
  }
   action(data:any){
    console.log(data)
  this.fs.donetapost(data).subscribe((res)=>{
    if(res.submit==true){
      alert("donated successfully")
    }
    else{
      alert("not saved")
    }
  },(err)=>{
    console.log(err);
  })
  }
  }
  
  


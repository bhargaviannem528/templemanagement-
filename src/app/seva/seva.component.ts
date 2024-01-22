import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormserService } from '../formser.service';

@Component({
  selector: 'app-seva',
  templateUrl: './seva.component.html',
  styleUrls: ['./seva.component.css']
})
export class SevaComponent {
  constructor(private fs:FormserService){
  }
  formdata:any;
  ngOnInit():void{
    this.formdata=new FormGroup({
      name:new FormControl(""),
      mobile:new FormControl(""),
      sevatype:new FormControl(""),
      start:new FormControl(""),
      end:new FormControl("")
    

    })
  }
   action(data:any){
    console.log(data)
  this.fs.sevapost(data).subscribe((res)=>{
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
  
  




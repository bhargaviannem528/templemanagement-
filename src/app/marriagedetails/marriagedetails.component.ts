import { Component } from '@angular/core';
import { FormserService } from '../formser.service';

@Component({
  selector: 'app-marriagedetails',
  templateUrl: './marriagedetails.component.html',
  styleUrls: ['./marriagedetails.component.css']
})
export class MarriagedetailsComponent {
  details:any={};
  constructor(private bh: FormserService ){}
  ngOnInit(): void {
       this.donate();


       
     }
     donate(){
         this.bh.marriagedetailsservice().subscribe((response)=>{
          console.log(response.result[0]);
          this.details=response.result;
          console.log(this.details)
         },(err)=>{
          console.log(err.error);
         }
         )
         
     }

}

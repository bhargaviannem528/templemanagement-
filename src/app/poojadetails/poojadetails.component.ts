import { Component,OnInit } from '@angular/core';
import { FormserService } from '../formser.service';

@Component({
  selector: 'app-poojadetails',
  templateUrl: './poojadetails.component.html',
  styleUrls: ['./poojadetails.component.css']
})
export class PoojadetailsComponent  implements OnInit{
    details:any={};
  constructor(private bh: FormserService ){}
  ngOnInit(): void {
       this.pooja();


       
     }
     pooja(){
         this.bh.poojadetailsservice().subscribe((response)=>{
          console.log(response.result[0]);
          this.details=response.result;
          console.log(this.details)
         },(err)=>{
          console.log(err.error);
         }
         )
         
     }
    }

import { Component } from '@angular/core';
import { FormserService } from '../formser.service';

@Component({
  selector: 'app-sevadetails',
  templateUrl: './sevadetails.component.html',
  styleUrls: ['./sevadetails.component.css']
})
export class SevadetailsComponent {
  details:any={};
  constructor(private bh: FormserService ){}
  ngOnInit(): void {
       this.pooja();


       
     }
     pooja(){
         this.bh.sevadetailsservice().subscribe((response)=>{
          console.log(response.result[0]);
          this.details=response.result;
          console.log(this.details)
         },(err)=>{
          console.log(err.error);
         }
         )
         
        }
      }
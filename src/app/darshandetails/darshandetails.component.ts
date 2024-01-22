import { Component } from '@angular/core';

import { FormserService } from '../formser.service';

@Component({
  selector: 'app-darshandetails',
  templateUrl: './darshandetails.component.html',
  styleUrls: ['./darshandetails.component.css']
})
export class DarshandetailsComponent {
  details:any={};
  constructor(private bh: FormserService ){}
  ngOnInit(): void {
       this.donate();


       
     }
     donate(){
         this.bh.darshandetailsservice().subscribe((response)=>{
          console.log(response.result[0]);
          this.details=response.result;
          console.log(this.details)
         },(err)=>{
          console.log(err.error);
         }
         )
         
     }
}

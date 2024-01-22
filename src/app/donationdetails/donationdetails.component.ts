import { Component } from '@angular/core';
import { FormserService } from '../formser.service';

@Component({
  selector: 'app-donationdetails',
  templateUrl: './donationdetails.component.html',
  styleUrls: ['./donationdetails.component.css']
})
export class DonationdetailsComponent {
  details:any={};
  constructor(private bh: FormserService ){}
  ngOnInit(): void {
       this.donate();


       
     }
     donate(){
         this.bh.donatedetailsservice().subscribe((response)=>{
          console.log(response.result[0]);
          this.details=response.result;
          console.log(this.details)
         },(err)=>{
          console.log(err.error);
         }
         )
         
     }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FormserService {

  constructor(private http:HttpClient) { }
  public reg(user:any):Observable<any>{
    console.log(user)
    return this.http.post("http://localhost:5000/registerapi",user)
    
  }
  
  
    public donetapost(ddata:any):Observable<any>{
     return this.http.post("http://localhost:5000/donateapi",ddata)
     
    }
    public sevapost(data:any):Observable<any>{
      return this.http.post("http://localhost:5000/sevaapi",data)
      
     }
     public poojapost(fdata:any):Observable<any>{
      return this.http.post("http://localhost:5000/poojaapi",fdata)
      
     }
     public darshanpost(fdata:any):Observable<any>{
      return this.http.post("http://localhost:5000/darshanapi",fdata)
      
     }
     public poojadetailsservice():Observable<any>{
      return this.http.get("http://localhost:5000/detailsapi")
      
     }
     
     public darshandetailsservice():Observable<any>{
      return this.http.get("http://localhost:5000/darapi")
      
     }
     public donatedetailsservice():Observable<any>{
      return this.http.get("http://localhost:5000/donateapi")
      
     }
     public sevadetailsservice():Observable<any>{
      return this.http.get("http://localhost:5000/detailssapi")
      
     }
     public marriagedetailsservice():Observable<any>{
      return this.http.get("http://localhost:5000/marrapi")
      
     }
     public userpost(udata:any):Observable<any>{
      return this.http.post("http://localhost:5000/userapi",udata)
      
     }
     public marriagepost(udata:any):Observable<any>{
      return this.http.post("http://localhost:5000/marrapi",udata)
      
     }
     
     
     
  }
  
  


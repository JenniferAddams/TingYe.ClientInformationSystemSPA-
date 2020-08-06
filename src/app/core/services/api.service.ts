import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( protected http:HttpClient) { }
  getAll(path:string):Observable<any[]>{
    //we need to append the common url with path that is being passed
    //map is the same as select in Linq
    //1,2,3 select map(n=>n*n)=>1,4,9
    //where(n=>n>2) fulter(n=>n>2)
    //return a list of array
    //observable is similar to task<> we work async
    return this.http.get(`${environment.apiUrl}${path}`).pipe(
      map(resp=>resp as any[])
    )
      }
    
      //rxjs library
      getOne(path:string ,id:number):Observable<any>{
        return this.http.get(`${environment.apiUrl}${path}+'/'+'id'`).pipe(
          map(resp=>resp as any)
        )
      }
      //post some information
      //login, signup,create movie
      create(path:string,resource:any):Observable<any>{
        return this.http.post(`${environment.apiUrl}${path}`,resource).pipe(map(response=>response));
    
      }
      //update my movie info
      update(){
    
      }
      delete(){
    
  }}

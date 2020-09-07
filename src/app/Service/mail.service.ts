import { Injectable } from '@angular/core';
import { Inquery } from '../model/inqueryModel';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  private _httpClient : HttpClient;

  BASE_URL : string = "http://coder.technoplex.co.in/api/";
  
  
  constructor(private httpClient: HttpClient) {   
  
    
     }

    

     SendMail(_input:Inquery)
     {
       debugger;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          
        })
      }
      return this.httpClient.post<any>( this.BASE_URL +'Mail/SendFromGmail', _input,httpOptions).pipe(catchError(this.handleError));
     }

     handleError(error: HttpErrorResponse) {
      let errorMessage = 'Unknown error!';
      if (error.error instanceof ErrorEvent) {
        // Client-side errors
        errorMessage = `Error: ${error.error.message}`;
      } else {
        // Server-side errors
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      window.alert(errorMessage);
      return throwError(errorMessage);
    }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contactanos } from '../shares/model/contacto.interface';
import { Observable, throwError } from 'rxjs';
import { map, catchError, take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ContactanosService {
  constructor(private http: HttpClient) { }
 sendContact(data: Contactanos): Observable<Contactanos | void> {
  	const headers = new HttpHeaders();
  	return this.http.post<Contactanos>(`api/`, data, {headers})
  	.pipe(
  			map( (res: any) => {
  			return res;
  			}
  		),
  		catchError( (err) => this.handlerError(err))
  	);
  }

  private handlerError(err: any): Observable<never> {
    let errorMessage = 'An error ocurred retrieving data';
    if(err){ 
    errorMessage = `Error: code ${err.message}`;
    }
    return throwError(errorMessage);
  }

 }
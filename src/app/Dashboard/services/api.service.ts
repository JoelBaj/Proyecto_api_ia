import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ReqResResponse } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl: string = environment.baseUrl;

  constructor(private http:HttpClient) { }

  cargarUser():Observable<ReqResResponse>{
    const url = `${this.apiUrl}`;
    return this.http.get<ReqResResponse>(url);
  }



}

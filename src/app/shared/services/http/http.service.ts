import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {

  constructor(private http: HttpClient) {}
  
  private defaultHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  private apiUrl = environment.apiUrl;

  async get<T>(url: string, params?: HttpParams | { [param: string]: string | number | boolean }): Promise<T | undefined> {
    return await this.http.get<T>(this.apiUrl + url, {
      headers: this.defaultHeaders,
      params: params instanceof HttpParams ? params : new HttpParams({ fromObject: params })
    }).toPromise();
  }

  async post<T>(url: string, body: any, headers?: HttpHeaders): Promise<T | undefined> {
    return await this.http.post<T>(this.apiUrl + url, body, {
      headers: headers || this.defaultHeaders
    }).toPromise();
  }

  async put<T>(url: string, body: any, headers?: HttpHeaders): Promise<T | undefined> {
    return await this.http.put<T>(this.apiUrl + url, body, {
      headers: headers || this.defaultHeaders
    }).toPromise();
  }

  async patch<T>(url: string, body: any, headers?: HttpHeaders): Promise<T | undefined> {
    return await this.http.patch<T>(this.apiUrl + url, body, {
      headers: headers || this.defaultHeaders
    }).toPromise();
  }

  async delete<T>(url: string, params?: HttpParams | { [param: string]: string | number | boolean }): Promise<T | undefined> {
    return await this.http.delete<T>(this.apiUrl + url, {
      headers: this.defaultHeaders,
      params: params instanceof HttpParams ? params : new HttpParams({ fromObject: params })
    }).toPromise();
  }
}

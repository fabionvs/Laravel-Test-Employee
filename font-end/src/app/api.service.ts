import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from "./employee/employee.model";
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  uri = 'http://127.0.0.1:8000/api/employee';

  public getEmployees(){
    return this.httpClient.get<Employee[]>(`${this.uri}`);
  }

  public getEmployee(id): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.uri}/${id}`);
  }
}

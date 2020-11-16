import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../../shared/models/employee';


@Injectable({
    providedIn: 'root'
})

export class EmployeeService {
    readonly roootUrl = 'https://localhost:44354/api';

    constructor(private http: HttpClient) {}

    getEmployees() {
        return this.http.get<Employee[]>(this.roootUrl + '/Employee');
    }
}

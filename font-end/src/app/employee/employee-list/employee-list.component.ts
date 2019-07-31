import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../api.service';
import { Employee } from "../employee.model";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-employee',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

    employess: Employee[];

    constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) {
    }
    ngOnInit() {
        this.getEmployees();
    }

    getEmployees(): void {
        this.apiService.getEmployees().subscribe((data) => {
            this.employess = data;
            if(data == null){
                this.router.navigate(['/']);
            }
        });
    }

}

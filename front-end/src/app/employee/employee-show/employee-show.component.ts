import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../api.service';
import { Employee } from "../employee.model";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-employee',
    templateUrl: './employee-show.component.html',
    styleUrls: ['./employee-show.component.css']
})
export class EmployeeShowComponent implements OnInit {

    employee: Employee;

    constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.getEmployee(this.route.snapshot.params.id);
    }

    getEmployee(id): void {
        this.apiService.getEmployee(id).subscribe((data) => {
            this.employee = data;
            if(data == null){
                this.router.navigate(['/']);
            }
        });
    }

}

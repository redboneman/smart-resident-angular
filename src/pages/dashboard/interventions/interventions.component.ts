import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-interventions',
    templateUrl: './interventions.component.html',
    styleUrls: ['./interventions.component.scss']
})
export class InterventionsComponent implements OnInit {

    constructor(
        private http: HttpClient
    ) {
    }

    ngOnInit(): void {
        this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe({
            next: response => {
                console.log(response);
            }
        })
        this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe({
            next: response => {
                console.log(response);
            }
        })
        this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe({
            next: response => {
                console.log(response);
            }
        })
    }

}

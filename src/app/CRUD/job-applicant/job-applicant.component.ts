import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-job-applicant',
  templateUrl: './job-applicant.component.html',
  styleUrls: ['./job-applicant.component.scss']
})
export class JobApplicantComponent {
  applicationDetails: any[] = [];


   private baseUrl = 'http://localhost:3006';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>(`${this.baseUrl}/application-forms`).subscribe(
      data => {
        this.applicationDetails = data;
        console.log(this.applicationDetails); // Log the data after assignment
      },
      error => console.error('Error fetching resumes:', error)
    );
  }
}

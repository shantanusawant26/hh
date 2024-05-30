import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contacts: any[] = [];


  private baseUrl = 'http://localhost:3006';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>(`${this.baseUrl}/contact`).subscribe(
      data => {
        this.contacts = data;
        console.log(this.contacts); // Log the data after assignment
      },
      error => console.error('Error fetching resumes:', error)
    );
  }
}





// 

// uploadResume(data: FormData): Observable<any> {
//   return this.http.post(`${this.baseUrl}/upload`, data);
// }

// getResumes(): Observable<any> {
//   return this.http.get(`${this.baseUrl}/application-forms`);
//   // console.log(application-forms)
// }

// resumes: any[] = [];

//   constructor(private resumeService: ResumeService) { }

//   ngOnInit() {
//     this.resumeService.getResumes().subscribe(
//       data => this.resumes = data,
//       error => console.error('Error fetching resumes:', error)
//     );
//   }
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent {
  private apiUrl = 'http://localhost:3000/store-data'; 
  applicationForm: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private http: HttpClient) {
    this.applicationForm = this.fb.group({
      position: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      alternateContactNumber: [''],
      dob: ['', Validators.required],
      linkedin: [''],
      currentCompany: ['', Validators.required],
      totalExperience: ['', Validators.required],
      relevantExperience: ['', Validators.required],
      currentCTC: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      expectedCTC: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      noticePeriod: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      resume: [null, Validators.required]
    });
  }
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.applicationForm.patchValue({
        resume: file
      });
    }
  }
  onSubmit(): void {
    this.submitted = true;
    const formData = new FormData();
    // formData.append(this.applicationForm.value)

    if (this.applicationForm.valid) {
      const formData = new FormData();
      formData.append('position', this.applicationForm.get('position')?.value);
      formData.append('firstName', this.applicationForm.get('firstName')?.value);
      formData.append('lastName', this.applicationForm.get('lastName')?.value);
      formData.append('email', this.applicationForm.get('email')?.value);
      formData.append('contactNumber', this.applicationForm.get('contactNumber')?.value);
      formData.append('alternateContactNumber', this.applicationForm.get('alternateContactNumber')?.value);
      formData.append('dob', this.applicationForm.get('dob')?.value);
      formData.append('linkedin', this.applicationForm.get('linkedin')?.value);
      formData.append('currentCompany', this.applicationForm.get('currentCompany')?.value);
      formData.append('totalExperience', this.applicationForm.get('totalExperience')?.value);
      formData.append('relevantExperience', this.applicationForm.get('relevantExperience')?.value);
      formData.append('currentCTC', this.applicationForm.get('currentCTC')?.value);
      formData.append('expectedCTC', this.applicationForm.get('expectedCTC')?.value);
      formData.append('noticePeriod', this.applicationForm.get('noticePeriod')?.value);
      formData.append('resume', this.applicationForm.get('resume')?.value);
        this.http.post<any>('http://localhost:3006/application-forms', formData)
          .subscribe(response => {
            // Handle response from the backend
            console.log(response);
            this.snackBar.open('Form successfully submitted!', 'Close', {
              duration: 3000,
            });
          });

      // Clear the form
      this.applicationForm.reset();
      this.submitted = false;
    } else {
      console.log('Form is invalid');
    }
  }


}

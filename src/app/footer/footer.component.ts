
import { Router } from '@angular/router';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  private apiUrl = 'http://localhost:3006';

  subscribeForm :FormGroup;
  constructor(private fb: FormBuilder,private router: Router, private http: HttpClient) {
    this.subscribeForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }




  scrollToSection(section: string) {
    console.log(section)
    this.router.navigate([''], { fragment: section });
    console.log("hellow")
  }

  @ViewChild('emailInput') emailInput!: ElementRef;

  onSubmit() {
    const email = this.emailInput.nativeElement.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email) {
      alert('Email is required');
      return;
    }else if(!emailPattern.test(email)) {
      alert('Please enter a valid email address');
      return;
    }else{
      if(this.subscribeForm.valid){
      this.http.post(`${this.apiUrl}/subscribe`,this.subscribeForm.value ).subscribe(
        response => {
          console.log(response);
          alert('Subscribe successfully!');
          this.subscribeForm.reset();
          
        },
        error => {
          console.error(error);
          alert('Failed to submit the application.');
        }
      );
    }else{
      alert("invalid email ")
    }
    }

    // Simple email validation
    
    // if 

    // Handle the subscription logic here
    // alert('Subscription successful!');
  }

}


import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent  {
  contactForm: FormGroup;
  submitted: boolean = false;
  ngOnInit(): void {

  }
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      console.log(formData)
      this.http.post<any>('http://localhost:3006/contact', formData).subscribe(
        response => {
          console.log(response);
          alert('Form submitted successfully!');
          this.contactForm.reset();
          this.submitted = false;
        },
        error => {
          console.error('Submission error:', error);
          alert('Failed to submit form. Please try again.');
        }
      );
    } else {
      console.log('Form is invalid');
    }

  }

  
}
  


  // @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  // map: google.maps.Map;
  // lat = 18.5204;
  // lng = 73.8567;



  // ngOnInit() {
  //   // this.initMap();
  // }


  // initMap() {
  //   const mapOptions: google.maps.MapOptions = {
  //     center: {lat: this.lat, lng: this.lng},
  //     zoom: 12,
  //   };
  //   this.map = new google.maps.Map(this.gmap.nativeElement, mapOptions);
  //   const marker = new google.maps.Marker({
  //     position: {lat: this.lat, lng: this.lng},
  //     map: this.map,
  //     title: 'Our Location'
  //   });
  // }




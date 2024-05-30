// import { Component, OnInit, ViewChild, ElementRef, OnDestroy  } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css']
// })
// export class HeaderComponent implements OnInit  {


// Images = [
//     '/assets/young-man-woman-protective-glasses-doing-experiments-robotics-laboratory.jpg',
//     '../../assets/young-engineer-working-new-school-project-robotics.jpg',
//     '../../assets/top-view-woman-drawing-ipad.jpg',
//     '../../assets/four-kids-building-drone-using-electronic-parts.jpg',
//     '../../assets/father-sons-making-robot.jpg',
//     '../../assets/cartoon-dragon-character.jpg',
// ];

// currentIndex = 0;
// transitionEnabled = true;

// scrollLeft() {
//   this.transitionEnabled = true;
//   this.currentIndex = (this.currentIndex === 0) ? this.Images.length - 1 : this.currentIndex - 1;
// }

// scrollRight() {
//   this.transitionEnabled = true;
//   if (this.currentIndex === this.Images.length - 1) {
//       this.currentIndex = 0;
//       this.transitionEnabled = false;
//       setTimeout(() => {
//           this.transitionEnabled = true;
//           this.scrollRight();
//       }, 5000); 
//   } else {
//       this.currentIndex++;
//   }
// }

// ngOnInit() {
//   setInterval(() => {
//       this.scrollRight();
//   }, 5000);
// }


  
// // Courses
//   images = [
//     '../../assets/img/course2.avif',
//     '../../assets/img/Course3.avif',
//     '../../assets/img/Course1.avif',
//     '../../assets/img/Course4.avif',
    
//   ];

//   currIndex = 0;

//   previousImage() {
//     this.currIndex = (this.currIndex - 1 + this.images.length) % this.images.length;
//   }
//   nextImage() {
//     this.currIndex = (this.currIndex + 1) % this.images.length;
  
//   }



//   //services
//   currBoxIndex = 0;
//   totalBoxes = 18;

//   previousBox() {
//     this.currBoxIndex = (this.currBoxIndex - 1 + this.totalBoxes) % this.totalBoxes;
//   }

//   nextBox() {
//     this.currBoxIndex = (this.currBoxIndex + 1) % this.totalBoxes;
//   }

//   //feedback
//   @ViewChild('boxWrapper', { static: false }) boxWrapper!: ElementRef;
//   currFeed = 0;
//   totalFeed = 3;
//   items = new Array(this.totalFeed);  

//   previousFeed() {
//     this.currFeed = (this.currFeed - 1 + this.totalFeed) % this.totalFeed;
//     this.updateCarousel();
//   }

//   nextFeed() {
//     this.currFeed = (this.currFeed + 1) % this.totalFeed;
//     this.updateCarousel();
//   }

//   updateCarousel() {
//     const boxWidth = this.boxWrapper.nativeElement.querySelector('.boxx').offsetWidth + 20; // box width + margin-right
//     this.boxWrapper.nativeElement.scrollLeft = this.currFeed * boxWidth;
//   }

//   showPopup = true;
//   name = '';
//   message = '';

//   hidePopup() {
//     this.showPopup = false;
//   }

// }








import { Component, OnInit, ViewChild, ElementRef, OnDestroy  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {


Images = [
    '/assets/young-man-woman-protective-glasses-doing-experiments-robotics-laboratory.jpg',
    '../../assets/young-engineer-working-new-school-project-robotics.jpg',
    '../../assets/top-view-woman-drawing-ipad.jpg',
    '../../assets/four-kids-building-drone-using-electronic-parts.jpg',
    '../../assets/father-sons-making-robot.jpg',
    '../../assets/cartoon-dragon-character.jpg',
];

currentIndex = 0;
transitionEnabled = true;

scrollLeft() {
  this.transitionEnabled = true;
  this.currentIndex = (this.currentIndex === 0) ? this.Images.length - 1 : this.currentIndex - 1;
}

scrollRight() {
  this.transitionEnabled = true;
  if (this.currentIndex === this.Images.length - 1) {
      this.currentIndex = 0;
      this.transitionEnabled = false;
      setTimeout(() => {
          this.transitionEnabled = true;
          this.scrollRight();
      }, 5000); 
  } else {
      this.currentIndex++;
  }
}




  
// Courses
  images = [
    '../../assets/img/course2.avif',
    '../../assets/img/Course3.avif',
    '../../assets/img/Course1.avif',
    '../../assets/img/Course4.avif',
    
  ];

  currIndex = 0;

  previousImage() {
    this.currIndex = (this.currIndex - 1 + this.images.length) % this.images.length;
  }
  nextImage() {
    this.currIndex = (this.currIndex + 1) % this.images.length;
  
  }



  //services
  currBoxIndex = 0;
  totalBoxes = 18;

  previousBox() {
    this.currBoxIndex = (this.currBoxIndex - 1 + this.totalBoxes) % this.totalBoxes;
  }

  nextBox() {
    this.currBoxIndex = (this.currBoxIndex + 1) % this.totalBoxes;
  }

  //feedback
  @ViewChild('boxWrapper', { static: false }) boxWrapper!: ElementRef;
  currFeed = 0;
  totalFeed = 3;
  items = new Array(this.totalFeed);  

  previousFeed() {
    this.currFeed = (this.currFeed - 1 + this.totalFeed) % this.totalFeed;
    this.updateCarousel();
  }

  nextFeed() {
    this.currFeed = (this.currFeed + 1) % this.totalFeed;
    this.updateCarousel();
  }

  updateCarousel() {
    const boxWidth = this.boxWrapper.nativeElement.querySelector('.boxx').offsetWidth + 20; // box width + margin-right
    this.boxWrapper.nativeElement.scrollLeft = this.currFeed * boxWidth;
  }

  showPopup = false;
  name = '';
  message = '';

  ngOnInit() {
    setInterval(() => {
      this.scrollRight();
    }, 5000);
    this.showPopupBox();
  }

  showPopupBox() {
    this.showPopup = true;
    setTimeout(() => {
      const popupElement = document.querySelector('.popup');
      if (popupElement) {
        popupElement.classList.add('show');
      }
    }, 15);  // Slight delay to allow for the initial rendering
  }

  hidePopup() {
    const popupElement = document.querySelector('.popup');
    if (popupElement) {
      popupElement.classList.remove('show');
    }
    setTimeout(() => {
      this.showPopup = false;
    }, 500);  // Match the transition duration in CSS
}

}
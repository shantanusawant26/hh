// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// interface Message {
//   text: string;
//   user: boolean;
// }
// @Component({
//   selector: 'app-chatbot',
//   templateUrl: './chatbot.component.html',
//   styleUrls: ['./chatbot.component.scss']
// })


// export class ChatbotComponent {
//   messages: Message[] = [];
//   newMessage: string = '';

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {}
//   // messages: { text: string, sender: string }[] = [];
//   userInput: string = '';

//   // sendMessage() {
//   //   if (this.userInput.trim()) {
//   //     this.messages.push({ text: this.userInput, sender: 'user' });
//   //     this.getBotResponse(this.userInput);
//   //     this.userInput = '';
//   //   }
//   // }

//   // getBotResponse(message: string) {
//   //   // Mock bot response logic
//   //   const botResponse = 'I am a chatbot, how can I help you?';
//   //   setTimeout(() => {
//   //     this.messages.push({ text: botResponse, sender: 'bot' });
//   //   }, 1000);
//   // }
//   showChatInterface: boolean = false;

//   toggleChatInterface() {
//     this.showChatInterface = !this.showChatInterface;
//     // You can add logic here to open or close the messenger
//   }

//   sendMessage() {
//     if (this.newMessage.trim() === '') return;

//     const userMessage: Message = { text: this.newMessage, user: true };
//     this.messages.push(userMessage);

//     this.http.post<any>('http://localhost:3006/message', { text: this.newMessage })
//       .subscribe(response => {
//         const botMessage: Message = { text: response.message, user: false };
//         this.messages.push(botMessage);
//       });

//     this.newMessage = '';
//   }

  
// }


// import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// interface Message {
//   text: string;
//   user: boolean;
// }

// @Component({
//   selector: 'app-chatbot',
//   templateUrl: './chatbot.component.html',
//   styleUrls: ['./chatbot.component.scss']
// })
// export class ChatbotComponent implements OnInit, AfterViewChecked {
//   messages: Message[] = [];
//   newMessage: string = '';
//   showChatInterface: boolean = false;

//   @ViewChild('messagesContainer') private messagesContainer: ElementRef;

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {}

//   ngAfterViewChecked() {
//     this.scrollToBottom();
//   }

//   scrollToBottom(): void {
//     try {
//       this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
//     } catch (err) {
//       console.error('Scroll to bottom failed', err);
//     }
//   }

//   toggleChatInterface() {
//     this.showChatInterface = !this.showChatInterface;
//   }

//   sendMessage() {
//     if (this.newMessage.trim() === '') return;

//     const userMessage: Message = { text: this.newMessage, user: true };
//     this.messages.push(userMessage);

//     this.http.post<any>('http://localhost:3006/message', { text: this.newMessage })
//       .subscribe(response => {
//         const botMessage: Message = { text: response.message, user: false };
//         this.messages.push(botMessage);
//       });

//     this.newMessage = '';
//   }
// }



import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Message {
  text: string;
  user: boolean;
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit, AfterViewChecked {
  messages: Message[] = [];
  newMessage: string = '';
  showChatInterface: boolean = false;

  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Scroll to bottom failed', err);
    }
  }

  toggleChatInterface() {
    this.showChatInterface = !this.showChatInterface;
  }

  sendMessage() {
    if (this.newMessage.trim() === '') return;

    const userMessage: Message = { text: this.newMessage, user: true };
    this.messages.push(userMessage);

    this.http.post<any>('http://localhost:3006/message', { text: this.newMessage })
      .subscribe(response => {
        const botMessage: Message = { text: response.message, user: false };
        this.messages.push(botMessage);
      });

    this.newMessage = '';
  }
}

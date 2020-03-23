import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  @ViewChild('myForm', {static: false}) myForm : NgForm; 
  submitted = false;

  constructor() { }

  onSubmit() {
    console.log(this.myForm.value.name + " " + 
      this.myForm.value.email + " " + this.myForm.value.name);
      this.submitted=true;
      this.myForm.reset();
      setTimeout(()=>{this.submitted=false},3000);
  }

  ngOnInit(): void {
  }

}

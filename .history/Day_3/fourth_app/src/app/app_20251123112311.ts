import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { validateHeaderValue } from 'node:http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //Form Model Definition
  profileForm = new FormGroup({
    name:new FormControl('', [Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)]),
    email:new FormControl('',[Validators.required,Validators.maxLength(50)]),
  })

  onSubmit(){
    console.log(this.profileForm.value);
    
  }

  // setValue(){
  //   this.profileForm.setValue({
  //     name:'test',
  //     password:'321',
  //     email:"test@gmail.com"
  //   })
  // }
}

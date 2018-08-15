import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  display:boolean = true;
  username:string = "";
  password:string = "";

  showSubmitButton: boolean = false;

  checkValidation(){
    var value = true;
    if(this.username ===""){
      value = false;
    }
    if(this.password === ""){
      value = false;
    }
    this.showSubmitButton = value;
  }

  submit(){
    if(this.username === 'test' && this.password === 'test'){
      this.router.navigate(['add-patient']);
    }else{
      alert("Username or password is incorrect");
    }
  }
}

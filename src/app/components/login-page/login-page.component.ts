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
  username:string = "test";
  password:string = "test";

  showSubmitButton: boolean = false;
  msgs:any;

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
  showError() {
    this.msgs = [];
    this.msgs.push({severity:'error', summary:'Error Message', detail:'Validation failed'});
}
  
  submit(){
    if(this.username === 'test' && this.password === 'test'){
      this.router.navigate(['add-patient']);
    }else{
      this.username = "";
      this.password = "";
      this.showError();
    }
  }
}

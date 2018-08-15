import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.currentPatient.subscribe(res => {
      if(res !== null){
        this.patientModel = res;
        this.patientSearch = false;
      }
    });

    this.sharedService.currentTP.subscribe(res => {
    })
    this.sharedService.currentTreeviewState.subscribe(res => {
      this.buttonState = res;
    })
    this.sharedService.currentAddProductState.subscribe(res =>{
      this.patientSearch = res;
    })

    this.sharedService.currentSubmitGroupState.subscribe(res =>{
      this.showSubmitGroupButton = res;
    })

    this.sharedService.productArray.subscribe(res => {
      if(res!==null){
        var value = {
          ProductID:res.ProductID,
          Dosage:res.Dosage,
          Frequency:res.Frequency,
          Repeat:res.CycleLength,
        }
        this.products.push(value);
      }
    })
  }

  patientModel:any;
  patientSearch:boolean;
  buttonState:boolean;
  showSubmitGroupButton:boolean;
  products:any[];
}

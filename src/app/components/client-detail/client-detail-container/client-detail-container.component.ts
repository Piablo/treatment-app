import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PatientDetails } from '../../../../assets/models/patient';

@Component({
  selector: 'app-client-detail-container',
  templateUrl: './client-detail-container.component.html',
  styleUrls: ['./client-detail-container.component.css']
})
export class ClientDetailContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showAutocomplete:boolean = true;
  patientDetails:PatientDetails;

  populateModel(model){
    this.patientDetails = model;
    console.log(this.patientDetails);
    this.showAutocomplete = false;
  }
  updateModel(event){
    console.log(event);
  }
}

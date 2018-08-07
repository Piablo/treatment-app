import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PatientDetails } from '../../../../assets/models/patient';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-client-detail-container',
  templateUrl: './client-detail-container.component.html',
  styleUrls: ['./client-detail-container.component.css']
})
export class ClientDetailContainerComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    console.log('client-detail-container')
    this.sharedService.currentPatient.subscribe(res => {
      console.log(res);
    })
  }
  showAutocomplete:boolean = true;
  patientDetails:PatientDetails;

  populateModel(model){
    this.patientDetails = model;
    this.showAutocomplete = false;
  }
  updateModel(event){
    //console.log(event);
  }
  addMedicationInfo(event){
  }
}

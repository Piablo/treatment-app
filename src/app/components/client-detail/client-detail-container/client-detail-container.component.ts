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
    console.log('client-container');
    this.sharedService.currentAddClientState.subscribe(res =>{
      this.showAutocomplete = res;
    })
  }
  showAutocomplete:boolean;
  patientDetails:PatientDetails;

  populateModel(model){
    this.patientDetails = model;
    this.sharedService.setApplicationState('clientComponent', false);
    //this.showAutocomplete = false;
  }
  showAutoComplete(event){
    this.sharedService.setApplicationState('clientComponent', true);
  }
  updateModel(event){
  }
  addMedicationInfo(event){
  }
}

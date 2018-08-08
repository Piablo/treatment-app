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
  }
  showAutocomplete:boolean = true;
  patientDetails:PatientDetails;

  populateModel(model){
    this.patientDetails = model;
    this.showAutocomplete = false;
  }
  showAutoComplete(event){
    this.showAutocomplete = true;
  }
  updateModel(event){
  }
  addMedicationInfo(event){
  }
}

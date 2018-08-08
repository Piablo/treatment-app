import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PatientDetails } from '../../../../assets/models/patient'
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-client-detail-new',
  templateUrl: './client-detail-new.component.html',
  styleUrls: ['./client-detail-new.component.css']
})
export class ClientDetailNewComponent implements OnInit {
  
  constructor(private sharedService: SharedService) { }
  

  @Input() patientDetails;
  @Output() updateModel = new EventEmitter<PatientDetails>();
  
  FirstName:string = "";
  FullName:string = "";
  IDNumber:string = "";
  MedicalAidName:string = "";
  MedicalAidNumber:string = "";
  PersonID:string = "";
  Surname:string = ""
  TreatmentProtocols:string = "";
  UnisolveProfileNumber:string = "";
  
  patientSelected:boolean = false;
  
  ngOnInit() {
    console.log('client-detail-new');
    console.log(this.patientDetails);
    this.initilizeData();
  }
  
  initilizeData(){
    this.FirstName = this.patientDetails.FirstName;
    this.FullName = this.patientDetails.FullName;
    this.IDNumber = this.patientDetails.IDNumber;
    this.MedicalAidName = this.patientDetails.MedicalAidName;
    this.MedicalAidNumber = this.patientDetails.MedicalAidNumber;
    this.PersonID = this.patientDetails.PersonID;
    this.Surname = this.patientDetails.Surname;
    this.TreatmentProtocols = this.patientDetails.TreatmentProtocols;
    this.UnisolveProfileNumber = this.patientDetails.UnisolveProfileNumber;
  }
  
  
  checkValidation(){
    if(this.FirstName !== null
      && this.Surname !== null
      && this.MedicalAidNumber !== null
      && this.UnisolveProfileNumber !== null
      && this.IDNumber !== null){
        this.patientSelected = true;
      }
    }
    enterNewPatientDetails(){
      this.patientDetails.FirstName = this.FirstName;
      this.patientDetails.FullName = this.FullName;
      this.patientDetails.IDNumber = this.IDNumber;
      this.patientDetails.MedicalAidName = this.MedicalAidName;
      this.patientDetails.MedicalAidNumber = this.MedicalAidNumber;
      this.patientDetails.PersonID = this.PersonID;
      this.patientDetails.Surname = this.Surname;
      this.patientDetails.TreatmentProtocols = this.TreatmentProtocols;
      this.patientDetails.UnisolveProfileNumber = this.UnisolveProfileNumber;

      this.sharedService.emitPatient(this.patientDetails);
      this.updateModel.emit(this.patientDetails);
    }
  }
  
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PatientDetails } from '../../../../assets/models/patient'

@Component({
  selector: 'app-client-detail-new',
  templateUrl: './client-detail-new.component.html',
  styleUrls: ['./client-detail-new.component.css']
})
export class ClientDetailNewComponent implements OnInit {
  
  constructor() { }
  
  @Input() patientModel: PatientDetails;
  @Output() updateModel = new EventEmitter<PatientDetails>();
  
  FirstName:string;
  FullName:string;
  IDNumber:string;
  MedicalAidName:string;
  MedicalAidNumber:string;
  PersonID:string;
  Surname:string;
  TreatmentProtocols:string;
  UnisolveProfileNumber:string;
  
  patientSelected:boolean = false;
  
  ngOnInit() {
    this.initilizeData();
  }
  
  initilizeData(){
    this.FirstName = this.patientModel.FirstName;
    this.FullName = this.patientModel.FullName;
    this.IDNumber = this.patientModel.IDNumber;
    this.MedicalAidName = this.patientModel.MedicalAidName;
    this.MedicalAidNumber = this.patientModel.MedicalAidNumber;
    this.PersonID = this.patientModel.PersonID;
    this.Surname = this.patientModel.Surname;
    this.TreatmentProtocols = this.patientModel.TreatmentProtocols;
    this.UnisolveProfileNumber = this.patientModel.UnisolveProfileNumber;
  }
  
  
  checkValidation(){
    if(this.FirstName !== null
      && this.Surname !== null
      && this.MedicalAidNumber !== null
      && this.UnisolveProfileNumber !== null
      && this.PersonID !== null){
        this.patientSelected = true;
      }
    }
    enterNewPatientDetails(){
      this.patientModel.FirstName = this.FirstName;
      this.patientModel.FullName = this.FullName;
      this.patientModel.IDNumber = this.IDNumber;
      this.patientModel.MedicalAidName = this.MedicalAidName;
      this.patientModel.MedicalAidNumber = this.MedicalAidNumber;
      this.patientModel.PersonID = this.PersonID;
      this.patientModel.Surname = this.Surname;
      this.patientModel.TreatmentProtocols = this.TreatmentProtocols;
      this.patientModel.UnisolveProfileNumber = this.UnisolveProfileNumber;

      this.updateModel.emit(this.patientModel);
    }

    
  }
  
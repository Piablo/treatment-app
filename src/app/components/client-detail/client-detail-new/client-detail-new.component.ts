import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { PatientDetails } from '../../../../assets/models/patient'
import { SharedService } from '../../../services/shared.service';
import { StringService } from '../../../services/string.service';

@Component({
  selector: 'app-client-detail-new',
  templateUrl: './client-detail-new.component.html',
  styleUrls: ['./client-detail-new.component.css']
})
export class ClientDetailNewComponent implements OnInit {
  
  constructor(
    private sharedService: SharedService,
    private stringService: StringService,
  ) { }
  
  
  @Input() patientDetails;
  @Output() updateModel = new EventEmitter<PatientDetails>();
  @Output() showAutoComplete = new EventEmitter<boolean>();
  @ViewChild('surname') surname: ElementRef;
  
  FirstName:string = "";
  FullName:string = "";
  IDNumber:number = null;
  MedicalAidName:string = "";
  MedicalAidNumber:number = null;
  PersonID:number = null;
  Surname:string = ""
  TreatmentProtocols:string = "";
  UnisolveProfileNumber:number = null;
  
  patientSelected:boolean = false;
  
  ngOnInit() {
    this.initilizeData();
  }
  
  ngAfterViewInit() {
    this.surname.nativeElement.focus();
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
    var showButton = true;
    var showAutoCompletePage = true;
    if(this.FirstName !== ""){
      showAutoCompletePage = false;
    }else{
      showButton = false;
    }
    if(this.Surname !== ""){
      showAutoCompletePage = false;
    }else{
      showButton = false;
    }
    if(this.MedicalAidNumber !== null){
      showAutoCompletePage = false;
    }else{
      showButton = false;
    }
    if(this.UnisolveProfileNumber !== null){
      showAutoCompletePage = false;
    }else{
      showButton = false;
    }
    if(this.IDNumber !== null){
      showAutoCompletePage = false;
    }else{
      showButton = false;
    }
    this.patientSelected = showButton;
    if(showAutoCompletePage){
      this.showAutoComplete.emit(true);
    }
  }
  enterNewPatientDetails(){
    this.FirstName = this.stringService.firstLetterToUpper(this.FirstName);
    this.Surname = this.stringService.firstLetterToUpper(this.Surname);
    
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

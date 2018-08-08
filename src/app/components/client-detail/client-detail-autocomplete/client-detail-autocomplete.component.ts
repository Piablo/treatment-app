import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { PatientDetails } from '../../../../assets/models/patient';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-client-detail-autocomplete',
  templateUrl: './client-detail-autocomplete.component.html',
  styleUrls: ['./client-detail-autocomplete.component.css']
})
export class ClientDetailAutocompleteComponent implements OnInit {
  
  constructor(private dataService:DataService, private sharedService: SharedService) { }
  
  ngOnInit() {
  }
  
  @Output() addMedicationInfo = new EventEmitter<PatientDetails>();
  @Output() populateModel = new EventEmitter<PatientDetails>();
  
  //Application State
  patientSelected:boolean = false;
  firstNameSelected:boolean = false;
  
  //Patient Details
  FirstName:string = "";
  IDNumber:string = "";
  MedicalAidName: string = "";
  MedicalAidNumber:string = "";
  PersonID: string = "";
  Surname:string = "";
  TreatmentProtocols:string = "";
  UnisolveProfileNumber:string = "";
  
  currentFocusedField:string = "";
  
  //Models
  patient: PatientDetails;
  filteredPatients: any[];
  
  //URLs
  url = '../assets/data/clients.json';
  
  acceptPatient(){
    this.addMedicationInfo.emit(this.patient);
  }
  currentlyFocused:string = "";
  currentEnteredText:string = "";
  
  onSelect(event){
    this.patient = event;
    console.log(this.patient);
    this.sharedService.emitPatient(this.patient);
    this.acceptPatient();
  }
  
  formatUserEnteredString(){
    var lower = this.FirstName.toLowerCase();
    this.FirstName = lower.charAt(0).toUpperCase() + lower.substr(1);
    
    var lower = this.Surname.toLowerCase();
    this.Surname = lower.charAt(0).toUpperCase() + lower.substr(1);
  }
  
  testing(idfromDom){
    console.log(idfromDom);
  }
  enterNewPatientDetails(){
    
    this.formatUserEnteredString();
    
    var value = {
      FirstName: this.FirstName,
      FullName: this.FirstName + " " + this.Surname,
      IDNumber: this.IDNumber,
      MedicalAidName: this.MedicalAidName,
      MedicalAidNumber: this.MedicalAidNumber,
      PersonID: this.PersonID,
      Surname: this.Surname,
      TreatmentProtocols: this.TreatmentProtocols,
      UnisolveProfileNumber: this.UnisolveProfileNumber,
    }
    this.patient = value;
    this.acceptPatient();
  }
  filteredCountriesSingle: any[];
  
  clearInputs(){
    this.patient.FullName = "";
    this.IDNumber = "";
    this.MedicalAidNumber = "";
    this.UnisolveProfileNumber = "";
  }
  filterCountrySingle(event, fieldName) {
    let query = event.query;
    this.dataService.getCountries(fieldName, query).then(countries => {
      this.filteredCountriesSingle = this.filterCountry(query, countries,fieldName);
    });
  }
  filterCountry(query, patients: any[], fieldName):any[]  {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered : any[] = [];
    var value;
    for(let i = 0; i < patients.length; i++) {
      let patient = patients[i];
      
      if(fieldName === 'firstName'){
        if(patient.FirstName.toLowerCase().indexOf(query.toLowerCase()) == 0) {
          value = this.populateData(patient);
          filtered.push(value);
        }
      }
      else if(fieldName === 'surname'){
        if(patient.Surname.toLowerCase().indexOf(query.toLowerCase()) == 0) {
          value = this.populateData(patient);
          filtered.push(value);
        }
      }
    }
    return filtered;
  }
  populateData(country){
    var value = {
      PersonID: country.PersonID,
      FirstName: country.FirstName,
      IDNumber: country.IDNumber,
      Surname: country.Surname,
      MedicalAidName: country.MedicalAidName,
      MedicalAidNumber: country.MedicalAidNumber,
      TreatmentProtocols: country.TreatmentProtocols,
      UnisolveProfileNumber: country.UnisolveProfileNumber,
      FullName: country.FirstName + " " + country.Surname
    }
    return value;
  }
  
  checkForPopulatedFields(){
    var value:boolean = false;
    console.log(this.FirstName);
    
    if(this.FirstName !== ""){
      value = true;
    }
    if(this.Surname !== ""){
      value = true;
    }
    if(this.MedicalAidNumber !== ""){
      value = true;
    }
    if(this.IDNumber !== ""){
      value = true;
    }
    return value;
  }
  
  onFocus(selectedField){
    if(this.checkForPopulatedFields()){
      var value = this.populateData(this);
        this.populateModel.emit(value);
    }
  }
}

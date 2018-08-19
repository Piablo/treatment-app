import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { PatientDetails } from '../../../../assets/models/patient';
import { SharedService } from '../../../services/shared.service';
import { StringService } from '../../../services/string.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-detail-autocomplete',
  templateUrl: './client-detail-autocomplete.component.html',
  styleUrls: ['./client-detail-autocomplete.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClientDetailAutocompleteComponent implements OnInit {
  
  constructor(
    private dataService:DataService, 
    private sharedService: SharedService,
    private stringService: StringService,
    private router: Router
  ) { }
  
  ngOnInit() {
  }

  ngAfterViewInit() {
  }
  
  @Output() addMedicationInfo = new EventEmitter<PatientDetails>();
  @Output() populateModel = new EventEmitter<PatientDetails>();
  
  //Application State
  patientSelected:boolean = false;
  firstNameSelected:boolean = false;

  //Input Fields
  FirstName:string = "";
  Surname:string = "";
  MedicalAidNumber:number = null;
  UnisolveProfileNumber:number = null;
  IDNumber:number = null;

  //Patient Details
  MedicalAidName: string = "";
  PersonID:number = null;
  TreatmentProtocols:string = "";
  currentFocusedField:string = "";
  currentlyFocused:string = "";
  currentEnteredText:string = "";
  
  //Models
  patient: PatientDetails;
  filteredPatients: any[];
  filteredCountriesSingle: any[];
  url = 'api/treatmentprotocolpersons/Search?searchOptions.';
  
  acceptPatient(){
    this.addMedicationInfo.emit(this.patient);
    this.router.navigate(['/add-product']);
  }
  
  onSelect(event){
    this.sharedService.emitTreeviewState(false);
    this.patient = event;

    this.sharedService.emitPatient(this.patient);
    this.sharedService.setCancelButtonState(true);
    this.acceptPatient();
  }
  
  formatUserEnteredString(){
    var lower = this.FirstName.toLowerCase();
    this.FirstName = lower.charAt(0).toUpperCase() + lower.substr(1);
    var lower = this.Surname.toLowerCase();
    this.Surname = lower.charAt(0).toUpperCase() + lower.substr(1);
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
  
  clearInputs(){
    this.patient.FullName = "";
    this.IDNumber = null;
    this.MedicalAidNumber = null;
    this.UnisolveProfileNumber = null;
  }

  filterCountrySingle(event, fieldName) {
    let query = event.query;
    this.dataService.get(this.url, fieldName, query).then(countries => {
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
      else if(fieldName === 'idnumber'){
        if(patient.IDNumber.toLowerCase().indexOf(query.toLowerCase()) == 0) {
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
      FullName: country.FirstName + " " + country.Surname + " " + country.IDNumber
    }
    return value;
  }

  checkForPopulatedFields(){
    var value:boolean = false;
    if(this.FirstName !== ""){
      value = true;
      this.FirstName = this.stringService.firstLetterToUpper(this.FirstName);
    }
    if(this.Surname !== ""){
      value = true;
      this.Surname = this.stringService.firstLetterToUpper(this.Surname);
    }
    if(this.MedicalAidNumber !== null){
      value = true;
    }
    if(this.UnisolveProfileNumber !== null){
      value = true;
    }
    if(this.IDNumber !== null){
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

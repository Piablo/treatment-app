import { Component} from '@angular/core';
import { DataService } from '../app/services/data.service';
import { SharedService } from '../app/services/shared.service';
import { Router } from '@angular/router';

interface TreatmentProtocol {
  protocolId:number;
  patientName:string;
}

interface Products {
  ProductID:number,
  Dosage:number,
  Frequency:number,
  Repeat:number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(
    private patientService: DataService, 
    private sharedService: SharedService,
    private router: Router
  ){
  }
  ngOnInit(){
    this.router.navigate(['add-patient']);
    //this.router.navigate(['add-patient']);
    this.sharedService.currentPatient.subscribe(res => {
      if(res !== null){
        this.patientModel = res;
        this.patientSearch = false;
      }
    });
    
    this.sharedService.currentTP.subscribe(res => {
    })
    this.sharedService.currentTreeviewState.subscribe(res => {
      //this.buttonState = res;
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
    this.sharedService.cancelButtonState.subscribe(res => {
      this.cancelButtonState = res;
    })
  }
  products: Products[] = [];
  cancelButtonState:boolean;
  showSubmitGroupButton: boolean;
  treatmentProtocols:TreatmentProtocol[] = [];
  patientModel:any;
  patientSearch:boolean = true;
  
  addMedicationInfo(event){
    this.patientModel = event;
    this.patientSearch = false;
  }
  editProtocol(event){
  }
  submitGroup(){
    this.patientSearch = true;
    var value = {
      PersonID: this.patientModel.PersonID,
      Products: this.products
    }
    this.sharedService.emitTreeviewState(true);
    this.sharedService.setApplicationState('clientComponent', true);
    this.sharedService.setApplicationState('patientSearch',false);
    this.router.navigate(['add-patient']);
    this.sharedService.setSubmitButtonState(false);
    this.sharedService.setCancelButtonState(false);
  }
  cancelProtocol(){
    this.sharedService.setCancelButtonState(true);
    this.sharedService.emitTreeviewState(true);
    this.sharedService.setApplicationState('clientComponent', true);
    this.sharedService.setApplicationState('patientSearch',false);
    this.router.navigate(['add-patient']);
    this.sharedService.setSubmitButtonState(false);
    this.sharedService.setCancelButtonState(false);
  }
}

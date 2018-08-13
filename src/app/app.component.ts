import { Component} from '@angular/core';
import { Product } from '../assets/models/product';
import { DataService } from '../app/services/data.service';
import { SharedService } from '../app/services/shared.service';
import { Router } from '@angular/router';

interface TreatmentProtocol {
  protocolId:number;
  patientName:string;
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
    console.log('app-component');
    this.sharedService.currentPatient.subscribe(res => {
      if(res !== null){
        this.patientModel = res;
        this.patientSearch = false;
      }
    });

    this.sharedService.currentTP.subscribe(res => {
    })
    this.sharedService.currentTreeviewState.subscribe(res => {
      this.buttonState = res;
    })
    this.sharedService.currentAddProductState.subscribe(res =>{
      this.patientSearch = res;
    })
  }

  buttonState:boolean = false;

  uniqueID:number = 11111;
  products: Product[] = [];

  treatmentProtocols:TreatmentProtocol[] = [];

  addItem(event){
    this.products.push(event);
  }
  patientModel:any;
  patientSearch:boolean = true;

  addMedicationInfo(event){
    this.patientModel = event;
    this.patientSearch = false;
  }

  editProtocol(event){
  }

  
  
  submitProtocol(){
    this.patientSearch = true;

    var value = {
      protocolId:this.uniqueID,
      patientName: this.patientModel.name
    }
    this.treatmentProtocols.push(value);
    this.products = [];
    this.uniqueID++;
    this.sharedService.emitTreeviewState(true);
    this.router.navigate(['add-patient']);
  }

  cancelProtocol(){
    this.buttonState = true;
    this.sharedService.emitTreeviewState(true);
    this.sharedService.setApplicationState('clientComponent', true);
    this.sharedService.setApplicationState('patientSearch',false);
    this.sharedService.emitTreeviewState(true);
    this.router.navigate(['add-patient']);
  }
}

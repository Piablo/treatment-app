import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../node_modules/rxjs';
import { PatientDetails } from '../../assets/models/patient';
import { Protocol } from '../../assets/models/protocol';
import { Product } from '../../assets/models/product';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private patientSource= new BehaviorSubject<PatientDetails>(null);
  currentPatient= this.patientSource.asObservable();
  emitPatient(patient: PatientDetails){
    this.patientSource.next(patient);
  }

  private tpSource = new BehaviorSubject<Protocol>(null);
  currentTP = this.tpSource.asObservable();
  emitTP(protocol: Protocol){
    this.tpSource.next(protocol);
  }

  private treeviewState = new BehaviorSubject<boolean>(true);
  currentTreeviewState = this. treeviewState.asObservable();
  emitTreeviewState(currentState:boolean){
    this.treeviewState.next(currentState);
  }

  private addClientState = new BehaviorSubject<boolean>(true);
  currentAddClientState = this.addClientState.asObservable();
  
  private addProductState = new BehaviorSubject<boolean>(true);
  currentAddProductState = this.addProductState.asObservable();

  private productSearch = new BehaviorSubject<boolean>(true);
  productState = this.productSearch.asObservable();

  setApplicationState(currentComponent: string, componentState){
    if(currentComponent === 'clientComponent'){
      this.addClientState.next(componentState);
    }
    else if(currentComponent === 'patientSearch'){
      this.addProductState.next(!componentState);
    }else if(currentComponent === 'showProductSearch'){
      this.productSearch.next(componentState);
    }
  }

  private productTree = new BehaviorSubject<Product>(null);
  productArray = this.productTree.asObservable();

  pushProductToTree(currentProduct:Product){
    this.productTree.next(currentProduct);
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../node_modules/rxjs';
import { PatientDetails } from '../../assets/models/patient';

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
  
}

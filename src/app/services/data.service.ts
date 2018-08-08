import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

interface TreatmentProtocolPerson{
  PersonID: number,
  FirstName: string,
  IDNumber: string,
  MedicalAidName: string,
  Surname: string,
  UnisolveProfileNumber: string,
  TreatmentProtocols: any[]
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http: Http) {}
  
  getCountries(field, query) {

    var url = 'https://tpapi01.azurewebsites.net/api/treatmentprotocolpersons/Search?searchOptions.' + field + '=' + query;
    let headers: Headers = new Headers();
    headers.append('Authorization', 'A93reRTUJHsCuQSHR+L3GxqOJyDmQpCgps102ciuabc=');

    return this.http.get(url, {headers: headers})
    .toPromise()
    .then(res => <any[]> res.json())
    .then(data => { return data; });
  }
}

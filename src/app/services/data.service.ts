import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { HttpClient  } from '@angular/common/http';

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
  
  constructor(private http: Http, private httpClient: HttpClient) {}
  
  treatmentProtocolPerson: TreatmentProtocolPerson;
  
  getPatients(url, query) {
    let headers: Headers = new Headers();
    headers.append('Authorization', 'A93reRTUJHsCuQSHR+L3GxqOJyDmQpCgps102ciuabc=');
    
    return this.http.get("https://tpapi01.azurewebsites.net/api/treatmentprotocolpersons/Search?searchOptions.firstName=" + query, {headers: headers})
    .toPromise()
    .then(res => <any[]> res.json())
    .then(data => { return data; });
  }
  
  getCountries(field, query) {

    var url = 'https://tpapi01.azurewebsites.net/api/treatmentprotocolpersons/Search?searchOptions.' + field + '=' + query;
    let headers: Headers = new Headers();
    headers.append('Authorization', 'A93reRTUJHsCuQSHR+L3GxqOJyDmQpCgps102ciuabc=');

    return this.http.get(url, {headers: headers})
    .toPromise()
    .then(res => <any[]> res.json())
    .then(data => { return data; });
  }
  
  getTestData(){
    this.http.get('../assets/data/treamentProtocols.json').subscribe(res => {
      var responce = res.json()[0];
      this.treatmentProtocolPerson = responce;
    });
  }
  
  getData(){
    
    var url = "https://tpapi01.azurewebsites.net/api/treatmentprotocolpersons/Search?searchOptions.firstName=eric";
  
    let headers: Headers = new Headers();
    headers.append('Authorization', 'A93reRTUJHsCuQSHR+L3GxqOJyDmQpCgps102ciuabc=');
    
    this.http.get(url, {headers: headers}).subscribe(res => {
      console.log(res.json());
    })
  }
}

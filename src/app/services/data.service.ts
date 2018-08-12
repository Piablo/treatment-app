import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { TreeNode } from '../../assets/models/treenode';

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

  getLazyFiles(fileName) {
    return this.httpClient.get<any>('../../assets/data/' + fileName)
      .toPromise()
      .then(res => <TreeNode[]>res.data);
    }
  
  get(url, field, query) {

    var base = 'https://tpapi01.azurewebsites.net/';
    var uri = base + url + field + '=' + query;

    let headers: Headers = new Headers();
    headers.append('Authorization', 'A93reRTUJHsCuQSHR+L3GxqOJyDmQpCgps102ciuabc=');

    return this.http.get(uri, {headers: headers})
    .toPromise()
    .then(res => <any[]> res.json())
    .then(data => { return data; })
  }
}

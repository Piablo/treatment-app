import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../services/shared.service';
import { TreeNode } from '../../../../assets/models/treenode';
import { LocalStorage } from '@ngx-pwa/local-storage';


@Component({
  selector: 'app-treeview-new-tp',
  templateUrl: './treeview-new-tp.component.html',
  styleUrls: ['./treeview-new-tp.component.css']
})
export class TreeviewNewTPComponent implements OnInit {
  
  constructor(private sharedService: SharedService, protected localStorage: LocalStorage) { }
  
  tpID:number = 55555;

  ngOnInit() {
    this.sharedService.currentPatient.subscribe(res => {
      if(res !==null){
        this.initilizeGroup(res);
      }
    })
    
    this.filesTree.push(this.initilizeData());
    this.sharedService.pushProductToTree(null);
    this.sharedService.productArray.subscribe(res => {
      if(res!==null){
        this.filesTree[0].children.push(this.pushToTree(res.Nappi,'testingData'));
      }
    })
  }
  initilizeGroup(patient){
    var value = this.searchExistingGroupByPatient(patient);
    if(value !== null){
    }else{
      this.createNewGroup();
    }
    
  }
  createNewGroup(){
  }
  searchExistingGroupByPatient(patient){
    var value = null;
    return value;
  }
  
  pushToTree(label:string, data:string){
    var value = {
      label:label,
      data:data,
      expandedIcon: "fa fa-folder-open",
      collapsedIcon: "fa fa-folder",
      leaf: true,
      expanded: true
    }
    var jsonValue = JSON.stringify(value);
    localStorage.setItem('treenodes',jsonValue);
    return value;
  }
  
  initilizeData(){
    var temp:any[] = [];
    var value = {
      label: "G-12345",
      data: "Node 0",
      expandedIcon: "fa fa-folder-open",
      collapsedIcon: "fa fa-folder",
      leaf: false,
      children: temp,
      expanded: true
    }
    return value;
  }
  
  filesTree: TreeNode[] = [];

  nodeSelect(event){
  }
}

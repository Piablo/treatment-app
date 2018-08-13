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
    console.log('treeview-new');
    //this.sharedService.emitPatient(null);
    this.sharedService.currentPatient.subscribe(res => {
      console.log(res);
      if(res !==null){
        this.initilizeGroup(res);
      }
    })
    
    this.filesTree.push(this.initilizeData());
    this.sharedService.pushProductToTree(null);
    this.sharedService.productArray.subscribe(res => {
      if(res!==null){
        console.log(res.Nappi);
        this.filesTree[0].children.push(this.pushToTree(res.Nappi,'testingData'));
      }
      console.log('from treeview');
      console.log(res);
      console.log(this.filesTree);
    })
  }
  initilizeGroup(patient){
    var value = this.searchExistingGroupByPatient(patient);
    if(value !== null){
      console.log('Existing group found');
    }else{
      console.log('No existing group, creating new group...');
      this.createNewGroup();
    }
    
  }
  createNewGroup(){
    console.log('group succesfully created!');
  }
  searchExistingGroupByPatient(patient){
    var value = null;
    console.log('Searching group by patient...')
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
  
  nodeExpand(event) {
    if(event.node) {
      console.log('this is the guy');
      console.log(event);
      //in a real application, make a call to a remote url to load children of the current node and add the new nodes as children
      //debugger;
      //event.node.children.push(this.initilizeData());
    }
  }

  nodeSelect(event){
    console.log(event);
  }
}

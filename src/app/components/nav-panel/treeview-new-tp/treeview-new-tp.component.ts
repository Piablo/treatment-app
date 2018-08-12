import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../services/shared.service';
import { TreeNode } from '../../../../assets/models/treenode';



@Component({
  selector: 'app-treeview-new-tp',
  templateUrl: './treeview-new-tp.component.html',
  styleUrls: ['./treeview-new-tp.component.css']
})
export class TreeviewNewTPComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.currentPatient.subscribe(res => {
      console.log(res);
      this.initilizeGroup(res);
    })
    
    this.filesTree.push(this.initilizeData());
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

  initilizeData(){
    var value = {
      label: "G-12345",
      data: "Node 0",
      expandedIcon: "fa fa-folder-open",
      collapsedIcon: "fa fa-folder",
      leaf: false
    }
    return value;
  }

  filesTree: TreeNode[] = [];

  nodeExpand(event) {
    if(event.node) {
      console.log(event);
        //in a real application, make a call to a remote url to load children of the current node and add the new nodes as children
        event.node.children.push(this.initilizeData());
    }
}

}

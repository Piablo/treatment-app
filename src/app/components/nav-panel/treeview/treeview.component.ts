import { Component, OnInit } from '@angular/core';
import { TreeNode } from '../../../../assets/models/treenode';
import { DataService } from '../../../services/data.service';
import { SharedService } from '../../../services/shared.service';

export interface TreeNode {
  label?: string;
  data?: any;
  icon?: any;
  expandedIcon?: any;
  collapsedIcon?: any;
  children?: TreeNode[];
  leaf?: boolean;
  expanded?: boolean;
  type?: string;
  parent?: TreeNode;
  partialSelected?: boolean;
  styleClass?: string;
  draggable?: boolean;
  droppable?: boolean;
  selectable?: boolean;
}

@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.css']
})
export class TreeviewComponent implements OnInit {
  
  constructor(
    private dataService: DataService,
    private sharedService: SharedService
  ) { }
  lazyFiles: TreeNode[] = [];
  
  
  
  
  
  
  ngOnInit() {
    
    var value ={
      collapsedIcon: "fa fa-folder",
      data:"root",
      expandedIcon:"fa fa-folder-open",
      label:"Groups",
      leaf:false,
      parent:undefined
    }
    
    this.lazyFiles.push(value);
  }
  
  testing(event){
  }
  
  nodeExpand(event) {
    if(event.node) {
      var value = [];
      value.push(JSON.parse(localStorage.getItem('treenodes')));
      //console.log(value);
      event.node.children = value;
      // var navString = event.node.data;
      
      // if(navString === 'root'){
      //   //in a real application, make a call to a remote url to load children of the current node and add the new nodes as children
      //   this.dataService.getLazyFiles('groups-list.json').then(nodes => event.node.children = nodes);
      // }else if(navString === 'group'){
      //   this.dataService.getLazyFiles('tp-list.json').then(nodes => event.node.children = nodes);
      // }else if(navString === 'treatmentProtocol'){
        
      // }
    }
  } 
}

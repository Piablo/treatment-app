import { Component, OnInit } from '@angular/core';
import { TreeNode } from '../../../../assets/models/treenode';
import { DataService } from '../../../services/data.service';
import { SharedService } from '../../../services/shared.service';


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

  ngOnInit() {
    console.log('treeview');
    this.dataService.getLazyFiles('files-lazy.json').then(files => this.lazyFiles = files);
    
  }

  lazyFiles: TreeNode[];

  testing(event){
  }

  nodeExpand(event) {
    if(event.node) {
      var navString = event.node.data;

      if(navString === 'root'){
        //in a real application, make a call to a remote url to load children of the current node and add the new nodes as children
        this.dataService.getLazyFiles('groups-list.json').then(nodes => event.node.children = nodes);
      }else if(navString === 'group'){
        this.dataService.getLazyFiles('tp-list.json').then(nodes => event.node.children = nodes);
      }else if(navString === 'treatmentProtocol'){
        
      }
    }
}

}

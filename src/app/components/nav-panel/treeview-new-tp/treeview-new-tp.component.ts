import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../services/shared.service';

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

}

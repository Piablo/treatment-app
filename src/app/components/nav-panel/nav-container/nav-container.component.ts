import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-nav-container',
  templateUrl: './nav-container.component.html',
  styleUrls: ['./nav-container.component.css']
})
export class NavContainerComponent implements OnInit {
  
  constructor(private sharedService: SharedService) { }
  
  ngOnInit() {
    console.log('nav-container');
    this.sharedService.currentTreeviewState.subscribe(res =>{
      console.log('running???');
      this.showHistoricView = res;
    })
  }
  
  showHistoricView:boolean = true;
  
}

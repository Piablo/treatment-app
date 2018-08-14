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
    this.sharedService.currentTreeviewState.subscribe(res =>{
      this.showHistoricView = res;
    })
  }
  
  showHistoricView:boolean = true;
  
}

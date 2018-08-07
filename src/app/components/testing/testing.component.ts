import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  
  constructor(private dataService: DataService) { }
  
  ngOnInit() {
  }
  country: any;
  filteredCountriesSingle: any[];
  
  
}

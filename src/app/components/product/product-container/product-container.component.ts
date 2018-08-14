import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PatientDetails } from '../../../../assets/models/patient';
import { Product } from '../../../../assets/models/product';
import { SharedService } from '../../../services/shared.service';


@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css']
})
export class ProductContainerComponent implements OnInit {
  
  constructor(
    private sharedService: SharedService
  ) { }
  
  ngOnInit() {
    
    //this.sharedService.emitPatient(null);
    this.sharedService.currentPatient.subscribe(res =>{
      this.patients.push(res);
    })
    this.sharedService.productState.subscribe(res =>{
      this.showProductSearch = res;
      this.enableButton = !res;
    })
    this.sharedService.showProductSearch.subscribe(res =>{
      this.showProductSearch = res;
    })
  }
  
  @Input() patientModel: PatientDetails;
  @Output() addItem = new EventEmitter<Product>();
  
  showProductSearch:boolean;
  disabled:boolean = true;
  productModel: Product;
  enableButton:boolean;
  patients:any[] = [];
  url = '../assets/data/products.json';
  filteredProducts: Product[];
  
  toggleView(model){
    this.productModel = model;
    this.showProductSearch = false;
  }
  
  emitProductModel(model){
    this.enableButton = true;
  }
  
  //Product Details
  product: Product;
  products: Product[] = [];
  nappi:string = "";
  productName = "";
  dosage:string = "";
  frequency:string = "";
  fullName:string = "";
  disableAddButton:boolean = true;
  
  //form state
  productSelected:boolean = false;
  
  saveTreatment(){
    this.sharedService.currentUserEnteredDetails.subscribe(res => {
      this.productModel.Dosage = res.Dosage;
      this.productModel.Frequency = res.Frequency;
      this.productModel.CycleLength = res.Repeat;
    })
    this.sharedService.pushProductToTree(this.productModel);
    this.sharedService.setApplicationState('clientComponent', true);
    this.sharedService.setApplicationState('patientSearch', true);
    this.sharedService.setShowProductSearch(true);
    this.sharedService.setSubmitButtonState(true);
  }
}

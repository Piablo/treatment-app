import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PatientDetails } from '../../../../assets/models/patient';
import { Http} from '@angular/http';
import { DataService } from '../../../services/data.service';
import { Product } from '../../../../assets/models/product';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css']
})
export class ProductContainerComponent implements OnInit {

  constructor(
    private http: Http, 
    private patientService: DataService
  ) { }

  ngOnInit() {
    this.patients.push(this.patientModel);
    console.log(this.patients);
  }

  @Input() patientModel: PatientDetails;
  @Output() addItem = new EventEmitter<Product>();

  showProductSearch:boolean = true;
  disabled:boolean = true;
  productModel: Product;
  enableButton:boolean = false;

  patients:any[] = [];
  url = '../assets/data/products.json';
  filteredProducts: Product[];

  toggleView(model){
    this.productModel = model;
    this.showProductSearch = false;
  }

  emitProductModel(model){
    console.log('from product container');
    console.log(model);
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
    console.log('this is a test');
  }
}

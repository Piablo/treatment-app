import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from '../../../assets/models/product';
import { SharedService } from '../../services/shared.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailComponent implements OnInit {
  
  constructor(
    private sharedService: SharedService,
    private dataService: DataService) { }
    
    ngOnInit() {
      this.sharedService.currentPatient.subscribe(res =>{
        this.patients.push(res);
      })
      this.sharedService.productState.subscribe(res =>{
        this.enableButton = !res;
      })
    }

    //Vars
    url = '../assets/data/products.json';

    //Fields
    nappi:string;
    description:string;
    active:string;
    dosage:number;
    frequency:number;
    repeat:number;

    //Models
    productModel: Product;
    patients:any[] = [];
    filteredProducts: Product[];
    
    //form state
    enableButton:boolean;
    showAutocompleteFields:boolean = true;
    
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
    
    filterProductSingle(event, inputField) {
      let query = event.query;
      this.url = 'api/treatmentprotocolproducts/Search?searchOptions.';
      this.dataService.get(this.url, inputField, query).then(products => {
        this.filteredProducts = this.filterProduct(query, products, inputField);
      });
    }
  
    onSelect(event){
      console.log(event);
      this.showAutocompleteFields = false;
      this.nappi = event.Nappi;
      this.description = event.Description;
      this.active = event.Active;
    }
    
    filterProduct(query, products: any[], inputField):any[] {
      //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
      
      var value;
      let filtered : any[] = [];
      for(let i = 0; i < products.length; i++) {
        let product = products[i];
        if(inputField === 'nappi'){
          if(product.Nappi.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            value = this.populateData(product);
            filtered.push(value);
          }
        }
        else if(inputField === 'productName'){
          if(product.Description.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(product);
            value = this.populateData(product);
            filtered.push(value);
          }
        }
        else if(inputField === 'active'){
          if(product.Active.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(product);
            value = this.populateData(product);
            filtered.push(value);
          }
        }
      }
      return filtered;
    }
  
    populateData(product){
      var value = {
        Active:product.Active,
        CycleLength: product.CycleLength,
        Description: product.Description,
        Dosage: product.Dosage,
        Frequency: product.Frequency,
        Nappi: product.Nappi,
        NumberOfCycles: product.NumberOfCycles,
        ProductID: product.ProductID,
        SEPExclVat: product.SEPExclVat,
        TreatmentProtocols: product.TreatmentProtocols,
        UnitSEPExclVat: product.UnitSEPExclVat,
        FullDescription: product.Nappi + " - " + product.Description
      }
      return value;
    }
    
  }
  
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Product } from '../../../../assets/models/product'

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {
  
  constructor(private dataService: DataService) { }
  
  ngOnInit() {
  }

  @Output() toggleView = new EventEmitter<Product>();

  dosage:string;
  frequency:string;
  repeat:string;

  
  
  products:any;
  product: any;
  filteredProducts: any[];
  url = 'api/treatmentprotocolproducts/Search?searchOptions.';
  
  filterProductSingle(event, inputField) {
    let query = event.query;

    this.dataService.get(this.url, inputField, query).then(products => {
      this.filteredProducts = this.filterProduct(query, products, inputField);
      console.log(this.filteredProducts);
      this.updateModel(products);
    });
  }

  updateModel(responceModel){
    console.log(responceModel);
  }

  onSelect(event){
    this.toggleView.emit(event);
    
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


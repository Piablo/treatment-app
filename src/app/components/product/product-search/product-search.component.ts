import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {
  
  constructor(private dataService: DataService) { }
  
  ngOnInit() {
  }
  
  products:any;
  product: any;
  filteredProducts: any[];
  url = 'api/treatmentprotocolproducts/Search?searchOptions.';
  
  filterProductSingle(event, inputField) {
    let query = event.query;

    this.dataService.get(this.url, inputField, query).then(products => {
      this.filteredProducts = this.filterProduct(query, products);
    });
  }
  
  filterProduct(query, products: any[]):any[] {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered : any[] = [];
    for(let i = 0; i < products.length; i++) {
      let product = products[i];
      if(product.Description.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(product);
      }
    }
    return filtered;
  }
  
}

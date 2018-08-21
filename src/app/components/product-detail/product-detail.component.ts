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
      
      //this.productModel = this.populateData(null);
    }
    
    //Vars
    url = '../assets/data/products.json';
    
    //Fields
    nappi:string;
    description:string;
    active:string;
    dosage:number = null;
    frequency:number = null;
    repeat:number = null;
    disableAutocomplete:boolean = false;
    
    //Models
    productModel: Product;
    patients:any[] = [];
    filteredProducts: Product[];
    products;
    productHolder;
    productArray: Product[] = [];
    
    //form state
    enableButton:boolean = false;
    showAutocompleteFields:boolean = true;
    
    //Validators
    productSelected:boolean = false;
    
    saveTreatment(){
      this.productHolder.Dosage = this.dosage;
      this.productHolder.Frequency = this.frequency;
      this.productHolder.Repeat = this.repeat;
      
      this.productArray.push(this.productHolder);
      this.sharedService.currentUserEnteredDetails.subscribe(res => {
        console.log(res);
      })
      
      this.resetFields();
      // this.sharedService.currentUserEnteredDetails.subscribe(res => {
      //   this.productModel.Dosage = res.Dosage;
      //   this.productModel.Frequency = res.Frequency;
      //   this.productModel.CycleLength = res.Repeat;
      // })
      console.log(this.productArray);
      var index = this.productArray.length - 1;
      this.sharedService.pushProductToTree(this.productArray[index]);
      // this.sharedService.setApplicationState('clientComponent', true);
      // this.sharedService.setApplicationState('patientSearch', true);
      // this.sharedService.setShowProductSearch(true);
      this.sharedService.setSubmitButtonState(true);
    }
    
    resetFields(){
      this.onTextchanged();
      this.dosage = null;
      this.frequency = null;
      this.repeat = null;
    }
    
    filterProductSingle(event, inputField) {
      let query = event.query;
      this.url = 'api/treatmentprotocolproducts/Search?searchOptions.';
      this.dataService.get(this.url, inputField, query).then(products => {
        this.filteredProducts = this.filterProduct(query, products, inputField);
      });
    }
    
    onSelect(event){
      this.showAutocompleteFields = false;
      this.productSelected = true;
      this.nappi = event.Nappi;
      this.description = event.Description;
      this.active = event.Active;
      this.productHolder = event;
      
      
      event.FullDescription = "";
      this.checkValidation(event, 'na');
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
    onTextchanged(){
      this.showAutocompleteFields = true;
      this.productSelected = false;
      this.enableButton = false;
    }
    checkValidation(event, fieldType){
      if(event.key === 'e'){
        if(fieldType === 'dosage'){
          this.dosage = 0;
          this.warningMessage();
        }
        else if(fieldType === 'frequency'){
          this.frequency = 0;
          this.warningMessage();
        }
        else if(fieldType === 'repeat'){
          this.repeat = 0;
          this.warningMessage();
        }
      }
      
      
      var value = false;
      if(this.productSelected){
        if(this.dosage !== null){
          if(this.frequency !== null){
            if(this.repeat !== null){
              value = true;
            }
          }
        }
      }
      this.enableButton = value;
    }

    msgs:any[];

    warningMessage(){
      this.msgs = [];
      this.msgs.push({severity:'warn', summary:'Warning', detail:'This field only accepts numbers.'});
    }
  }
  
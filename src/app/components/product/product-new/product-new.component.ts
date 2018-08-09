import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {

  @Input() productModel;

  constructor() { }

  fullDescription: string = "";

  dosage:number = null
  frequency:number = null;
  cycles:number = null;

  ngOnInit() {
    console.log('from product new component');
    console.log(this.productModel);
    this.fullDescription = this.productModel.FullDescription;
  }
  showButton:boolean = false;

  checkValidation(){
    var value = true;
    if(this.dosage === null){
      value = false;
    }
    if(this.frequency === null){
      value = false;
    }
    if(this.cycles === null){
      value = false;
    }
    this.showButton = value;
    console.log(value);
  }

  storeProductDetails(){
    console.log('this is a test');
  }
}

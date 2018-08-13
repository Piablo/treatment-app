import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Protocol } from '../../../../assets/models/protocol';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductNewComponent implements OnInit {

  @Input() productModel;
  @Output() emitProductModel = new EventEmitter<boolean>();

  constructor(private sharedService: SharedService) { }

  products:any[] = [];
  disabled:boolean = true;
  nappi:string = null;
  description:string = null;
  active:string = null;
  dosage:number = null
  frequency:number = null;
  cycles:number = null;

  ngOnInit() {
    console.log('product-new');
    this.products.push(this.productModel);
    this.nappi = this.products[0].Nappi;
    this.description = this.products[0].Description;
    this.active = this.products[0].Active;
  }

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
    if(value){
      this.emitProductModel.emit(value);
    }
  }

  storeProductDetails(){
    var value: Protocol = {
      Description: this.productModel.Description
    }

    this.sharedService.emitTP(value);
  }
}

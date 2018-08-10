import { Component, OnInit, Input } from '@angular/core';
import { Protocol } from '../../../../assets/models/protocol';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {

  @Input() productModel;

  constructor(private sharedService: SharedService) { }

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
    var value: Protocol = {
      Description: this.productModel.Description
    }

    this.sharedService.emitTP(value);
  }
}

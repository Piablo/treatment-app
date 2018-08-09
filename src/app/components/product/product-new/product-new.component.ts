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

  dosage:string;
  frequency:string;
  cycles:string;

  ngOnInit() {
    console.log('from product new component');
    console.log(this.productModel);
    this.fullDescription = this.productModel.FullDescription;
  }
  

}

import { Component, OnInit } from '@angular/core';
import { dataFormat } from './invoice-desc';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-invoice-desc',
  templateUrl: './invoice-desc.component.html',
  styleUrls: ['./invoice-desc.component.css']
})
export class InvoiceDescComponent implements OnInit {
  private fieldArray: Array<any> = [];
  private newAttribute: any = {};

  quant:number
  unitprice:number

  sn:number
  hsn:string
  desc:string

  constructor() {
    this.quant = 0;
    this.unitprice = 0; 
    this.sn = 0;
  }

  item:dataFormat[] = [];

  quantity(event)
  {
    this.quant = event.target.value;
  }

  price(event)
  {
    this.unitprice = event.target.value;
  }



  addFieldValue() {
    this.fieldArray.push(this.newAttribute)
    this.newAttribute = {};
  }

  deleteFieldValue(index) {
      this.fieldArray.splice(index, 1);
  }


  ngOnInit() {
  }
}

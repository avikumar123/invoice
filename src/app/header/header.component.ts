import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  invoice_number:number

  constructor() {
    this.invoice_number = 10;
   }

  ngOnInit() {
  }

}

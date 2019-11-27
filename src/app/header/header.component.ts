import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  collapse: boolean = false;

  constructor() { }

  ngOnInit() {
  
  }

  onCollapse(){
    $('.collapse').show("slow");
    this.collapse = true;
  }

  onUnCollapse(){
    $('.collapse').hide("slow");
    this.collapse = false;
  }

  onHide(){
    this.onUnCollapse();
  }

  

}
import { Component, OnInit} from '@angular/core';
import * as $ from "jquery";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CvAngular';
  collapse:boolean = false;
  constructor() { }

  ngOnInit() {
    // $(document).on('click',function(){
    //   $('.collapse').hide();
    // })
    
  }
  

}

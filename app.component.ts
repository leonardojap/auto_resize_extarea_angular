import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit() {
  }

  auto_grow(id) {
    let  textArea = document.getElementById(id);       
    textArea.style.overflow = 'hidden';
    textArea.style.height = '5px';
    textArea.style.height = textArea.scrollHeight + 'px';
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-init-demo',
  templateUrl: './on-init-demo.component.html',
  styleUrls: ['./on-init-demo.component.css']
})
export class OnInitDemoComponent implements OnInit {

  display: boolean;

  constructor() { 

    this.display = true;
  }



  toggle()
  {
    this.display = !this.display;
  }


  ngOnInit(): void {
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-on-init',
  templateUrl: './on-init.component.html',
  styleUrls: ['./on-init.component.css']
})
export class OnInitComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log('on Inint');
    
  }


  ngOnDestroy(): void {
    console.log('on Destroy');
    
  }

}

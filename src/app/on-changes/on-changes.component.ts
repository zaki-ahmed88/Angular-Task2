import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.css']
})
export class OnChangesComponent implements OnChanges {


  @Input('name') name: string;
  @Input('post') post: string;


  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    
    for(const probName in changes)
    {
      let change = changes[probName];
      let currentValue = JSON.stringify(change.currentValue);
      let previousValue = JSON.stringify(change.previousValue);
      console.log(`prob name = ${probName}, currentValue = ${currentValue}, previousValue = ${previousValue}`);
      
      

    }


  }

 

}

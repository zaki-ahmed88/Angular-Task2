import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-changes-demo',
  templateUrl: './on-changes-demo.component.html',
  styleUrls: ['./on-changes-demo.component.css']
})
export class OnChangesDemoComponent implements OnInit {

  display: boolean;
  name: string;
  post: string;

  constructor() { }

  ngOnInit(): void {
  }

  setValues(nameId, postId)
  {
    this.name = nameId.value;
    this.post = postId.value;
  }



  toggle()
  {
    this.display = !this.display;
  }

}

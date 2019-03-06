import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  linkOne:string = "accueil";
  linkTwo:string = "todo list";
  linkThree:string = "create todo";

  constructor() { }

  ngOnInit() {
    console.log('HeaderComponent -----------------------> ON INIT');
  }

  getFirstLink(){
    return this.linkOne;
  }

  getSecondLink(){
    return this.linkTwo;
  }

  getThirdLink(){
    return this.linkThree;
  }

  clickOnFirstLink(data){
    console.log('-----------> clickOnFirstLink', data);
  }

}

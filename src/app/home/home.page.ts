import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  title = "What3Words Angular Autosuggest Sample App";
  w3w_api_key = ""; // TODO: Add what3words API key

}

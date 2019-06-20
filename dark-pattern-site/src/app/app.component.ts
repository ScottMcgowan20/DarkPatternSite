import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dark-pattern-site';
  shirtAdded: boolean = false;
  backpackAdded: boolean = false;
  hatAdded: boolean = false;

  addShirt() {
    this.shirtAdded = true;
    alert('Added long sleeve shirt to cart');
  }

  addBackpack() {
    this.backpackAdded = true;
    alert('Added backpack to cart');
  }

  addHat() {
    this.hatAdded = true;
    alert('Added hat to cart');
  }
}

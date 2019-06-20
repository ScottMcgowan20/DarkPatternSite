import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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

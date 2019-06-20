import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css', '../home/home.component.css']
})
export class DonationComponent {

  clicked;

  clickYes() {
    this.clicked = 1;
  }

  clickNo() {
    this.clicked = 2;
  }
}

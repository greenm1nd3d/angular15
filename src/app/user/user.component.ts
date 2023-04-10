import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  countries = [
    {
      id: 1,
      country: 'Philippines',
      cities: [
        {
          id: 1,
          city: 'Manila'
        },
        {
          id: 2,
          city: 'Cebu'
        },
        {
          id: 31,
          city: 'Davao'
        }
      ]
    },
    {
      id: 2,
      country: 'Japan',
      cities: [
        {
          id: 4,
          city: 'Tokyo'
        },
        {
          id: 5,
          city: 'Hiroshima'
        },
        {
          id: 6,
          city: 'Kyoto'
        }
      ]
    },
    {
      id: 3,
      country: 'Spain',
      cities: [
        {
          id: 7,
          city: 'Madrid'
        },
        {
          id: 8,
          city: 'Barcolona'
        },
        {
          id: 9,
          city: 'Zaragoza'
        }
      ]
    }
  ];
  selectedCountry: number = 1;

  constructor() {

  }

  ngOnInit() {
  }

  selectCountry(event: Event) {
    const country = (event.target as HTMLInputElement).value;
    this.selectedCountry = Number(country);
  }
}

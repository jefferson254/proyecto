import { Component, OnInit } from '@angular/core';
import { CarService } from '../../../../demo/service/carservice';
import { Car } from '../../../../demo/domain/car';


@Component({
  selector: 'app-todas-ofertas',
  templateUrl: './todas-ofertas.component.html',
  styleUrls: ['./todas-ofertas.component.css']
})
export class TodasOfertasComponent implements OnInit {

  cars: Car[];

  selectedCar: Car;

  displayDialog: boolean;

  sortOptions: any[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getCarsLarge().then(cars => this.cars = cars);

    this.sortOptions = [
      {label: 'Newest First', value: '!year'},
      {label: 'Oldest First', value: 'year'},
      {label: 'Brand', value: 'brand'}
    ];
  }

  selectCar(event: Event, car: Car) {
    this.selectedCar = car;
    this.displayDialog = true;
    event.preventDefault();
  }

  onSortChange(event) {
    const value1 = event.value;

    if (value1.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value1.substring(1, value1.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value1;
    }
  }

  onDialogHide() {
    this.selectedCar = null;
  }

}

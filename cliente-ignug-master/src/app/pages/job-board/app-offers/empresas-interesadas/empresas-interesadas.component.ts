import { Component, OnInit } from '@angular/core';
import { CarService } from '../../../../demo/service/carservice';




@Component({
  selector: 'app-empresas-interesadas',
  templateUrl: './empresas-interesadas.component.html',
  styleUrls: ['./empresas-interesadas.component.css']
})
export class EmpresasInteresadasComponent implements OnInit {

  cars: any[] = [
    {
      id: 1,
      year: 2020
    },
    {
      id: 1,
      year: 2020
    },
    {
      id: 1,
      year: 2020
    },
    {
      id: 1,
      year: 2020
    },
    {
      id: 1,
      year: 2020
    },

  ];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCarsLarge().then(cars => this.cars = cars);
  }

}
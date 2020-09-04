import {Component, OnInit} from '@angular/core';

import {CarService} from '../../../../demo/service/carservice';
import {Car} from '../../../../demo/domain/car';


import {NgxSpinnerService} from 'ngx-spinner';
import {JobBoardServiceService} from '../../../../services/job-board/job-board-service.service';
import {MessageService} from 'primeng/api';
//importacion de modelo de usuarios.
import {User} from '../../../../models/authentication/models.index';

@Component({
    selector: 'app-ofertas-aplicadas',
    templateUrl: './ofertas-aplicadas.component.html',
    styleUrls: ['./ofertas-aplicadas.component.css']
})
export class OfertasAplicadasComponent implements OnInit {

    cars: Car[];

    selectedCar: Car;

    displayDialog: boolean;

    sortOptions: any[];

    sortKey: string;

    sortField: string;

    sortOrder: number;

    offers:any;

    user: User;

    constructor(private carService: CarService,
                private spinnerService: NgxSpinnerService,
                private jobBoardService: JobBoardServiceService,
                private messageService: MessageService,
                )
    {

        this.user = JSON.parse(localStorage.getItem('user')) as User;
    }

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

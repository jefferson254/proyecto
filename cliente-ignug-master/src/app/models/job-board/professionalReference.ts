import {Catalogue} from '../attendance/models.index';
import {Professional} from './professional';
import {State} from '../ignug/models.index';
////

export class ProfessionalReference {
    id: number;
    professional_id: Professional;
    institution: Catalogue;
    position:String;
    contact:String;
    phone:String;
    state: State;

    constructor() {
        this.institution = new Catalogue();
        this.contact = new String();
        this.phone = new String();

    }
}


  

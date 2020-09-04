import {Catalogue} from '../attendance/models.index';
import {Professional} from './professional';
import {State} from '../ignug/models.index';

////
export class AcademicFormation {
    id?: number;
    professional_id: Professional;
    institution: Catalogue;
    career: Catalogue;
    professional_degree: Catalogue;
    registration_date:Date;
    senescyt_code:String;
    has_titling:Boolean;
    state: State;

    constructor() {
        this.institution = new Catalogue();
        this.career = new Catalogue();
        this.professional_degree = new Catalogue();
    }
}


  

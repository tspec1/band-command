import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {INote} from '../../models/i-note';
import {NOTES} from '../../models/mock-notes';
import {IAccidental} from '../../models/i-accidental';
import {ACCIDENTALS} from '../../models/mock-accidentals';

/*
  Generated class for the NoteService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NoteService {

    constructor(private http: Http) { }

    GetNotes(): Promise<INote[]> {
        return new Promise<INote[]>(resolve => setTimeout(() => resolve(NOTES), 100));//delay for simulation
    }

    GetAccidentals(): Promise<IAccidental[]> {
        return new Promise<IAccidental[]>(resolve => setTimeout(() => resolve(ACCIDENTALS), 100));//delay for simulation
    }

}


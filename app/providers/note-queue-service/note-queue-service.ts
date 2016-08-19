import { Injectable, Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { INote } from '../../models/i-note';

/*
  Generated class for the NoteQueueService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NoteQueueService {
    private Queue: INote[] = new Array<INote>();
    private History: Array<INote[]> = new Array<INote[]>();

    constructor(private http: Http) { }

    Enqueue(note: INote): void {
        this.Queue.push(note);
    }

    Dequeue(amount: number): INote[] {
        let result = this.Queue.length > 0 ? this.Queue.splice(0, amount) : null;
        if (result !== null) {
            this.History.push(result);
        }
        return this.Queue.slice(0, amount);
    }

    GetQueue(amount: number): INote[] {
        return amount !== null ? this.Queue.slice(0, amount) : this.Queue;
    }

}


import { Injectable, Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { IntervalObservable } from 'rxjs/Observable/IntervalObservable';
import { Observable } from 'rxjs/Observable';
//import 'rxjs/Rx';

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
    private Interval: any = null;

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

    ObserveNotes(amount: number) {
        var observable: Observable<INote[]> = Observable.create((observer) => {
            this.Interval = setInterval(() => {
                console.log('next interval');
                console.log(this.Queue);
                observer.next(this.GetQueue(amount));
            }, 1000 * 5);//5 seconds

            return () => {
                console.log('clearing interval');
                clearInterval(this.Interval);
            };
        });
        return observable;
        //return IntervalObservable.create(5000).forEach(() => { console.log(this.Queue); return this.Queue[0] });
    }

}


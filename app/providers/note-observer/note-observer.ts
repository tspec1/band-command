import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { IntervalObservable } from 'rxjs/Observable/IntervalObservable';
import { Observable } from 'rxjs/Observable';
//import 'rxjs/Rx';

import { INote } from '../../models/i-note';
import { NoteQueueService } from '../note-queue-service/note-queue-service';

/*
  Generated class for the NoteObserver provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NoteObserver {
    private Interval: any = null;

    constructor(
        private http: Http,
        private noteQueueService: NoteQueueService
    ) { }

    ObserveNotes(amount: number) {
        let observable: Observable<INote[]> = Observable.create((observer) => {
            this.Interval = setInterval(() => {
                console.log('next interval');
                console.log(this.noteQueueService.GetQueue(amount));
                observer.next(this.noteQueueService.GetQueue(amount));
            }, 1000 * 5);//5 noteQueueService

            return () => {
                console.log('clearing interval');
                clearInterval(this.Interval);
            };
        });
        return observable;
        //return IntervalObservable.create(5000).forEach(() => { console.log(this.Queue); return this.Queue[0] });
    }

}


import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { OnInit } from '@angular/core';
import { NoteService } from '../../providers/note-service/note-service';
import { NoteQueueService } from '../../providers/note-queue-service/note-queue-service';
import { NoteObserver } from '../../providers/note-observer/note-observer';
import { INote } from '../../models/i-note';
import { IAccidental } from '../../models/i-accidental';
import { LoadingController } from 'ionic-angular';
import { Sharp } from '../../models/sharp';
import { Flat } from '../../models/flat';

/*
  Generated class for the SessionPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    templateUrl: 'build/pages/session/session.html',
    providers: [
        NavController,
        NoteService,
        NoteObserver,
        LoadingController
    ]
})
export class SessionPage {
    Note: INote = null;
    Notes: INote[] = [];
    NoteSubscription: any = null;//Subscription
    DisplayAmount: number = 1;

    constructor(
        private navCtrl: NavController,
        private noteService: NoteService,
        private noteQueueService: NoteQueueService,
        private noteObserver: NoteObserver,
        private loadingController: LoadingController
    ) {

    }

    ngOnInit() {
        this.GetData();
    }

    GetData(): void {
        //let loader = this.loadingController.create({
        //    content: "Please wait...",
        //    duration: 100
        //});
        //loader.present();

        let initData: INote[] = this.noteQueueService.GetQueue(this.DisplayAmount);
        this.UpdateNote(initData);
        this.StartSubscription();
    }

    UpdateNote(data: INote[]): void {
        this.Note = data !== null ? data[0] : null;
    }

    StartSubscription() {
        this.NoteSubscription = this.noteObserver.ObserveNotes(this.DisplayAmount).subscribe(res => {
            console.log('data returned:');
            console.log(res);
            this.UpdateNote(res);
        });
    }

    StopSubscription() {
        if (this.NoteSubscription === null) {
            return;
        }
        this.NoteSubscription.unsubscribe();
        this.NoteSubscription = null;
    }

    // for now, let anyone swipe away. TODO: will only be for leader
    SwipeEvent(event: any) {
        console.log(event);
        let data: INote[] = this.noteQueueService.Dequeue(this.DisplayAmount);
        //if (data === null || data.length === 0) {
        //    this.StopSubscription();
        //}
        this.UpdateNote(data);
    }

}

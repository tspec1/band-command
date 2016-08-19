import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { OnInit } from '@angular/core';
import { NoteService } from '../../providers/note-service/note-service';
import { NoteQueueService } from '../../providers/note-queue-service/note-queue-service';
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
    templateUrl: 'build/pages/add-notes/add-notes.html',
    providers: [
        NavController,
        NoteService,
        //NoteQueueService,
        LoadingController
    ]
})
export class AddNotesPage {
    Note: INote = null;
    Accidental: IAccidental = null;

    Notes: INote[] = [];
    Accidentals: IAccidental[] = [];

    constructor(
        private navCtrl: NavController,
        private noteService: NoteService,
        private noteQueueService: NoteQueueService,
        private loadingController: LoadingController
    ) {

    }

    ngOnInit() {
        this.GetData();
    }

    GetData(): void {
        let loader = this.loadingController.create({
            content: "Please wait...",
            duration: 400
        });
        loader.present();
        this.noteService.GetNotes().then(notes => this.Notes = notes);
        this.noteService.GetAccidentals().then(accidentals => this.Accidentals = accidentals);
    }

    UpdateNote(note: INote): void {
        if (note === this.Note) {
            this.Note = null;
            return;
        }
        this.Note = note;
        this.Note.Accidental = null;
        if (this.Note.HasAccidental(this.Accidental)) {
            this.Note.Accidental = this.Accidental;
        } else {
            this.Accidental = null;
        }
    }

    UpdateAccidental(accidental: IAccidental): void {
        if (accidental === this.Accidental) {
            this.Accidental = null;
            this.Note.Accidental = null;
            return;
        }
        if (this.Note) {
            //try to update accidental
            if (!this.Note.UpdateAccidental(accidental)) {
                return;
            }
        }
        this.Accidental = accidental;
    }

    SendNote(): void {
        if (this.Note === null) {
            return;
        }
        this.noteQueueService.Enqueue(this.Note);
        let amount: number = null;//get all
        console.log(this.noteQueueService.GetQueue(amount));
        //TODO: need to show success display, link to list or something
        this.Note = null;
        this.Accidental = null;
    }

    Clear(): void {
        this.Note = null;
        this.Accidental = null;
    }

}

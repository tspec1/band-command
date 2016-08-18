import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { OnInit } from '@angular/core';
import { NoteService } from '../../providers/note-service/note-service';
import { INote } from '../../models/i-note';
import { IAccidental } from '../../models/i-accidental';

/*
  Generated class for the SessionPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    templateUrl: 'build/pages/session/session.html',
    providers: [NoteService]
})
export class SessionPage {
    Notes: INote[] = [];
    Accidentals: IAccidental[] = [];

    constructor(private navCtrl: NavController, private noteService: NoteService) {

    }

    ngOnInit() {
        this.GetData();
    }

    GetData(): void {
        this.noteService.GetNotes().then(notes => this.Notes = notes);
        this.noteService.GetAccidentals().then(accidentals => this.Accidentals = accidentals);
    }

}

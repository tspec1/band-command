"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var note_service_1 = require('../../providers/note-service/note-service');
var note_queue_service_1 = require('../../providers/note-queue-service/note-queue-service');
var ionic_angular_2 = require('ionic-angular');
/*
  Generated class for the SessionPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var AddNotesPage = (function () {
    function AddNotesPage(navCtrl, noteService, noteQueueService, loadingController) {
        this.navCtrl = navCtrl;
        this.noteService = noteService;
        this.noteQueueService = noteQueueService;
        this.loadingController = loadingController;
        this.Note = null;
        this.Accidental = null;
        this.Notes = [];
        this.Accidentals = [];
    }
    AddNotesPage.prototype.ngOnInit = function () {
        this.GetData();
    };
    AddNotesPage.prototype.GetData = function () {
        var _this = this;
        var loader = this.loadingController.create({
            content: "Please wait...",
            duration: 400
        });
        loader.present();
        this.noteService.GetNotes().then(function (notes) { return _this.Notes = notes; });
        this.noteService.GetAccidentals().then(function (accidentals) { return _this.Accidentals = accidentals; });
    };
    AddNotesPage.prototype.UpdateNote = function (note) {
        console.log('updatenote');
        console.log(note);
        if (note === this.Note) {
            this.Note = null;
            return;
        }
        this.Note = note;
        this.Note.Accidental = null;
        if (this.Note.HasAccidental(this.Accidental)) {
            this.Note.Accidental = this.Accidental;
        }
        else {
            this.Accidental = null;
        }
        console.log(this.Note);
    };
    AddNotesPage.prototype.UpdateAccidental = function (accidental) {
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
    };
    AddNotesPage.prototype.SendNote = function () {
        if (this.Note === null) {
            return;
        }
        this.noteQueueService.Enqueue(this.Note);
        var amount = null; //get all
        console.log(this.noteQueueService.GetQueue(amount));
        //TODO: need to show success display, link to list or something
        this.Note = null;
        this.Accidental = null;
    };
    AddNotesPage.prototype.Clear = function () {
        this.Note = null;
        this.Accidental = null;
    };
    AddNotesPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/add-notes/add-notes.html',
            providers: [
                ionic_angular_1.NavController,
                note_service_1.NoteService,
                //NoteQueueService,
                ionic_angular_2.LoadingController
            ]
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, note_service_1.NoteService, note_queue_service_1.NoteQueueService, ionic_angular_2.LoadingController])
    ], AddNotesPage);
    return AddNotesPage;
}());
exports.AddNotesPage = AddNotesPage;

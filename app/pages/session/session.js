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
var note_observer_1 = require('../../providers/note-observer/note-observer');
var ionic_angular_2 = require('ionic-angular');
/*
  Generated class for the SessionPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var SessionPage = (function () {
    function SessionPage(navCtrl, noteService, noteQueueService, noteObserver, loadingController) {
        this.navCtrl = navCtrl;
        this.noteService = noteService;
        this.noteQueueService = noteQueueService;
        this.noteObserver = noteObserver;
        this.loadingController = loadingController;
        this.Note = null;
        this.Notes = [];
        this.NoteSubscription = null; //Subscription
        this.DisplayAmount = 1;
    }
    SessionPage.prototype.ngOnInit = function () {
        this.GetData();
    };
    SessionPage.prototype.GetData = function () {
        //let loader = this.loadingController.create({
        //    content: "Please wait...",
        //    duration: 100
        //});
        //loader.present();
        var initData = this.noteQueueService.GetQueue(this.DisplayAmount);
        this.UpdateNote(initData);
        this.StartSubscription();
    };
    SessionPage.prototype.UpdateNote = function (data) {
        this.Note = data !== null ? data[0] : null;
    };
    SessionPage.prototype.StartSubscription = function () {
        var _this = this;
        this.NoteSubscription = this.noteObserver.ObserveNotes(this.DisplayAmount).subscribe(function (res) {
            console.log('data returned:');
            console.log(res);
            _this.UpdateNote(res);
        });
    };
    SessionPage.prototype.StopSubscription = function () {
        if (this.NoteSubscription === null) {
            return;
        }
        this.NoteSubscription.unsubscribe();
        this.NoteSubscription = null;
    };
    // for now, let anyone swipe away. TODO: will only be for leader
    SessionPage.prototype.SwipeEvent = function (event) {
        console.log(event);
        var data = this.noteQueueService.Dequeue(this.DisplayAmount);
        //if (data === null || data.length === 0) {
        //    this.StopSubscription();
        //}
        this.UpdateNote(data);
    };
    SessionPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/session/session.html',
            providers: [
                ionic_angular_1.NavController,
                note_service_1.NoteService,
                note_observer_1.NoteObserver,
                ionic_angular_2.LoadingController
            ]
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, note_service_1.NoteService, note_queue_service_1.NoteQueueService, note_observer_1.NoteObserver, ionic_angular_2.LoadingController])
    ], SessionPage);
    return SessionPage;
}());
exports.SessionPage = SessionPage;

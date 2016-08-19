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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var Observable_1 = require('rxjs/Observable');
var note_queue_service_1 = require('../note-queue-service/note-queue-service');
/*
  Generated class for the NoteObserver provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var NoteObserver = (function () {
    function NoteObserver(http, noteQueueService) {
        this.http = http;
        this.noteQueueService = noteQueueService;
        this.Interval = null;
    }
    NoteObserver.prototype.ObserveNotes = function (amount) {
        var _this = this;
        var observable = Observable_1.Observable.create(function (observer) {
            _this.Interval = setInterval(function () {
                console.log('next interval');
                console.log(_this.noteQueueService.GetQueue(amount));
                observer.next(_this.noteQueueService.GetQueue(amount));
            }, 1000 * 5); //5 noteQueueService
            return function () {
                console.log('clearing interval');
                clearInterval(_this.Interval);
            };
        });
        return observable;
        //return IntervalObservable.create(5000).forEach(() => { console.log(this.Queue); return this.Queue[0] });
    };
    NoteObserver = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, note_queue_service_1.NoteQueueService])
    ], NoteObserver);
    return NoteObserver;
}());
exports.NoteObserver = NoteObserver;

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
/*
  Generated class for the NoteQueueService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var NoteQueueService = (function () {
    function NoteQueueService(http) {
        this.http = http;
        this.Queue = new Array();
        this.History = new Array();
    }
    NoteQueueService.prototype.Enqueue = function (note) {
        this.Queue.push(note);
    };
    NoteQueueService.prototype.Dequeue = function (amount) {
        var result = this.Queue.length > 0 ? this.Queue.splice(0, amount) : null;
        if (result !== null) {
            this.History.push(result);
        }
        return this.Queue.slice(0, amount);
    };
    NoteQueueService.prototype.GetQueue = function (amount) {
        return amount !== null ? this.Queue.slice(0, amount) : this.Queue;
    };
    NoteQueueService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], NoteQueueService);
    return NoteQueueService;
}());
exports.NoteQueueService = NoteQueueService;

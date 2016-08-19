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
var mock_notes_1 = require('../../models/mock-notes');
var mock_accidentals_1 = require('../../models/mock-accidentals');
/*
  Generated class for the NoteService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var NoteService = (function () {
    function NoteService(http) {
        this.http = http;
    }
    NoteService.prototype.GetNotes = function () {
        return new Promise(function (resolve) { return setTimeout(function () { return resolve(mock_notes_1.NOTES); }, 100); }); //delay for simulation
    };
    NoteService.prototype.GetAccidentals = function () {
        return new Promise(function (resolve) { return setTimeout(function () { return resolve(mock_accidentals_1.ACCIDENTALS); }, 100); }); //delay for simulation
    };
    NoteService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], NoteService);
    return NoteService;
}());
exports.NoteService = NoteService;

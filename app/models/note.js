"use strict";
var sharp_1 = require('./sharp');
var flat_1 = require('./flat');
var Note = (function () {
    function Note(letter, accidental, hasSharp, hasFlat) {
        this.Letter = letter;
        this.Accidental = accidental;
        this.HasSharp = hasSharp;
        this.HasFlat = hasFlat;
    }
    Note.prototype.UpdateAccidental = function (accidental) {
        if (!this.HasAccidental(accidental)) {
            return false;
        }
        this.Accidental = accidental;
        return true;
    };
    Note.prototype.HasAccidental = function (accidental) {
        if (accidental === null) {
            return false;
        }
        switch (accidental.Name) {
            case sharp_1.Sharp._Name:
                return this.HasSharp;
            case flat_1.Flat._Name:
                return this.HasFlat;
            default:
                return false;
        }
    };
    Note.prototype.GetDisplay = function () {
        var result = this.Letter;
        if (this.Accidental) {
            result += this.Accidental.Display;
        }
        return result;
    };
    return Note;
}());
exports.Note = Note;

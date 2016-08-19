import {IAccidental} from './i-accidental';
import {INote} from './i-note';
import {Sharp} from './sharp';
import {Flat} from './flat';

export class Note implements INote {
    Letter: string;
    Accidental: IAccidental;
    HasSharp: boolean;
    HasFlat: boolean;

    constructor(letter: string, accidental: IAccidental, hasSharp: boolean, hasFlat: boolean) {
        this.Letter = letter;
        this.Accidental = accidental;
        this.HasSharp = hasSharp;
        this.HasFlat = hasFlat;
    }

    UpdateAccidental(accidental: IAccidental): boolean {
        if (!this.HasAccidental(accidental)) {
            return false;
        }
        this.Accidental = accidental;
        return true;
    }

    HasAccidental(accidental: IAccidental): boolean {
        if (accidental === null) {
            return false;
        }
        switch (accidental.Name) {
            case Sharp._Name:
                return this.HasSharp;
            case Flat._Name:
                return this.HasFlat;
            default:
                return false;
        }
    }

    GetDisplay(): string {
        let result: string = this.Letter;

        if (this.Accidental) {
            result += this.Accidental.Display;
        }

        return result;
    }
}
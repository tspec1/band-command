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

    UpdateAccidental(option: string): void {
        switch (option) {
            case Sharp._Name:
                this.Accidental = new Sharp();
                break;
            case Flat._Name:
                this.Accidental = new Flat();
                break;
            default:
                this.Accidental = null;
                break;
        }
    }
}
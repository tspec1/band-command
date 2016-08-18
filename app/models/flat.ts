import { IAccidental } from './i-accidental';

export class Flat implements IAccidental {
    static _Name: string = 'Flat';

    Name: string = Flat._Name;
    Display: string = 'b';
}
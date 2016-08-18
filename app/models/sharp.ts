import { IAccidental } from './i-accidental';

export class Sharp implements IAccidental {
    static _Name: string = 'Sharp';

    Name: string = Sharp._Name;
    Display: string = '#';
}
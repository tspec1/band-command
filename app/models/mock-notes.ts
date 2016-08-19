import {INote} from './i-note';
import {Note} from './note';

export const NOTES: INote[] = [
    new Note('A', null, true, true),
    new Note('B', null, false, true),
    new Note('C', null, true, false),
    new Note('D', null, true, true),
    new Note('E', null, false, true),
    new Note('F', null, true, false),
    new Note('G', null, true, true)
];
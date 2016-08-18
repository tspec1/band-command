import {INote} from './i-note';
import {Note} from './note';

export const NOTES: INote[] = [
    new Note('A', null, true, true),
    new Note('B', null, true, true),
    new Note('C', null, true, false),
    new Note('D', null, false, true),
    new Note('E', null, true, false),
    new Note('F', null, false, true),
    new Note('G', null, true, true)
];
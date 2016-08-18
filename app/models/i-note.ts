import { IAccidental } from './i-accidental';

export interface INote {
    Letter: string;
    Accidental: IAccidental;
    HasSharp: boolean;
    HasFlat: boolean;

    UpdateAccidental(option: string): void;
}
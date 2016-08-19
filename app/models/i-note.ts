import { IAccidental } from './i-accidental';

export interface INote {
    Letter: string;
    Accidental: IAccidental;
    HasSharp: boolean;
    HasFlat: boolean;

    UpdateAccidental(accidental: IAccidental): void;
    HasAccidental(accidental: IAccidental): boolean;
    GetDisplay(): string;
}
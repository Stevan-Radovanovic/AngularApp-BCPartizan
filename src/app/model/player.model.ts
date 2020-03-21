export class Player {
    id: number;
    fullName: string;
    squadNumber: number;
    pictureUrl: string;
    biography: string;

    constructor( id:number, fullName: string, squadNumber: number, pictureUrl: string, biography: string) {
        this.fullName = fullName;
        this.squadNumber = squadNumber;
        this.pictureUrl = pictureUrl;
        this.biography = biography;
        this.id = id;
    }
}
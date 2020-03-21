export class Coach {
    id: number;
    fullName: string;
    position: string;
    pictureUrl: string;
    biography: string;

    constructor( id: number, fullName: string, position: string, pictureUrl: string, biography: string) {
        this.id = id;
        this.fullName = fullName;
        this.position = position;
        this.pictureUrl = pictureUrl;
        this.biography = biography;
    }
}
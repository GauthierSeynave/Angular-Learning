export class Multimedia {

    constructor(private _listMultimedia: string[]){

    }

    public get listMultimedia(): any[] {
        return this._listMultimedia;
    }
    public set listMultimedia(value: any[]) {
        this._listMultimedia = value;
    }
}

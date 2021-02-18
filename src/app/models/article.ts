export class Article {
    
    constructor(private _titre: string, private _date: Date, private _source: string, private _contenu: string) {

    }
    
    public get contenu(): string {
        return this._contenu;
    }
    public set contenu(value: string) {
        this._contenu = value;
    }
    public get date(): Date {
        return this._date;
    }
    public set date(value: Date) {
        this._date = value;
    }
    public get source(): string {
        return this._source;
    }
    public set source(value: string) {
        this._source = value;
    }
    public get titre(): string {
        return this._titre;
    }
    public set titre(value: string) {
        this._titre = value;
    }
}

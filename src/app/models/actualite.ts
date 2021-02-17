import { Article } from "./article";
import { Multimedia } from "./multimedia";

type NewType = string;

/**
 * Model Actualité : description d'une actualité.
 */
export class Actualite {

    constructor(private _article: Article, private _multimedia: Multimedia) {

    }
    
    public get article(): Article {
        return this._article;
    }
    public set article(value: Article) {
        this._article = value;
    }
    public get multimedia(): Multimedia {
        return this._multimedia;
    }
    public set multimedia(value: Multimedia) {
        this._multimedia = value;
    }
   
}

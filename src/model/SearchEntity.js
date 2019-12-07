export default class SearchEntity {

    text;
    done;
    starred;

    constructor(text, done, starred) {
        this.text = text;
        this.done = done;
        this.starred = starred;
    }

}

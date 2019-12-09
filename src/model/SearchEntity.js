export default class SearchEntity {

    text;
    done;
    starred;

    constructor(text, done, starred) {
        this.text = text;
        this.done = done;
        this.starred = starred;
    }

    getThreeStateNextValue(value) {
        if (value === null) {
            return false;
        }

        if (value === false) {
            return true;
        }

        return null;
    }

    setNextValueForDone() {
        this.done = this.getThreeStateNextValue(this.done);
    }

    setNextValueForStarred() {
        this.starred = this.getThreeStateNextValue(this.starred);
    }

    reset() {
        this.text = '';
        this.done = null;
        this.starred = null;
    }
}

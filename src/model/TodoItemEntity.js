export default class TodoItemEntity {

    id;
    name;
    description;
    done;
    starred;

    constructor(name, description, done, starred) {
        this.name = name;
        this.description = description;
        this.done = done;
        this.starred = starred;
    }

}

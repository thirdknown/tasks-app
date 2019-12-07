export default class TodoItemEntity {

    id;
    name;
    description;
    done;

    constructor(name, description, done) {
        this.name = name;
        this.description = description;
        this.done = done;
    }

}

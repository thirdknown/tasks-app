import UniqueIdGenerator from "./UniqueIdGenerator";

export default class TodoItemEntity {

    id;
    name;

    constructor(name) {
        this.id = UniqueIdGenerator.getUniqueId();
        this.name = name;
    }

}

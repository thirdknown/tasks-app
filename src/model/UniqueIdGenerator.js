// Source: https://gist.github.com/gordonbrander/2230317

class UniqueIdGenerator {
    getUniqueId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }
}

export default new UniqueIdGenerator();

export class Project{
    constructor(id, name, note) {
        this._id = id;
        this._name = name;
        this._note = note;
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get note() {
        return this._note;
    }

    set note(value) {
        this._note = value;
    }
}
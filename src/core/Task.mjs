export class Task{
    constructor(id, name, note, pomodores, projectID) {

        this._id = id;
        this._name = name;
        this._note = note;
        this._pomodores = pomodores;
        this._projectID = projectID;
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

    get pomodores() {
        return this._pomodores;
    }

    set pomodores(value) {
        this._pomodores = value;
    }

    get projectID() {
        return this._projectID;
    }

    set projectID(value) {
        this._projectID = value;
    }
}


class Task {
    title: string;
    done: boolean;

    constructor(title: string) {
        this.title = title;
        this.done = false;
    }

    markDone() {
        this.done = true;
    }

    markUndone() {
        this.done = false;
    }
}

export default Task;

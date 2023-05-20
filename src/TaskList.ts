import Task from "./Task";

class TaskList {
  tasks: Task[];

  constructor() {
    this.tasks = [];
  }

  addTask(title: string) {
    const task = new Task(title);
    this.tasks.push(task);
  }

  removeTask(title: string) {
    this.tasks = this.tasks.filter((task) => task.title !== title);
  }

  markTaskDone(title: string) {
    const task = this.tasks.find((task) => task.title === title);
    if (task) {
      task.markDone();
    }
  }

  markTaskUndone(title: string) {
    const task = this.tasks.find((task) => task.title === title);
    if (task) {
      task.markUndone();
    }
  }
}

export default TaskList;

function newTask(title, desc) {
  const task = {
    title: title,
    description: desc,
    complete: false,
    logState: function () {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    completeTask: function () {
      task.complete = true;
    }
  };

  return task;
}


const task1 = newTask("Clean Cat Litter", "Take out all the crap in the litter box");
const task2 = newTask("Do Laundy", "Left it for too long");
const tasks = [task1, task2];
console.log(tasks);

task1.logState(task1);
task1.completeTask(task1);
task1.logState(task1);

import Task from "../models/task.model.js";


export class TaskService {
  async fetchTasks() {
    const tasksFound = await Task.findAll();
    return tasksFound;
  }

  async addTask({ task }) {
    const createdTask = await Task.create(task);
    return createdTask;
  }

  async fetchTask({ idTask }) {
    const taskFound = await Task.findByPk(idTask);
    return taskFound;
  }

  async updateTask({ idTask, task }) {
    const taskFound = await Task.findByPk(idTask);
    const taskSaved = taskFound.set(task).save(task);
    return taskSaved;
  }
}
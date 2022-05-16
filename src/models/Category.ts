import BaseModel from "./BaseModel";
import Task from "./Task";
import User from "./UserModel";

export default class Category extends BaseModel {
  name: string;
  tasks: Task[];
  constructor(name: string, color: string) {
    super();
    this.name = name;
    this.tasks = [];
  }
}

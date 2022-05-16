import BaseModel from "./BaseModel";
import TypeIssue from "./TypeIssue";
import User from "./UserModel";

export default class Task extends BaseModel {
  uid?: string;
  name: string;
  description?: string;
  completed: boolean;
  assigner?: User;
  typeIssue?: TypeIssue 
  constructor(name: string, uid: string, description: string) {
    super();
    this.name = name;
    this.completed = false;
    this.uid = uid;
    this.description = description;
  }
}

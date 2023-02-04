import { Injectable } from "@nestjs/common";
import { TasksRepository } from "./tasks.repository";

@Injectable()
export class TasksService {
    constructor( public tasksRepo: TasksRepository){}

    findOne(id: string){       
        return this.tasksRepo.findOne(id);
    }

    findAll(){
        return this.tasksRepo.findAll();
    }

    create( task: string ){
        return this.tasksRepo.create(task);
    }
}
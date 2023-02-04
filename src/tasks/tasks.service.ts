import { TasksRepository } from "./tasks.repository";

export class TasksService {

    tasksRepo: TasksRepository;

    constructor(){
        // Dont Do thisn on Real apps use Dependency Injection
        this.tasksRepo = new TasksRepository();
    }


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
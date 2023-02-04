import { Body, Controller, Get, Param, Post,NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(public tasksService: TasksService){}

    @Get()
    listTasks() { 
        return this.tasksService.findAll();    
    }

    @Post()
    createTask(@Body() body: CreateTaskDto) {

        return this.tasksService.create(body.task);
     }

    @Get('/:id')
    async getTask(@Param('id') id: string) {        
        const task = await this.tasksService.findOne(id);

        if(!task) throw new NotFoundException('Error: Task was not found');

        return task;
     }
}

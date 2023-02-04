import { readFile, writeFile } from 'fs/promises';

export class TasksRepository {
   async findOne(id: string) {
        const tasks = await this.getTasksFromDB();
            
        return tasks[id];
    }

    findAll() {
        const tasks = this.getTasksFromDB();
        return tasks;
    }

    async create(task: string) {
        const tasks = await this.getTasksFromDB();
        let taskIDs = Object.keys(tasks);
        
        const id = tasks[taskIDs[taskIDs.length - 1]].id + 1;

        tasks[id] = { id, task };

        await writeFile('tasks.json', JSON.stringify(tasks));
    }

    private async getTasksFromDB() {
        const fromDb = await readFile('tasks.json', 'utf8');
        return JSON.parse(fromDb);
    }
}
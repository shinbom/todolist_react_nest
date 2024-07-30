import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoEntity } from './todolist.entity';
import { Repository } from 'typeorm';
import { TodoDto } from './dtos/todo.dto';

@Injectable()
export class TodolistService {
  constructor(
    @InjectRepository(TodoEntity)
    private repo: Repository<TodoEntity>,
  ) {}
  async findAll(): Promise<TodoEntity[]> {
    const result = await this.repo.find();
    if (!result || result.length === 0) {
      throw new HttpException('Forbidden', HttpStatus.NO_CONTENT);
    }
    return result
  }

  async find(id: number): Promise<TodoEntity> {
    //
    const result = await this.repo.findOne({
      where: {
        no: id,
      },
    });
    return result;
  }

  async createTodo(data: TodoDto): Promise<TodoEntity> {
    const { title, description, isChecked } = data;
    const todo = await this.repo.create({ title, description, isChecked });
    return this.repo.save(todo);
  }

  async updateTodo(id: number, body: TodoDto): Promise<boolean> {
    // const result = await this.repo.update({ no: id }, body);
    return false;
  }

  async deleteTodo(id: number): Promise<boolean> {
    const result = await this.repo.delete({ no: id });
    return !!result.affected;
  }
}

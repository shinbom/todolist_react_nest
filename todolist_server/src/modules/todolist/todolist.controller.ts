import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodolistService } from './todolist.service';
import { TodoDto } from './dtos/todo.dto';

@Controller('todolist')
export class TodolistController {
  constructor(private todolistService: TodolistService) {}

  @Get()
  findAll() {
    return this.todolistService.findAll();
  }

  @Post()
  create(@Body() body: TodoDto) {
    return this.todolistService.createTodo(body);
  }

  @Get(':id')
  find(@Param('id') id: string) {
    return this.todolistService.find(parseInt(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: TodoDto) {
    return this.todolistService.updateTodo(parseInt(id), body);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.todolistService.deleteTodo(parseInt(id));
  }
}

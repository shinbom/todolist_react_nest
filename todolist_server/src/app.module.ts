import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodolistModule } from './modules/todolist/todolist.module';
import { TodoEntity } from './modules/todolist/todolist.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'study',
      database: 'todolist',
      synchronize: true,
      entities: [TodoEntity],
    }),
    TodolistModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './modules/tasks/tasks.module';
import { typeOrmConfiguration } from './databases/config/typeormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfiguration), TasksModule],
})
export class AppModule {}

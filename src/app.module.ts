import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './modules/tasks/tasks.module';
import { typeOrmConfiguration } from './databases/config/typeormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfiguration),
    TasksModule,
    UserModule,
    AuthModule,
  ],
  providers: [],
})
export class AppModule {}

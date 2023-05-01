import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './modules/tasks/tasks.module';
import { typeOrmConfiguration } from './databases/config/typeormconfig';
import { UserModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';

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

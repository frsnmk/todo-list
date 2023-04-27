import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';

export const typeOrmConfiguration: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '',
  database: 'todolist',
  entities: [path.resolve(__dirname, '../model/*.entity{.ts,.js}')],
  synchronize: true,
};

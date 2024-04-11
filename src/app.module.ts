import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DBOptions } from '../db.datasourceoptions';
import { OrganizationsModule } from './organizations/organizations.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(DBOptions),
    OrganizationsModule,
    UsersModule,
  ],
})
export class AppModule {}

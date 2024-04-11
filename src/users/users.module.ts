import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entity/users.entity';
import { Roles } from './entity/roles.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Users]),
        TypeOrmModule.forFeature([Roles]),
    ],
    exports: [],
})
export class UsersModule {}
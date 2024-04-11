import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organizations } from './entity/organizations.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Organizations]),
    ],
    exports: [],
})
export class OrganizationsModule {}
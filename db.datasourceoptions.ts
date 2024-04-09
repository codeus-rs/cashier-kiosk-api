import 'dotenv/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as process from 'process';

const _DBOptions: TypeOrmModuleOptions = {
    type: 'postgres',
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    schema: process.env.DATABASE_SCHEMA,
    synchronize: false,
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/migrations/**/*.ts'],
    logging: ['error', 'warn'],
    migrationsRun: false,
};

switch (process.env.NODE_ENV) {
    case 'test':
    case 'development':
        Object.assign(_DBOptions, {
            ssl: false
        });
        break;
    case 'production':
        Object.assign(_DBOptions, {
            ssl: true,
            extra: {
                ssl: {
                    rejectUnauthorized: false,
                },
            },
        });
        break;
    default:
        throw new Error('unknown environment');
}

export const DBOptions = _DBOptions;
export default _DBOptions;
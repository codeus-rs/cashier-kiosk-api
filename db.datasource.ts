import { DBOptions } from './db.datasourceoptions';
import { DataSource, DataSourceOptions } from 'typeorm';

const dbOptions: DataSourceOptions = <DataSourceOptions>{};
Object.assign(dbOptions, DBOptions);

const _AppDataSource = new DataSource(dbOptions);
_AppDataSource
    .initialize()
    .then(() => {
        console.log('Data Source has been initialized!');
    })
    .catch((err) => {
        console.error('Error during Data Source initialization', err);
    });

export const AppDataSource = _AppDataSource;
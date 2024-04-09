/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
const { execSync } = require('child_process');

// Get the migration action (create/generate) from the command line arguments
const migrationAction = process.argv[2];

// Get the migration name from the command line arguments
const migrationName = process.argv[3];

// Execute the typeorm migration:create command with the provided migration name
const migrationCommand = `npm run typeorm ${migrationAction === 'create' ? `` : '-- -d db.datasource.ts'} migration:${migrationAction} ${migrationName ? `migrations/${migrationName}` : 'migrations/migration'}`;

execSync(migrationCommand, { stdio: 'inherit' });
// Example of a migration run: yarn migration:generate myMigrationName













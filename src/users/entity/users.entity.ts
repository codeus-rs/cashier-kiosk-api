import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    JoinColumn,
    Generated,
    Entity,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { Roles } from './roles.entity';
import { Organizations } from 'src/organizations/entity/organizations.entity';

@Entity()
export class Users {
    @PrimaryGeneratedColumn('uuid')
    @Generated('uuid')
    id: string;

    @Column({ unique: true})
    username: string;

    @Exclude()
    @Column({ nullable: true })
    password: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ unique: true, nullable: true })
    email: string;

    @Column({
        nullable: true,
    })
    phone: string;

    @Column({
        type: 'timestamptz',
        nullable: true,
        name: 'date_of_birth',
    })
    dateOfBirth: Date;

    @ManyToOne(() => Roles, (role) => role.id)
    @JoinColumn([{ name: 'roleId', referencedColumnName: 'id' }])
    role: Roles;

    @Column()
    roleId: string;

    @OneToOne(() => Organizations, (organization) => organization.id, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'organizationId' })
    organization: Organizations;

    @Column({ nullable: true })
    organizationId?: string;


    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamp without time zone',
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: 'updated_at',
        type: 'timestamp without time zone',
    })
    updatedAt: Date;

    @DeleteDateColumn({
        name: 'deleted_at',
    })
    deletedAt: Date;
}
import {
    Column,
    CreateDateColumn,
    Entity,
    Generated,
    DeleteDateColumn,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { IsOptional } from 'class-validator';
import { LanguageEnum } from '../enum/language.enum';

@Entity()
export class Organizations {
    @PrimaryGeneratedColumn('uuid')
    @Generated('uuid')
    id: string;

    @Column({ unique: true })
    name: string;

    @IsOptional()
    @Column({ nullable: true })
    description: string;
    
    @IsOptional()
    @Column({ unique: true, nullable: true })
    email: string;

    @IsOptional()
    @Column({ nullable: true })
    country: string;

    @IsOptional()
    @Column({ nullable: true })
    address: string;

    @IsOptional()
    @Column({ nullable: true })
    contactPerson: string;

    @IsOptional()
    @Column({ nullable: true })
    contactEmail: string;

    @IsOptional()
    @Column({ nullable: true })
    contactPhone: string;

    @Column({ nullable: true })
    currency: string;

    @Column({
        type: 'enum',
        enum: LanguageEnum,
        default: LanguageEnum.ENG,
        nullable: true,
        name: 'user_lang',
    })
    userLang: LanguageEnum;

    @CreateDateColumn({
        name: 'created_at',
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: 'updated_at',
    })
    updatedAt: Date;

    @DeleteDateColumn({
        name: 'deleted_at',
    })
    deletedAt: Date;
}
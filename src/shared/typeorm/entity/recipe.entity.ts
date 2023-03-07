import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  category: string;

  @Column()
  preparation_time: number;

  @Column()
  servings: number;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_At: Date;

  @Column()
  author: string;
}

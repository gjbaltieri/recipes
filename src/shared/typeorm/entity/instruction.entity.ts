import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Recipe } from './recipe.entity';

@Entity()
export class Instruction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column()
  order: string;

  @Column()
  tip: string;

  @OneToOne(() => Recipe, (recipe) => recipe.id)
  @JoinColumn()
  recipe_id: string;
}

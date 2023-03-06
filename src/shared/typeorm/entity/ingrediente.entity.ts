import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Recipe } from './recipe.entity';

@Entity()
export class Ingredientes {
  @Column({ primary: true, generated: 'uuid' })
  id: string;

  @Column()
  name: string;

  @Column()
  quantity: string;

  @Column()
  measure: string;

  @OneToOne(() => Recipe, (recipe) => recipe.id)
  @JoinColumn()
  recipe_id: Recipe;
}

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Recipe } from './recipe.entity';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rating: number;

  @Column()
  comment: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToOne(() => Recipe, (recipe) => recipe.id)
  recipe_id: Recipe;
}

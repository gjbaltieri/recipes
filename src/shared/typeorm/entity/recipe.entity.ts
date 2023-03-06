import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  category: string;

  @Column()
  preparation_time: number;

  @Column()
  servings: number;
}

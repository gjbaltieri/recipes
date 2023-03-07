import 'reflect-metadata';
import { Recipe } from '../shared/typeorm/entity/recipe.entity';
import { Instruction } from '../shared/typeorm/entity/instruction.entity';
import { Review } from '../shared/typeorm/entity/review.entity';
import { Ingredientes } from '../shared/typeorm/entity/ingrediente.entity';
import { DataSource } from 'typeorm';
import { default1678199293982 } from '../shared/typeorm/migrations/1678199293982-default';
export const myDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'recipes',
  synchronize: true,
  entities: [Recipe, Instruction, Ingredientes, Review],
  migrations: [default1678199293982],
});

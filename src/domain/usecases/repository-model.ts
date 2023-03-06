import { Repository, ObjectLiteral } from 'typeorm';

export default interface RepositoryModel {
  get(repository: ObjectLiteral): Repository<ObjectLiteral>;
}

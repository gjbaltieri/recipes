import { Repository } from 'typeorm';
import RepositoryModel from '../../../domain/usecases/repository-model';
import { myDataSource } from '../../../main/data-source';

export class RepositoryAdapter implements RepositoryModel {
  get(value: any): Repository<typeof value> {
    return myDataSource.getRepository(value);
  }
}

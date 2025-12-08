import { Repository } from 'typeorm';
import { UserData } from '../types';
import { User } from '../entity/User';

export class UserService {
  constructor(private userRepository: Repository<User>) {}

  async create({ firstName, lastName, email, password }: UserData) {
    const user = this.userRepository.create({
      firstName,
      lastName,
      email,
      password,
    });
    return this.userRepository.save(user);
  }
}

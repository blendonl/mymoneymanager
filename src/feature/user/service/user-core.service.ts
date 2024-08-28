import { Injectable } from '@nestjs/common';
import { UserCreateData } from '../data/user.create.data';
import { UserCoreRepository } from '../repository/user-core.repository';
import { Pick } from '@prisma/client/runtime/library';
import { User } from '@prisma/client';
import { UserAlreadyExistException } from '../exception/user.already-exist.exception';

@Injectable()
export class UserCoreService {
  constructor(private readonly userCoreRepository: UserCoreRepository) {}

  async createOrThrow(data: UserCreateData) {
    const userExist = await this.existOneByUsernameOrEmail({
      email: data.email,
      username: data.username,
    });

    if (userExist) {
      throw new UserAlreadyExistException();
    }

    return await this.userCoreRepository.create(data);
  }

  async existOneByUsernameOrEmail(data: Pick<User, 'username' | 'email'>) {
    const user = await this.userCoreRepository.findOneByUsernameOrEmail(data);

    return user !== null;
  }
}

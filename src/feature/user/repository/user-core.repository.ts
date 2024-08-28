import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/vendor/prisma/prisma.service';
import { UserCreateData } from '../data/user.create.data';
import { User } from '@prisma/client';
import { Pick } from '@prisma/client/runtime/library';

@Injectable()
export class UserCoreRepository {
  constructor(private prismaService: PrismaService) {}

  async create(data: UserCreateData): Promise<User> {
    return await this.prismaService.user.create({
      data: { ...data },
    });
  }

  async findOneById(id: string): Promise<User> {
    return await this.prismaService.user.findFirst({
      where: {
        id: id,
      },
      include: {
        expenses: true,
        incomes: true,
      },
    });
  }

  async findOneByUsernameOrEmail(data: Pick<User, 'username' | 'email'>) {
    return await this.prismaService.user.findFirst({
      where: { ...data },
      include: {
        expenses: true,
        incomes: true,
      },
    });
  }
}

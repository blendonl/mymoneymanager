import { Module } from '@nestjs/common';
import { UserCoreRepository } from './repository/user-core.repository';
import { UserCoreService } from './service/user-core.service';
import { UserCoreController } from './controller/user-core.controller';
import { PrismaModule } from 'src/vendor/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UserCoreController],
  providers: [UserCoreRepository, UserCoreService],
})
export class UserModule {}

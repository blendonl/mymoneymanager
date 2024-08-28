import { Body, Controller, Post } from '@nestjs/common';
import { UserCoreService } from '../service/user-core.service';
import { UserCreateResponseDto } from '../dto/create/user.create-response.dto';
import { UserCreateRequestDto } from '../dto/create/user.create-request.dto';

@Controller('users')
export class UserCoreController {
  constructor(private readonly userService: UserCoreService) {}

  @Post()
  async createOrThrow(@Body() data: UserCreateRequestDto) {
    const user = await this.userService.createOrThrow(data);

    return UserCreateResponseDto.fromEntity(user);
  }
}

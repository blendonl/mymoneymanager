import { UserData } from '../../data/user.data';
import { UserCreateRequestDto } from './user.create-request.dto';

export class UserCreateResponseDto extends UserCreateRequestDto {
  id: string;

  public static fromEntity(data: UserData): UserCreateResponseDto {
    return {
      id: data.id,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      username: data.username,
    };
  }
}

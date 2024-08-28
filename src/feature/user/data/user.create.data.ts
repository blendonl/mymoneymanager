import { User } from '@prisma/client';
import { Pick } from '@prisma/client/runtime/library';

export type UserCreateData = Pick<
  User,
  'firstName' | 'lastName' | 'username' | 'email'
>;

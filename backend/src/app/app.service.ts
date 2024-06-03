import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UserDto } from '@fullstack-example/shared-lib';

const prisma = new PrismaClient();

@Injectable()
export class AppService {
  async getData(): Promise<UserDto[]> {
    return prisma.user.findMany();
  }
}

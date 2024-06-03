import { Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class AppService {
  getData(): Promise<User[]> {
    return prisma.user.findMany();
  }
}

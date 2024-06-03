import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { UserDto } from '@fullstack-example/shared-lib';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
  async getData(): Promise<UserDto[]> {
    return this.appService.getData();
  }
}

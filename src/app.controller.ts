import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './modules/user/user.service';
import { User } from './modules/user/models/user.entity';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Get('/create')
  async create(): Promise<boolean> {
    return await this.userService.create({
      name: '水滴超级管理员',
      desc: '管理员',
      tel: '8800888',
      password: '123456',
      account: 'admin',
    })
  }

  @Get('/del')
  async del(): Promise<boolean> {
    return await this.userService.del('6be1182e-5f6d-49ad-a44b-4d1fb0c2567e');
  }

  @Get('/update')
  async update(): Promise<boolean> {
    return await this.userService.update('717eef69-8c49-42de-8453-dd261528b9c9', {
      name: '水滴超级管理员11111',
      desc: '管理员',
      tel: '8800888',
      password: '123456',
      account: 'admin',
    })
  }

  @Get('/find')
  async find(): Promise<User> {
    return await this.userService.find('717eef69-8c49-42de-8453-dd261528b9c9');
  }
}

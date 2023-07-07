import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get()
  getApp(): string {
    return this.appService.printApp();
  }
}
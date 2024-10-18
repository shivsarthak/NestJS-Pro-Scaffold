import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  ok() {
    return {
      status: 'ok',
    };
  }
}

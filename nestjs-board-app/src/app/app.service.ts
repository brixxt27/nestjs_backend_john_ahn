import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  printApp(): string {
    return 'App';
  }
}

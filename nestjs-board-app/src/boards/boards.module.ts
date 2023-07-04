//  module 을 생성할 때 직접 추가하는 것이 아닌 nest cli 를 사용한다.
//  nest g module boards 를 실행하니 알아서 boards 디렉토리가 생성되고, ts 파일이 생기며, app.module.ts 파일에 자동으로 import {BoardsModule} from './boards/boards.module'; 과 데코레이터의 import 에 BoardsModule 이 추가된다.
import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';

@Module({
  controllers: [BoardsController],
  providers: [BoardsService]
})
export class BoardsModule {}
import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';

@Module({
  imports: [BoardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {} 
/**
 * AppModule 은 root 모듈로 Nestjs의 각 응용프로그램에는 하나 이상의 루트 모듈이 있어야 한다.
 * 모듈이란 @Module(데코레이터)로 주석이 달린 class 이다.
 * @Module(데코레이터) 는 Nest가 애플리케이션을 구성하는데 필요한 메타데이터를 제공 할 수 있다.
 */

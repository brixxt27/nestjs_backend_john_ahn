import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig), // 특정 entity 를 사용하기 전에 TypeORM 이 특정 entity 에 대해 알도록 하기 위해 모듈의 forRoot()의 인자로 entities의 배열(여기에선 objects)을 삽입한다.
    BoardsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {} 
/**
 * AppModule 은 root 모듈로 Nestjs의 각 응용프로그램에는 하나 이상의 루트 모듈이 있어야 한다.
 * 모듈이란 @Module(데코레이터)로 주석이 달린 class 이다.
 * @Module(데코레이터) 는 Nest가 애플리케이션을 구성하는데 필요한 메타데이터를 제공 할 수 있다.
 */

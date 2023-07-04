import { Controller,Get } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  
  // 프로퍼티의 이름: 프로퍼티의 타입
  // boardsService: BoardsService;
  
  // constructor(boardsService: BoardsService) {
  //   this.boardsService = boardsService;
  // }

  // 위 네 줄을 한 줄로 줄일 수 있음.
  // 생성자 내에 private 를 작성하면 암묵적으로 해당 클래스의 프로퍼티가 됨.
  constructor(private boardsService: BoardsService) {}

  @Get() // boards 모듈의 /boards이라서 https://localhost:3000/boards/borads여야 작동한다.
  getHello(): string {
    return this.boardsService.getHello();
  }
}

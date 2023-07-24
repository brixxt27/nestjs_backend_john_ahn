import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardStatus } from './board-status.enum';
import { CreateBoardDto } from './dto/create-board';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { Board } from './board.entity';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  // @Get('/') // 빈칸과 '/' 는 같은 의미이다.
  // getAllBoard(): Board[] {
  //   return this.boardsService.getAllBoards();
  // }

  // // @Post()
  // // createBoard(
  // //   @Body('title') title: string,
  // //   @Body('description') description: string) {
  // // DTO 를 만들어서 위를 아래로 간략하게 표현 할 수 있다.
  // @Post()
  // @UsePipes(ValidationPipe)
  // createBoard(@Body() createBoardDto: CreateBoardDto) {

  //   return this.boardsService.createBoard(createBoardDto);
  // }

  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardsService.getBoardById(id);
  }
  // @Get('/:id') // 경로 상에서 리소스에 붙어 있는 :(콜론)은 동적인 데이터를 나타낸다.
  // getBoardById(@Param('id') id: string): Board { // pipe 에 class 자체를 넣으면 ParseIntPipe의 기본적인 조건으로 statusCode 와 Message 가 나오는데 이처럼 객체로 던지면 ParseIntPipe transformer 를 던지면 이에 에러가 생겼을 때 커스텀 된 메시지와 상태코드를 응답할 수 있다.
  //   return this.boardsService.getBoardById(id);
  // }

  // @Delete('/:id')
  // deleteBoard(
  //   @Param('id') id:string
  // ): void {
  //   this.boardsService.deleteBoard(id);
  // }

  // @Patch('/:id/status')
  // updateBoardStatus(
  //   @Param('id') id: string, 
  //   @Body('status', BoardStatusValidationPipe) status: BoardStatus
  // ): Board {
  //   return this.boardsService.updateBoardStatus(id, status);
  // }
}

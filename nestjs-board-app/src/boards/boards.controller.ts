import { Body, Controller,Delete,Get, Param, Patch, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board, BoardStatus } from './board.model';
import { CreateBoardDto } from './dto/create-board';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/') // 빈칸과 '/' 는 같은 의미이다.
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoards();
  }

  // @Post()
  // createBoard(
  //   @Body('title') title: string,
  //   @Body('description') description: string) {
  // DTO 를 만들어서 위를 아래로 간략하게 표현 할 수 있다.
  @Post()
  createBoard(@Body() createBoardDto: CreateBoardDto) {

    return this.boardsService.createBoard(createBoardDto);
  }

  @Get('/:id')
  getBoardById(@Param('id') id: string): Board {
    return this.boardsService.getBoardById(id);
  }

  @Delete('/:id')
  deleteBoard(@Param('id') id:string): void {
    this.boardsService.deleteBoard(id);
  }

  @Patch('/:id/status')
  updateBoardStatus(@Param('id') id: string,
  @Param('status') status: BoardStatus): Board {
    return this.boardsService.updateBoardStatus(id, status);
  }
}

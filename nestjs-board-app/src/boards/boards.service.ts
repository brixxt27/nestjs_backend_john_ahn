import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import {v1 as uuid} from 'uuid';// uuid 의 버전 v1을 사용한다는 의미, as 를 사용하면 이름을 변경 가능하다.
import { CreateBoardDto } from './dto/create-board';
import { IsEmpty } from 'class-validator';

@Injectable()
export class BoardsService {

  // getAllBoards(): Board[] {
  //   return this.boards;
  // }

  // createBoard(createBoardDto: CreateBoardDto): Board {
  //   // const title = createBoardDto.title;
  //   // const description = createBoardDto.description;
  //   // 위와 아래는 같음. 아래는 object 컨테이너가 아니다.
  //   const {title, description} = createBoardDto; //Destructuring assignment이라 불린다.

  //   const board: Board = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: BoardStatus.PUBLIC
  //   }

  //   this.boards.push(board);
  //   return board;
  // }

  // getBoardById(id: string): Board {
  //   // find()의 인자로는 콜백함수가 들어간다. 콜백함수의 인자로는 배열의 요소, 배열의 인덱스, 배열 자체가 들어간다. 배열의 요소는 필수이고, 나머지는 선택이다. 배열의 요소란? 배열의 각 요소에 대해 순서대로 한 번씩 호출하고, predicate 가 true 를 반환하는 요소를 찾을 때까지 오름차순으로 호출한다. 이러한 요소가 발견되면 find 는 즉시 해당 요소 값을 반환한다. 그렇지 않으면 find 는 undefined 를 반환한다. predicate 가 true 인 배열의 첫 번째 요소의 값을 반환하고, 그렇지 않으면 undefined 를 반환한다.
  //   const found = this.boards.find((board) => (board.id === id));

  //   if (found === undefined)
  //     // throw new NotFoundException();
  //     throw new NotFoundException(`Can't find Board with id ${id}`);
    
  //   return found;
  // }

  // deleteBoard(id: string): void {
  //   const found = this.getBoardById(id);

  //   this.boards = this.boards.filter((board) => (board.id !== found.id))
  // }

  // updateBoardStatus(id: string, status: BoardStatus): Board {
  //   const board: Board = this.getBoardById(id);

  //   board['status'] = status;
  //   return board;
  // }
}

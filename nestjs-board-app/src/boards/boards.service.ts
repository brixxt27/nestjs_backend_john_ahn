import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import {v1 as uuid} from 'uuid';// uuid 의 버전 v1을 사용한다는 의미, as 를 사용하면 이름을 변경 가능하다.
import { CreateBoardDto } from './dto/create-board';
// import { IsEmpty } from 'class-validator';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BoardsService {
  /* - service 를 controller 에 주입하는 행위는 Service class 위에 @Injectable() 데코레이터를 추가한다. 이에 반해 BoardRepository 타입에 해당하는 변수를 선언하며 의존성을 주입하고 싶다면 생성자의 인자에 @InjectRepository(<repository type>) 을 통해 해야 한다.
  - client 로부터 온 request 는 파싱 되어 controller 에서 해당하는 경로로 routing 되게 된다. endpoint 에서 가장 앞쪽에 해당하는 리소스가 module 의 이름이 되며, 해당 이름을 가진 controller 와 service 로 만들면 가독성이 좋다. 
  - controller 에서 비교적 복잡한 로직은 service 라는 class 로 관리 된다. service 는 module 에서 provider 라는 이름으로 controller 에 의존성을 주입 시킨다.
  - Database 에 대한 로직은 service 에서 다루지 않고 복잡한 일은 service 에 분배하듯이, 또 다시 책임을 분배한다. 이는 Repository 라고 불리는 class 로 관리 된다.
  */
  constructor(@InjectRepository(Board)
    private boardRepository: Repository<Board>
  ) {}

  getAllBoard(): Promise<Board[]> {
    return this.boardRepository.find();
  }

  // getAllBoards(): Board[] {
  //   return this.boards;
  // }

  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const {title, description} = createBoardDto;
    const board = this.boardRepository.create({
      title,
      description,
      status: BoardStatus.PUBLIC
    });

    await this.boardRepository.save(board);
    return board;
  }
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

  async getBoardById(id: number): Promise <Board> { // number 가 아닌 값이 들어오면 ExceptionHandler 에서 에러 발생 500
    const found = await this.boardRepository.findOneBy({ id });

    if (found === undefined) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
    return found;
  }
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

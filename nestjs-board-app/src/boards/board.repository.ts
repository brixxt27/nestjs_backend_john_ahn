import { EntityRepository, Repository } from "typeorm";
import { Board } from "./board.entity";

@EntityRepository(Board)
export class BoardRepository extends Repository<Board> { // entity 를 컨트롤하기 위해서 상속, Repository의 타입에 컨트롤 할 entity 의 타입을 넣어준다.

}
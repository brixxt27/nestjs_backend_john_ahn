import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BoardStatus } from "./board-status.enum";

@Entity() // database에 mapping 된 class 이다.
export class Board extends BaseEntity { // BoardEntity 는 왜 상속 받나?
  @PrimaryGeneratedColumn()
  id: number; // database 에서 알아서 id 를 생성해줌

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: BoardStatus;
}
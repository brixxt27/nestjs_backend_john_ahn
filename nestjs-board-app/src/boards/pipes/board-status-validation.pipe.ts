import { BadRequestException, PipeTransform } from "@nestjs/common";
import { BoardStatus } from "../board.model";

// Make custom pipes
export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions: BoardStatus[] = [ // class 외부에서 변경 불가능, 22, 23 줄로 증명
    BoardStatus.PRIVATE,
    BoardStatus.PUBLIC
  ];

  transform(value: any) {
    value = value.toUpperCase();

    if (this.isStausValied(value) === false) {
      throw new BadRequestException(`${value} isn't in the status options`);
    }

    return value; // value 가 아래 주석의 updateBoardStatus 핸들러의 status로 반환 되어 할당 된다.
  }
  /**
    @Patch('/:id/status')
    updateBoardStatus(
      @Param('id') id: string, 
      @Body('status', BoardStatusValidationPipe) status: BoardStatus
    ): Board {
      return this.boardsService.updateBoardStatus(id, status);
    }
   */

  private isStausValied(status: any): boolean {
    const index = this.StatusOptions.indexOf(status); // 인자로 들어오는 status 가 가지고 있는 배열의 프로퍼티에 있으면 해당 index, 없으면 -1 반환

    // this.StatusOptions.push(BoardStatus.PRIVATE);
    // console.log(this.StatusOptions);
    return index !== -1;
  }
}
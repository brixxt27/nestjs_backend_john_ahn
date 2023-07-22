// model 은 class와 interface 둘 중 하나를 사용하면 된다.
// interface 는 변수의 타입만 가질 수 있다.
export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus;
};

export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE'
};

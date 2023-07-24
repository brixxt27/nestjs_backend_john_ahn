import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeORMConfig: TypeOrmModuleOptions = { // typeOrmModuleOptions라는 자료형의 object 를 만들면 app.module.ts 에 imports 할 때 쉽게 추가 할 수 있다. nest 는 database의 내부가 어떤지 전혀 알지 못해도 쉽게 이용할 수 있도록 추상화 되어 있다.
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'board-app',
  entities: [__dirname + '/../**/*.entity.{js, ts}'],
  synchronize: true // true 값을 주면 애플리케이션을 다시 실행할 때 엔티티 안에서 수정된 칼럼의 길이 타입 변경값 등을 해당 테이블을 drop한 후 다시 생성해준다.
};
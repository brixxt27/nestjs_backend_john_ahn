export class CreateBoardDto {
  public title: string;
  public description: string;
}

// 이거 해석해줘 find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined. Returns the value of the first element in the array where predicate is true, and undefined otherwise.
// find 는 배열의 각 요소에 대해 순서대로 한 번씩 호출하고, predicate 가 true 를 반환하는 요소를 찾을 때까지 오름차순으로 호출한다. 이러한 요소가 발견되면 find 는 즉시 해당 요소 값을 반환한다. 그렇지 않으면 find 는 undefined 를 반환한다. predicate 가 true 인 배열의 첫 번째 요소의 값을 반환하고, 그렇지 않으면 undefined 를 반환한다.
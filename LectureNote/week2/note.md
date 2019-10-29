# 배열, 반복문, 배열의 반복, 객체

## 발표자

- 안소현

## 참여자

- 김주완, 안소현, 양유성, 이상아, 이소윤

## 내용
* 배열 
* 배열 구조분해(destructuring)
* 배열의 반복(foreach, for-in, for-of, map, filter)
* 객체



### 배열
* 배열 안에는 모든 타입의 data가 섞여서 들어갈 수 있다. 
* javascript에서 배열은 list를 뜻한다.
#### list와 array의 차이는 무엇일까? 
  * 찾아서 쓰기(참고; https://opentutorials.org/module/1335/8677)

* const로 선언되어도 배열 안의 값을 바꿀 수 있다. 하지만, 새로운 배열이나 값으로 재할당 할 수 없다.
```javascript
const num = ['one', 'two', 'three','five'];
num[3] = 'four';
console.log(num); // [ 'one', 'two', 'three', 'four' ]
num = [1,2,3,4]; // TypeError: Assignment to constant variable
```

### 배열의 구조분해(Destructuring)
* ES6에서 추가된 기능!
* 구조분해(Destructuring)? 
배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 javascript표현식
* 같은 자리에 있는 값이 할당된다. 밑의 예시를 보고 이해하는게 빠를 듯하다..
```javascript
let [a, b] = [1, 2];
console.log(a);// 1
console.log(b);// 2
```
* 특정 자리를 비워놓으면 건너뛸 수 있다.
```javascript
[a, , b] = [4, 5, 6];
console.log(a);// 4
console.log(b);// 6
```
* 나머지 변수 (Spread Operator / Rest Operator)
  * '...'(점 3개)로 시작하는 변수를 나머지 변수라고 말한다.
  * 앞에서 할당되지 않은 모든 변수를 배열로 할당한다.
  * 나머지 변수 뒤에는 다른 변수가 올 수 없다.
 ```javascript
let [a, ...b] = [1, 2, 3];
console.log(a);// 1
console.log(b);// [2, 3]
```

### 배열의 반복
* #### forEach() 
  * 배열 안 각각의 element에 대해 같은 코드를 수행하게 한다.
  * forEach() 인수는 callback function이고 callback function의 인수는 current element로 계속 바뀐다.
  * forEach() 는 return, break, continue가 불가능! 만약 return을 쓰면 undefined가 나온다.
 ```javascript
const arr = ['a', 'b', 'c'];
arr.forEach(function (elem) {
    console.log(elem);
});
```

* #### for-of
  * ES6에서 새로 추가된 기능.
  * forEach()에는 할 수 없는 break, continue, return을 사용할 수 있다.
  * 반복 가능한 객체(Iterable)에서 '객체의 요소(data)'를 순회하기 위한 구문이다.
```javascript
const arr = ['a', 'b', 'c'];
for (const elem of arr) {
    console.log(elem);
};
```

* #### for-in
  * ES6부터는 사용하지 않는 걸로 알고 있다. 
  * 객체의 속성을 순회하기 위한 구문이다.
 
##### for-of와 for-in의 차이
```javascript
let list = ['a','b','c'];
for(let ele in list){
    console.log(ele); // 0, 1, 2
}

for(let ele of list){
    console.log(ele); // a, b, c
}
```
*for-in은 인덱스를 출력하고 for-of는 값을 출력했다.


* #### .map()
  * .map()의 인수는 callback function이다. 
  * map()은 function을 수행하고 '새로운 배열' 을 return한다.
```javascript
const numbers = [1, 2, 3, 4, 5]; 
const bigNumbers = numbers.map(number => {
  return number * 10;
});
console.log(bigNumbers); // [ 10, 20, 30, 40, 50 ]
```
* #### .filter()
 * .filter()의 인수는 callback function이다. 
 * filter()은 function을 수행하고 '조건을 만족하는 새로운 배열' 을 return한다.
```javascript
const words = ['apple', 'music', 'melon', 'samsung', 'pen', 'door']; 
const shortWords = words.filter(word => {
  return word.length < 5;
});
console.log(shortWords); // Output: ['pen', 'door']
```


## 객체
* '{}'로 묶어서 나타낸다.
* 객체는 순서를 갖지 않는다.
* key-value pair로 조직된다.


#### 접근하기
* 객체명.속성명 으로 접근하거나,
* 객체명['속성명']으로 접근한다. 이렇게 접근할 때는 속성명을 따옴표(quotation mark)로 묶어줘야한다.
* 속성명에 띄어쓰기가 들어가는 경우에 객체명['속성명']을 사용한다. 
```javascript
let student = {
  name: 'sohyeon',
  'favorite color' : 'white',
  id: 201533651
};

console.log(student.name); // Output: sohyeon
console.log(student['favorite color']); // Output: white
```
* 선언하지 않은 속성에 접근하면 undefined가 뜬다.
```javascript
console.log(student.age); // Output: undefined
```

#### 수정하기
* 새로운 값으로 바꿀 때, 처음 선언한 타입과 다른 타입으로 바꿔도 된다.
* 해당 속성이 없으면 새로운 속성이 추가된다. 
* const로 선언하면 그 객체 자체를 바꾸는 건 안되지만 객체 안의 속성(property)를 수정할 순 있다.
```javascript
const student = { grade : 'senior' };
student = { grade: 'freshman' }; // TypeError : Assignment to constant variable.

student.grade = 4; // 처음 선언한 타입과 다른 타입으로 할당
student.gender = 'female'; // 처음 선언할 때 없었던 속성 추가
console.log(student); // Output: { grade: 4, gender: 'female' }
```

* 특정 속성을 삭제하고 싶으면 'delete'를 사용한다.
```javascript
delete student.gender;
console.log(student); Output: { grade: 4 }
```

* 객체의 value는 function이 될 수 있다.
```javascript
const me = 
{
  introduce: function () {
    console.log("Hello! I\'m sohyeon');
  }
};
 
me.introduce(); //prints 'Hello! I'm sohyeon'
```

* function은 줄여서 이렇게 쓸 수 있다.
```javascript
const me = 
{
  introduce() {
    console.log("Hello! I\'m sohyeon');
  }
};
```



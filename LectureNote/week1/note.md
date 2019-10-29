# 변수, 타입, 조건문, 함수

## 발표자

- 이상아

## 참여자

- 김라희, 안소현, 양유성, 이소윤

## 내용

- JS와 ES6, JS의 역사
- 타입
- var, const, let
- Hoisting
- 조건문
- 함수

### JS와 ES6, JS의 역사

#### JS? ES6? ES?

- 넷스케이프 커뮤니케이션즈에서 JavaScript를 선보였다.
  - 1995년, **넷스케이프 커뮤니케이션즈**는 정적인 HTML을 동적으로 표현하기 위해 **JavaScript**를 도입하게 되었다. (처음에는 Mocha, 그 다음에 LiveScript, 그 다음에 JavaScript가 되었다)
- 마이크로소프트에서 JScript를 선보였다.
  - 그러나, JavaScript가 탄생한 뒤 얼마 지나지 않아, **MS**에서 자바스크립트의 파생 버전인 **JScript**를 출시하였다. 이로써 JavaScript가 위기를 맞기 시작했다.
  - 더해서 1996년 8월, MS는 JScript를 IE 3.0에 탑재하였다. 그런데 문제는 **JScript와 JavaScript가 표준화되지 못하고 적당히 호환되었다**는 것이다. 왜냐하면 자사 브라우저의 시장 점유율을 점유하기 위해 자사 브라우저에서만 동작하는 기능을 추가했기 때문이었다.
- 크로스 브라우징 이슈가 발생하기 시작했다.
  - 이로인해, 브라우저에 따라 웹 페이지가 정상 동작하지 않는 크로스 브라우징 이슈가 발생하기 시작했다. 이에 **모든 브라우저에서 동작하는 웹 페이지를 개발하는 것은 무척 어려워졌다**.
- 표준화된 JavaScript에 대한 필요성이 제기되기 시작했다.
  - 이에 JavaScript의 파편화를 방지하고, **모든 브라우저에서 동일하게 동작하는 표준화된 JavaScript에 대한 필요성이 제기**되기 시작했다.
- ECMA 인터내셔널이 JavaScript 표준화를 하게 되었다.
  - 이를 위해 1996년 11월, 넷스케이프 커뮤니케이션즈는 컴퓨터 시스템의 표준을 관리하는 비영리 표준화 기구인 **ECMA 인터내셔널**에 **JavaScript의 표준화를 요청**하였다.
- ECMAScript
  - 이에 1997년 ECMA-262라 불리는 표준화된 자바스크립트 초판(ECMAScript 1)의 명세(specification)가 완성되었고 상표권 문제로 자바스크립트는 **ECMAScript**로 명명되었다.
- 왜 ES6라고 부르는걸까?
  - 2015년 ECMAScript 6(ECMAScript 2015)가 공개되었고 범용 프로그래밍 언어로서 갖추어야 할 [let/const 키워드](https://poiemaweb.com/es6-block-scope), [화살표 함수](https://poiemaweb.com/es6-arrow-function), [클래스](https://poiemaweb.com/es6-class), [모듈](https://poiemaweb.com/es6-module) 등과 같은 기능들을 대거 도입하는 큰 변화가 있었다. 이에 2018년 기준 ES9 까지 나왔지만, 퉁쳐서 ES6라고 부른다.

#### JavaScript의 성장과 역사

- 한정적인 JavaScript의 역할
  - 서버로부터 완전한 HTML을 전송 받아 웹 페이지 전체를 렌더링하는 방식으로 동작했다.
  - **대부분 로직은 주로 웹 서버에서 실행**되었고 **브라우저는 서버로부터 전달받은** **HTML**과 **CSS**를 **단순히 렌더링하는 수준**이었다.
- Ajax

  - 1999년, 자바스크립트를 이용해서 **비동기적(Asynchronous)으로 서버와 브라우저가 데이터를 교환할 수 있는 통신 기능**인 **Ajax(Asynchronous JavaScript and XML)** 가 XMLHttpRequest이라는 이름으로 등장했다.
  - 서버로부터 필요한 데이터만을 전송 받아 **변경이 필요한 부분만을 한정적으로 렌더링** 할 수 있게 되었다.

- Google Maps
  - 2006년, 구글이 발표한 Google Maps는 **웹 애플리케이션 개발 프로그래밍 언어로서 자 바스크립트의 가능성을 확인하는 계기**를 마련했다.
  - 웹 브라우저에서 **자바스크립트와** **Ajax를 기반으로 동작하는 Google Maps 데스크톱 애플리케이션과 비교해 손색이 없을 정도의 퍼포먼스와 부드러운 화면 전환 효과**를 보여 준 것이다.
- jQuery
  - 2006년, **jQuery**의 등장으로 다소 번거롭고 논란이 있던 DOM(Document Object Model)을 보다 쉽게 제어할 수 있게 되었고 크로스 브라우징 이슈도 어느 정도 해결되었다.
  - 이로 인해 당시 다소 까다로운 자바스크립트보다 배우기 쉽고 직관적인 jQuery를 더 선호하는 개발자가 양산되기도 했다.
- V8
  - Google Maps를 통해 가능성이 확인된 자바스크립트로 웹 애플리케이션을 구축하려는 시도가 늘어가면서 **보다 빠르게 동작하는 자바스크립트 엔진**이 요구되었다.
  - 2008년 등장한 구글의 **V8** **자바스크립트 엔진**은 이러한 요구에 부합하는 빠른 성능을 보여 주었다.
  - V8 자바스크립트 엔진으로 촉발된 자바스크립트의 발전으로 말마암아 과거 웹 서버에서 수행되던 역할들이 클라 이언트(브라우저)로 이동하였고, 이로써 웹 애플리케이션에서 프런트엔드 영역이 주목받는 계기가 되었다.
  - C++로 작성되었으며 크롬에서도 사용 중이다.
- Node.js
  - 2009년, 브라우저에서만 동작하던 **자바스크립트를 브라우저 이외의 환경에서 동작시킬 수 있는 자바스크립트 실행 환경**인 **Node.js**의 등장으로 자바스크립트는 웹 브라우저를 벗어나 서버 사이드 애플리케이션 개발에서도 사 용되는 범용 프로그래밍 언어가 되었다.
  - 웹 브라우저에서만 동작하는 반쪽짜리 프로그래밍 언어 취급을 받던 자바스크립트는 이제 Front-End 영역은 물론 백엔드 영역까지 아우르는 웹 프로그래밍 언어의 표준으로 자리잡고 있다.

#### 지금의 JavaScript

- V8 엔진과 Node.js 위에서 작동한다.
- Java가 모든 OS에서 똑같은 결과를 내기 위해 VM 환경 안에서 Runtime이 구동되듯이, **브라우저가 아닌 환경**에서도 **빠르게 작동**하기 위해 V8 엔진과 Node.js 위에서 작동한다.
- (JavaScript 엔진은 V8 엔진 외에도 Rhino, SpiderMonkey 등이 있다. 그 중에서도 대중적으로 알려지고 많이 쓰이고 있는 것이 V8이다.)

#### JavaScript는 Compile 언어일까, Interpreter 언어일까?

- 유성이가 좋은 질문을 해주었다. 이 부분에 대해서 공부하면서 V8엔진과 다른 엔진들, JIT 컴파일러에 대해 알 수 있었다.

- 어떤 책에서는 컴파일 언어라 하고, 인터넷의 어떤 자료는 콕 찝어서 말할 수 없다고 한다. 이에 좀 더 찾아보았고 흥미로운 점을 알게되었다.

> 자바스크립트 엔진은 인터프리팅 하기 전에 그 코드를 먼저 컴파일한다

- 컴파일도 하고, 인터프리팅도 한다는걸까? 여러 자료를 보고 든 생각은 **어떨 때는 맞고 어떨 때는 아니다** 라는 것이었다. 그리고 **어떨 때**의 기준은 **엔진** 이라고 생각했다. JavaScript에는 다양한 엔진이 있다. 우리가 알고있는 가장 대표적인 **V8** 엔진 뿐만 아니라 **Mozila 에서 java로 만든 Rhino 엔진**, **최초의 JavaScript 엔진인 Monkey 엔진** 등이 있다.
  - V8 엔진은 인터프리터 없이 두 개의 컴파일러로 구성이 되어있다. (어떤 자료에서는 JIT 컴파일러로 되어있다고 하고, 어떤 자료는 아니라고해서 조금 혼란스럽다.)
  - Rhino 엔진은 기본적으로 **인터프리터, 부분적으로 자바 바이트코드로 컴파일** 한다.
  - Monkey 엔진은 **컴파일러**(JIT(Just in Time) )를 사용하고 있다. (다만 JIT도 순수한 컴파일러로 보기에는 어렵다)
- 예전에는 스크립트 언어에 대해 '이 언어는 인터프리터 언어고, 저 언어는 컴파일 언어다' 이야기할수 있었지만 사실 JIT 컴파일러와 VM의 등장이후 어느정도 경계가 흐려졌다고 한다. **따라서 하나로 콕 찝어서 말할 수는 없는 언어**이며, 나는 **개인적으로 엔진에 따라달라진다고 생각**한다.

##### JIT

- Just-In-Time(이하 JIT)의 약자이다. **JIT 컴파일러는 인터프리터 언어와 컴파일러 언어의 장점을 취하고 단점을 버리기 위해** 등장하였다.
- 컴파일 언어의 장/단점
  - 장점: 최적화를 하기때문에, 반복문이 있다고 하여 속도가 느려지지 않는다.
  - 단점: compile time에 최적화를 해야하기 때문에, 초기 구동 시간이 인터프리터 언어에 비해 오래걸린다.
- 인터프리터 언어의 장/단점
  - 장점: compile을 하지 않고 runtime에 바로 해석하기 때문에 속도가 빠르다.
  - 단점: 반복문과 같은 동일한 코드가 있어도 매번 번역해야 하기 때문에, 컴파일 언어에 비해 오래걸린다.
- 컴파일 언어의 장점과 인터프리터 언어의 장점을 고루 사용하게끔 도와주는 모니터
  - 이처럼 컴파일 언어와 인터프리터 언어의 장/단점은 완전 상극이다. 이런 장/단점을 잘 조화시킨 방법은 **모니터** 이다.
  - 모니터는 코드가 실행되는 것을 관찰하면서 **해당 코드가 얼마나 많이 실행**되고, **어떤 타입이 사용되는지**를 기록한다. 먼저, 모니터는 **인터프리터**를 통해서 **모든 것을 실행**한다. 만약 같은 줄의 코드가 적은 횟수로만 실행되면, 그 코드는 **따뜻하다(warm)** 라고 칭한다. 만약 많이 실행된다면 **뜨겁다(hot)** 라고 칭한다.
  - 어떤 함수가 **따뜻해지기(warm) 시작하면** JIT는 그 함수를 **컴파일 하기 위해 전송**한다. 그 이후에 JIT는 **컴파일된 정보를 저장**한다.
  - 만약 코드가 정말로 **뜨겁다면(hot)** – 코드가 아주 많은 횟수로 실행된다면 – **최적화를 더 하기 위해 추가적인 시간을 들일만한 가치가 있을 것**이다. 모니터는 그 부분을 **최적화 컴파일러에게 전송**한다. 이 컴파일러는 **또 다른 더욱 빠른 버전의 함수를 생성**하며, 이 함수 역시 **저장**된다.

### 타입

#### 타입의 종류

- 기본형 (Primitive type)

  - null
  - undefined
  - boolean
  - number
  - string

- 복합형 (Non-Primitive type)

  - object
  - array

#### 타입을 체크하는 방법

```javascript
console.log(typeof a);
```

#### Undefined? Undefined(Undeclared)?

- 두 변수들의 값을 출력하려고 한다. 이 때 **선언이 되었지만 값이 없는 변수 a** 와 **선언조차 되지 않은 변수 b**가 있다.

  - ```javascript
    var a;
    console.log(a); // undefined

    console.log(b); // ReferenceError: b is not defined
    ```

  - b를 출력할 때 에러가 난다. 이해가 가는 내용이다.

- 이어서 두 변수들의 타입을 출력하려고 한다. 이 때 **선언이 되었지만 값이 없는 변수 a** 와 **선언조차 되지 않은 변수 b**가 있다.

  - ```javascript
    var a;
    console.log(typeof a); // undefined

    console.log(typeof b); // undefined (undeclared)
    ```

  - 두개를 모두 출력하면 `undefined` 라는 값이 출력된다. `a` 야 정의되지 않은 것이 맞긴 하지만, 선언조차 되지 않은 `b` 또한 에러가 뜨지 않고 똑같이 `undefined` 를 출력한다.

  - 이 점을 활용하여 **Reference Error의 안전 가드**로 사용할 수 있다. 임의의 변수를 사용하려고 할 때, 이 변수가 선언이 아예 되지 않았는지, 또는 값이 없는지를 체크할 수 있다는 점에서 착안하였다.

    ```javascript
    if (typeof a === "undefined")
      console.log("변수가 올바르게 선언되지 않았습니다");

    if (typeof b === "undefined")
      console.log("변수가 올바르게 선언되지 않았습니다");
    ```

#### JavaScript의 변수의 타입

- (const를 제외하고) 변수를 선언한 이후 재 할당이 가능하다. 즉 **변수가 가진 타입이 계속 바뀔 수 있다는 것**이다.
- 따라서 변수에 typeof 연산자를 대어보는 건 **"이 변수의 타입은 무엇이니?**" 라는 질문과 같지만, 실은 타입이란 개념은 변수에 없으므로 정확히는 **"이 변수에 들어있는 값의 타입은 무엇이니?"** 라고 묻는 것이다.

### var, let, const

#### var, let, const의 차이

- var과 let, const의 차이는 무엇일까?

  - **scope가 다르다.**

    - `var` : function-scoped
    - `let & const` : block-scoped

  - **재 선언, 재 할당 여부가 다르다.**

    - |       | 재 선언 | 재 할당 |
      | ----- | :-----: | :-----: |
      | var   |    O    |    O    |
      | let   |    X    |    O    |
      | const |    X    |    X    |

#### Function scope, Block scope

- Function scope

  ```javascript
  function f() {
    var v = 5;

    console.log(v); // 5
  }

  console.log(v); // ReferenceError: v is not defined
  ```

  - function scope를 갖는 `var v` 는 이처럼 함수 안에서만 존재한다.

- Block scope

  ```javascript
  for (let a = 0; a < 5; a++) {
    console.log(a); // 0 1 2 3 4
  }

  console.log(a); // ReferenceError: a is not defined
  ```

  - block scope를 갖는 `let a` 는 이처럼 block 안에서만 존재한다.

#### var, let, const는 어디에 저장이 될까?

> 전부 heap에 저장되나요 아니면 일반적인 변수, 상수처럼 heap, stack에 저장되나요?

- 유성이가 좋은 질문을 해주었다. 전혀 생각하지 못했던 부분이었다. 이는 데이터의 type에 따라 결정이 된다.
- Primitive type (null, undefined, boolean, number, string) 의 경우 stack에, Non-Primitive type (array, object) 의 경우 heap에 저장된다.

### Hoisting

#### Hoisting의 예시와 개념

- 그렇다면, 이건 결과가 어떻게 나올까? 마지막줄의 `console.log()` 는 출력이 될까?

  ```JavaScript
  for(var j=0; j<10; j++) {
  	console.log('j', j);
  }
  console.log('after loop j is ', j);
  ```

  - 답은 그렇다. 출력 결과는 아래와 같다.

  ```javascript
  j 0
  j 1
  j 2
  j 3
  j 4
  j 5
  j 6
  j 7
  j 8
  j 9
  after loop j is  10
  ```

- `after loop j is 10` 이 출력이 될 수 있는 이유는, 컴파일 과정 중에 `var j` 를 맨 윗부분에서 선언해주기 때문이다. 즉 위의 코드는 아래와 같은 내용인 것이다

  - `var` 가 function scope 를 갖는다면서 **왜 for문 안이 아니라 전역에 선언이 된 것일까?** 왜냐하면 **for문은 함수가 아니기 때문이다**.

  ```javascript
  var j;

  for (j = 0; j < 10; j++) {
    console.log("j", j);
  }
  console.log("after loop j is ", j);
  ```

- 이처럼 **컴파일 과정 중에 선언문을 맨 위로 끌어올려주어, 해당 scope 내에서 선언과 사용의 순서에 상관 없이 사용할 수 있도록 하는 것**을 **`Hoisting`** 이라 한다. 함수가 변수보다 우선시된다.

- 1번과 2번 코드는 3번과 같다. 4번의 경우 `ReferenceError` 가 뜨지 않고 `undefined` 가 뜨는 이유는, 생각해보건대 `var foo;` 는 맨 위로 끌어올려졌지만 **값 할당이 `console.log()` 이후**에 일어났기 때문에 **var foo가 선언만 되고 값이 할당이 되지 않아서** undefined가 나온 것 같다.

  ```javascript
  // 1.
  foo = "bar";
  var foo;
  console.log(foo); // bar

  // 2.
  foo = "bar";
  console.log(foo); // bar
  var foo;

  // 3.
  var foo;
  foo = "bar";
  console.log(foo); // bar

  // 4.
  console.log(foo); // undefined
  foo = "bar";
  var foo;
  ```

#### Hoisting이 일어나는 경우와 그렇지 않은 경우

- var 변수/함수의 선언만 위로 끌어올려진다.
- const, let, 함수표현식과 같이 **선언과 동시에 할당이 되는 경우** 에는 끌어올려지지 않는다.

|             | Hoisting 여부 |
| :---------: | :-----------: |
|     var     |       O       |
|     let     |       X       |
|    const    |       X       |
| 함수 표현식 |       O       |
| 함수 선언식 |       X       |

- 사실 Hoisting이 일어나지 않는 것은 아니다. **내부적으로는 모두 Hoisting이 일어나지만 TDZ로 인해** (실행 결과만 봤을 때에는 -let, const, 함수 선언식은- ReferenceError가 뜬다) **hoisting이 일어나지 않는 것 처럼 보인다**.

  ```javascript
  // 출력을 선언보다 먼저했다
  // let & const
  console.log(a); // ReferenceError: a is not defined
  console.log(b); // ReferenceError: b is not defined

  let a = "a";
  const b = "b";

  // 함수 선언식
  console.log(ff("15")); // ReferenceError: ff is not defined

  const ff = function(v) {
    // 함수 표현식
    return v;
  };
  ```

#### var보다 let, const 사용을 지향하는 이유는 Hoisting과 관련이 있다고 생각한다

- let과 const가 등장한 이래로 var보다는 let, const 사용을 지향해오고 있다. 그 이유는, 생각해보건대 **hoisting 때문인 것 같다**. var는 (for문의 예시 처럼) 종종 **예측하기 어려운 상황**을 만들 수 있다.

### 조건문

- if~ else~

```javascript
var date = new Date();
var hour = date.getHours();
if (hour < 11) {
  alert("아침");
} else if (hour < 15) {
  alert("점심");
} else {
  alert("저녁");
}
```

- switch case

```javascript
var input = Number(prompt("숫자를 입력하세요.", "숫자"));
switch (input % 2) {
  case 0:
    alert("짝수입니다.");
    break;
  case 1:
    alert("홀수입니다.");
    break;
  default:
    alert("숫자가 아닙니다.");
    break;
}
```

- 삼항 연산자

```javascript
var input = prompt("숫자 입력", "");
var number = Number(input);
number > 0 ? alert("자연수") : alert("자연수아님");
```

- 짧은 조건문

```javascript
true || alert("실행될까요?A");
false || alert("실행될까요?B");
// A는 실행되지 않고 B는 실행된다.

true && alert("실행될까요?C");
false && alert("실행될까요?D");
// C는 실행되고 D는 실행되지 않는다.
```

### 함수

#### 함수 선언문

- 구성 요소

  - 함수 이름
  - 매개변수
  - 함수 몸체
  - (optional: 반환 값)

  ```JavaScript
  function square(number) {
    return number*number;
  }
  ```

#### 함수 표현식

- 함수의 선언과 동시에 변수에 할당한다.

  ```JavaScript
  var square = function(number) {
    return number*number;
  };
  ```

- 함수가 선언될 때, 함수에 이름이 있냐 없냐에 따라 기명/익명 함수로 나뉜다.

  - 기명 함수

    ```JavaScript
    var foo = function multiply(a, b) {
      return a*b;
    };
    ```

  - 익명 함수

    ```javascript
    var bar = function(a, b) {
      return a * b;
    };
    ```

- 함수 표현식이 뭔지는 알겠는데, 굳이 왜 하는걸까? 변수 안에 함수를 넣어야 하는 이유는 무엇일까?

  - 유성이가 또 좋은 질문을 해주었다. 그동안 그저 변수에 함수를 넣기만 했지, 왜 그렇게 썼는지 고민을 해 본 적이 없었다.
  - 이유는 함수를 변수처럼 사용하기 위해서 이다. 이를테면,

  1. 다른 함수의 인자로써 사용하거나
  2. 리턴 값으로 사용하거나
  3. 변수나 객체에 할당하거나
  4. 동적으로 객체의 프로퍼티를 생성 또는 할당하거나

  - 를 하기 위해서 이다.

## 참고 자료

- JavaScript의 성장과 역사
  - https://poiemaweb.com/js-introduction
- 지금의 JavaScript
  - https://huni.org/node-js%EC%97%90-%EB%8C%80%ED%95%98%EC%97%AC-48d0a5af438b
  - https://medium.com/day34/node-js%EB%85%B8%EB%93%9C%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%B4%EA%B3%A0-%EC%96%B4%EB%96%A0%ED%95%9C%EA%B8%B0%EB%8A%A5%EB%93%A4%EC%9D%B4-%EC%9E%88%EB%8A%94%EA%B0%80-1-98e49e1100ab
- JavaScript의 변수의 타입
  - 책 - You don’t know JS 30page
- var, let, const
  - 책 - You don’t know JS 234page
- Undefined? Undefined?
  - 책 - You don’t know JS 34page
- var, let, const는 어디에 저장이 될까?
  - [[StackOverflow] Primitive value vs Reference value](https://stackoverflow.com/questions/13266616/primitive-value-vs-reference-value)
- JavaScript는 Compile 언어일까 Interpreter 언어일까?
  - [[HashCode] 자바스크립트는 컴파일언어인가요 인터프리터 언어인가요?](https://hashcode.co.kr/questions/7560/javascript-자바스크립트는-컴파일언어인가요-인터프리터-언어인가요)
  - [저스트-인-타임(JIT) 컴파일러](https://dongwoo.blog/2017/06/06/번역-저스트-인-타임jit-컴파일러-집중-코스/)
- Hoisting
  - https://asfirstalways.tistory.com/197
  - https://gmlwjd9405.github.io/2019/04/22/javascript-hoisting.html
- 조건문
  - https://www.opentutorials.org/module/570/4962
- 함수
  - https://poiemaweb.com/js-function
  - [변수 안에 함수를 넣어야 하는 이유는?](https://webclub.tistory.com/114)

# 주제

## 발표자

- 이상아

## 참여자

- 이상아, 김라희, 김주완, 안소현, 양유성



## 내용

지난 JavaScript, Front-End 발표 주제는 **this** 였지만, 공부하다 보니 실행 컨텍스트에 대한 내용이 선행되야 할 것 같아 실행 컨텍스트에 대하여 공부를 하게 되었다.



## Call Stack과 EC

![img](https://poiemaweb.com/img/ec_1.png)

```javascript
var x = 'xxx';

function foo () {
  var y = 'yyy';

  function bar () {
    var z = 'zzz';
    console.log(x + y + z);
  }
  bar();
}

foo();
```



> 저 그림은 EC가 들어있는 EC Stack이라고 한다. 그런데 콜스택이랑 굉장히 비슷한 것 같은데, 둘이 다른건가? 
>
> 같은거야. [StackOverflow의 한 유저가 같은 질문에 **둘은 같은것을 지칭하는 서로 다른 이름이라고 말해주는**](https://stackoverflow.com/questions/55140096/is-call-stack-the-same-as-execution-context-stack-in-javascript) 자료를 한번 봐봐.



즉 콜스택 안에 들어가는 것은 EC를 말한다. 그리고 **컴파일의 단위**이다. 그리고 **각 EC는 독립적**이다.



[그림 및 코드 참고](https://poiemaweb.com/js-execution-context)



## Execution Context

### EC? 그게 뭐야?

> EC는 **실행 가능한 자바스크립트 코드 블록이 실행되는 환경** 을 말한다. 
>
> -*인사이드 자바스크립트 140p*

> 실행 컨텍스트는 **Javascript 코드가 evaluate 되고, execute 되는 환경에 대한 추상적인 개념**입니다. 
>
> -*참고1*



즉 어떤 **환경**(에 대한 추상적인 개념) 이라는 것인데, 이는 코드가 잘 작동할 수 있도록 변수와 함수(모든 객체)가 가진 값을 알고 이에 대한 환경을 구성하는 것을 말한다. (아래에 보다 구체적으로 다룰 것이다)



### EC 의 3가지 종류

1. Global Execution Context (전역 실행 컨텍스트)
2. Functional Execution Context (함수 실행 컨텍스트)
3. Eval Function Execution Context (eval 실행 컨텍스트)



#### Global Execution Context (전역 실행 컨텍스트)

가장 먼저 콜스택에 올라가는 EC이다. 전역 EC는 일반적인 다른 EC들과 달리 `arguments` 객체가 없으며, 전역 객체 하나만을 포함하는 **스코프 체인**과 **`this`** 가 있다. 

그리고 전역 EC는 `<script />` 태그를 마주치면, 생성된다.



#### Functional Execution Context (함수 실행 컨텍스트)

함수가 호출될 때마다 생성되는 EC로 `arguments` 와 스코프 체인, `this` 가 있다.



#### Eval Function Execution Context (Eval 실행 컨텍스트)

`eval()` 함수를 실행해서 만들어진 EC를 말한다.



### EC는 어떻게 생기는거야?

**Creation phase(생성 단계)** 와 **Execution phase(실행 단계)** 를 거치며 생성된다. 



#### Creation phase 

> 생성 단계는 JS 엔진이 함수를 호출했지만 **실행이 시작되지 않은 단계**이다. 
>
> 생성 단계에서 JS 엔진은 **컴파일 단계**에 있으며 코드를 컴파일하기 위해 (함수를) **스캔**한다.
>
> -*참고3*

1. LexicalEnvironment 컴포넌트를 만든다.
2. VariableEnvironment 컴포넌트를 만든다.

1, 2 단계를 거친 EC는 대략적으로 아래와 같다.

```javascript
ExecutionContext = {
  LexicalEnvironment = <ref. to LexicalEnvironment in memory>,
  VariableEnvironment = <ref. to VariableEnvironment in  memory>,
}
```

각각의 단계를 자세하게 알아보자.



##### LexicalEnvironment 컴포넌트 생성

> Lexical Environment는 자바스크립트 코드에서 변수나 함수 등의 **식별자를 정의하는데 사용하는 객체**로 생각하면 쉽다. 
>
> Lexical Environment는 **식별자와 참조 혹은 값을 기록하는 `Environment Record`**와 **`outer`라는 또 다른 Lexical Environment를 참조하는 포인터**로 구성된다.
>
> `outer`는 외부 Lexical Environment를 참조하는 포인터로, 중첩된 자바스크립트 코드에서 스코프 탐색을 하기 위해 사용한다.
>
> -*참고4*

 `Environment Record` 와 `outer` 를 조금 더 이해하기 쉽게 아래 코드와 구조를 살펴보자 (물론 실제로 이렇게 단순하게 동작한다는 것은 아니지만 개념적으로 쉽게 이해할 수 있다).

```javascript
function foo() {
  const a = 1;
  const b = 2;
  const c = 3;
  function bar() {}

  // 2. Running execution context

  // ...
}

foo(); // 1. Call
```

```javascript
// Running execution context의 LexicalEnvironment

{
  environmentRecord: {
    a: 1,
    b: 2,
    c: 3,
    bar: <Function>
  },
  outer: foo.[[Environment]]
}
```



##### LexicalEnvironment 컴포넌트는 어떻게 생성될까?

LexicalEnvironment는 EC와 함께 함수의 호출 단계 중 **PrepareForOrdinaryCall** 단계에서 만들어진다. 

```
함수 호출의 3가지 단계
1. PrepareForOrdinaryCall // 이 단계에서!
2. OrdinaryCallBindThis
3. OrdinaryCallEvaluateBody
```



```javascript
/* PrepareForOrdinayCall(F, newTarget) */

callerContext = runningExecutionContext;
calleeContext = new ExecutionContext;
calleeContext.Function = F;

// 바로 여기, Execution Context를 만든 직후 Lexical Environment를 생성한다.
localEnv = NewFunctionEnvironment(F, newTarget); // 호출!

// --- LexicalEnvironment와 VariableEnvironment의 차이는 서두에 있는 링크를 참고하자.
calleeContext.LexicalEnvironment = localEnv;
calleeContext.VariableEnvironment = localEnv;

executionContextStack.push(calleeContext);
return calleeContext;
```

```javascript
/* NewFunctionEnvironment(F, newTarget) */

env = new LexicalEnvironment;
envRec = new functionEnvironmentRecord;
envRec.[[FunctionObject]] = F;

if (F.[[ThisMode]] === lexical) { // this 초기화
  envRec.[[ThisBindingStatus]] = 'lexical';
} else {
  envRec.[[ThisBindingStatus]] = 'uninitialized';
}

home = F.[[HomeObject]];
envRec.[[HomeObject]] = home; 
envRec.[[NewTarget]] = newTarget; 

env.EnvironmentRecord = envRec. // EnvironmentRecord 초기화
env.outer = F.[[Environment]]; // outer 초기화

return env;
```

즉, `NewFunctionEnvironment()` 가 `Environment Record`와 `outer`를 가진 Lexical Environment를 만들어 반환한다. 여기에 함수 환경으로 **`this`**, `super`, `new.target`등의 정보를 Environment Record에 함께 초기화했다.

즉 `this` 의 바인딩은 **이 시점** 에서 일어나는 것이다.



##### 1. `Environment Record` - 식별자 바인딩

> Environment Record는 식별자들의 바인딩을 기록하는 객체를 말한다. 간단히 말해 변수, 함수 등이 기록되는 곳이다. 
>
> 실질적으로 Declarative Environment Record와 Object Environment Record 두 종류로 생각할 수 있으며, 
>
> 이외에 조금 더 자세히 보면 Global Environment Record, Function Environment Record, Module Environment Record가 있다. 
>
> 이들은 다음과 같은 상속 관계를 갖는다.
>
> -*참고4*

```
                                           Environment Record
                                                    |
                    -----------------------------------------------------------------
                    |                               |                               |
        Declarative Environment Record     Object Environment Record     Global Environment Record
                    |
            --------------------------------
            |                              |
Function Environment Record     Module Environment Record
```

우리는 변수와 함수에 대해서 볼 것이므로, **Declarative Environment Record**와 **Object Environment Record** 를 살펴보자.

- Declarative Environment Record
  - 변수나 함수의 선언에 대한 정보가 담겨있다.
- Function Environment Record
  - 위(`NewFunctionEnvironment`)에서 언급한 `new.target`, `this`, `super` 등에 대한 정보가 담겨있다.



##### 2. Reference to the `outer` environment - 스코프 체인

`outer` 는 스코프 체인 내에서 식별자를 찾을 수 있도록 하는, **스코프 체인** 에 대한 참조 이다. 즉 `outer` 를 통해서 (스코프 체인을 따라가면서) 식별자를 찾는다.



##### 3. `this` binding

`this` 의 바인딩은 위에서 언급한 `NewFunctionEnvironment()` 에서 일어나지만, 보다 자세하게 여기서 추가로 적어보겠다.

- 전역 EC일 때

  - `this` 는 전역 객체를 나타낸다. (브라우저의 경우 `Window Object` 를 나타낸다)

- 함수 EC일 때

  - `this` 는 동적으로 바인딩 된다. (함수를 누가 호출하느냐에 따라서 this가 달라진다)
  - 왜냐하면, 엔진이 코드를 실행할 때 (전역, eval 그리고) **함수 단위로 EC를 만들어서 Call Stack에 추가**를 한다. 이 때 EC는 (LexicalEnvorionment와 더불어) `NewFunctionEnvironment()` 라는 함수로 인해 생성이 되는데, 이 때 **`this` 의 바인딩**이 일어난다. **이로 인해 함수의 `this` 는 동적으로 바인딩이 되는 것이다**.

  

```javascript
const person = {
  name: 'peter',
  birthYear: 1994,
  calcAge: function() {
    console.log(2018 - this.birthYear);
  }
}
person.calcAge(); 
// 'calcAge'가 'person' 객체를 참조하여 호출되었으므로 'this'는 'person'을 나타낸다.

const calculateAge = person.calcAge;
calculateAge();
// 'this'는 객체 참조가 없기 때문에 전역 (브라우저에서는 window) 객체를 나타낸다.
```

```javascript
/* 위 코드의 Lexical Environment를 슈도코드로 표현한다면 이렇다 */
GlobalExectionContext = {
  LexicalEnvironment: {
    EnvironmentRecord: {
      Type: "Object",
      // Identifier bindings go here
    }
    outer: <null>,
    this: <global object>
  }
}
FunctionExectionContext = {
  LexicalEnvironment: {
    EnvironmentRecord: {
      Type: "Declarative",
      // Identifier bindings go here
    }
    outer: <Global or outer function environment reference>,
    this: <depends on how function is called>
  }
}
```



##### VariableEnvironment 컴포넌트 생성

`LexicalEnvironment` 와 마찬가지로 EC내에서 식별자의 바인딩에 대한 정보를 갖고 있는다.

`LexicalEnvironment` 와의 차이점은, **`LexicalEnvironment`는 `let`, `const`에 대한 바인딩을 저장**하지만 **`VariableEnvironment`는 `var`에 대한 바인딩만 저장**한다.



#### Execution phase 

앞서 선언한 변수에 모두 할당을 하고, 코드를 실행하는 단계이다.

코드와 그림으로 보다 직관적으로 알아보자.

```javascript
let a = 20;
const b = 30;
var c;
function multiply(e, f) {
 var g = 20;
 return e * f * g;
}
c = multiply(20, 30);
```



![1](/Users/isang-a/Desktop/JavaScript/js-fe-study/LectureNote/week10/image/1.png)

이 때 a(`let`), b(`const`)와 c(`var`)의 할당된 값이 다른 이유는 `let`과 `const`는 값이 할당이 되기 전 까지 접근할 수 없도록 하기 위함이다. (`let` 과 `const` 는 할당되기 전에 사용할 경우 `ReferenceError` 가 나는 이유와도 같다)



![2](/Users/isang-a/Desktop/JavaScript/js-fe-study/LectureNote/week10/image/2.png)

![3](/Users/isang-a/Desktop/JavaScript/js-fe-study/LectureNote/week10/image/3.png)

![4](/Users/isang-a/Desktop/JavaScript/js-fe-study/LectureNote/week10/image/4.png)

![5](/Users/isang-a/Desktop/JavaScript/js-fe-study/LectureNote/week10/image/5.png)



![6](/Users/isang-a/Desktop/JavaScript/js-fe-study/LectureNote/week10/image/6.png)

## 참고자료

https://blog.bitsrc.io/understanding-execution-context-and-execution-stack-in-javascript-1c9ea8642dd0

[https://velog.io/@imacoolgirlyo/JS-자바스크립트의-Hoisting-The-Execution-Context-호이스팅-실행-컨텍스트-6bjsmmlmgy]([https://velog.io/@imacoolgirlyo/JS-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-Hoisting-The-Execution-Context-%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85-%EC%8B%A4%ED%96%89-%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8-6bjsmmlmgy](https://velog.io/@imacoolgirlyo/JS-자바스크립트의-Hoisting-The-Execution-Context-호이스팅-실행-컨텍스트-6bjsmmlmgy))

https://hackernoon.com/execution-context-in-javascript-319dd72e8e2c

https://meetup.toast.com/posts/129

https://poiemaweb.com/js-execution-context

책 인사이드 자바스크립트


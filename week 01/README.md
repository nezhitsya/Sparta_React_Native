# 앱개발 종합반 - 1주차

### [수업 목표]
1. 앱의 기본적인 동작 구조
2. 하이브리드 앱과 React Native
3. Javascript 기초 문법
4. Javascript 연습

## 01. 1 주차
- 앱 서비스의 기본 동작 구조 : **클라이언트와 서버** <br>
**클라이언트** : 사용자가 보는 화면 <br>
**서버** : 데이터가 있는 곳

- 앱
**네이티브 앱** : 안드로이드, iOS 각각 개빌 <br>
**하이브리드 앱** : 웹 사이트를 만들고 껍데기를 씌워 배포 <br>
**크로스 플랫폼 앱** : 네이티브 앱과 하이브리드 앱의 장점

- 리액트 네이티브 (React Native)
크로스 플랫폼 앱 개발 언어 중 하나 (React.js 라이브러리 / 프레임워크 기반 앱 제작)

## 02. 필수 프로그램 설치
- [Visual Studio Code](https://code.visualstudio.com)
- [안드로이드 스튜디오](https://developer.android.com/studio/)
- [XCode](https://apps.apple.com/kr/app/xcode/id497799835?mt=12)
- [node, npm](https://nodejs.org/download/release/v12.19.1/node-v12.19.1.pkg)

Node.js로 자바스크립트 개발 환경 구축
NPM으로 필요한 자바스크립트 앱 개발도구를 가져와 사용

## 03. Javascript 준비
크롬 개발자 콘솔 (option + command + i)

## 04. Javascript 기초 문법 1

```
1. 코드 마지막 ";" 선택 작성 가능
2. 변수 선언 시 let, var 동일 기능 (본 수업에서는 let 사용)
3. 딕셔너리 == 객체
4. 배열 == 리스트
```

**변수**
- let으로 변수 선언
- 사칙연산 & 문자열 더하기 가능
- 변수명
```javascript
let first_name = 'bob' // snake case
let firstName = 'bob' // camel case
```
- const로 변수 선언
```javascript
let value_box = 'value'
value_box = 'changed value'
console.log(value_box) // changed value

const value_fix = 'value'
value_fix = 'changed value'
console.log(value_fix) // error. const로 선언한 변수 새로운 값 재 할당 불가
```

## 05. Javascript 기초 문법 2
- 리스트(배열 Array) & 딕셔너리(객체)
**리스트** : 순서를 지켜 가지고 있는 형태
```javascript
let a_list = [] //리스트 선언
let b_list = [1, 2, 'hey', 3] // 리스트 선언
b_list[1] // 2
b_list.push('hi') // 리스트에 요소 추가
b_list // [1, 2, 'hey', 3, 'hi']
b_list.length // 리스트 길이. 5
```
**딕셔너리** : key - value 값의 묶음
```javascript
let a_dict = {} // 딕셔너리 선언
let b_dict = {'name':'Bob', 'age':21} // 딕셔너리 선언
b_dict['name'] // Bob
b_dict.name // Bob
b_dict['height'] = 180 // key:value 삽입
b_dict // {name:'Bob', age:21, height:180}
```
**리스트 & 딕셔너리**
```javascript
names = [{'name':'Bob', 'age':21}, {'name':'carry', 'age':22}] // names[1]['name'] = carry
new_name = {'name':'john', 'age':7}
names.push(new_name) // [{'name':'Bob', 'age':21}, {'name':'carry', 'age':22}, {'name':'john', 'age':7}]
```
**JSON** : 리스트와 딕셔너리가 복합적으로 존재하는 데이터 구조

## 06. Javascript 기초 문법 3
- 기본 제공 함수
- 함수
기본 생김새
```javascript
function 함수이름(필요한 변수) {
    내릴 명령 순차 작성
}
// 사용
함수이름(필요한 변수)
```
또다른 함수 선언 방식
```javascript
// 리터럴 방식
let a = function() {
    내릴 명령 순차 작성
}
a()
```

## 07. Javascript 기초 문법 4
- 조건문
```javascript
function is_adult(age) {
    if (age > 20) {
        alert('성인')
    } else if (age > 10) {
        alert('청소년')
    } else {
        alert('10살 이하')
    }
}

is_adult(12) // 청소년
```
**AND 조건 & OR 조건**
```javascript
function is_adult(age, sex) {
    if (age > 65 || age < 10) {
        alert('65 세 초과 또는 10 세 미만')
    } else if (age > 20 && sex == '여') {
        alert('성인 여성')
    } else if (age > 20 && sex == '남') {
        alert('성인 남성')
    } else {
        alert('청소년')
    }
}

is_adult(25, '여') // 성인 여성
```

- 반복문
```javascript
for (시작조건; 반복조건; 더하기) {
    매번 실행
}
```
딕셔너리 + 리스트 + 반복문
```javascript
for (let i = 0; i < score.lenght; i++) {
    if (scores[i]['score'] < 70) {
        console.log(scores[i]['name']) // 점수가 70 점 미만인 사람들의 이름 출력
    }
}
```

## 08. Javascript 기초 연습
- 합을 구하는 함수
```javascript
function get_sum(n) {
    let sum = 0
    for (let i = 0; i < n; i++) {
        sum += i
    }
    return sum
}

let result = get_sum(10)
console.log(result) // 45
```

- 배열에서 특정 원소 갯수
```javascript
let fruit_list = ['사과','감','감','배','포도','포도','딸기','포도','감','수박','딸기']
let count = 0

for (let i = 0; i < fruit_list.length; i++) {
    let fruit = fruit_list[i]
    if (fruit == '딸기') {
        count += 1
    }
}
console.log(count) // 2
```

- JSON 형태(딕셔너리 + 리스트)에서 조건에 해당하는 값 출력
```javascript
let mise_list = [{MSRSTE_NM:"구이름", IDEX_MVL:31}, ...]

for (let i = 0; i < mise_list.lenght; i++) {
    let mise = mise_list[i]
    if (mise["IDEX_MVL"] < 40) {
        let gu_name = mise["MSRSTE_NM"]
        let gu_mise = mise["IDEX_MVL"]
        console.log("40보다 작은 구: " + gu_name + ", " + gu_mise)
    }
}
```

## 09. 앱개발 Javascript 1
- 화살표 함수 (Arrow Function)
```javascript
let a = () => {
    console.log("arrow function")
}
a()
```

- 비구조 할당
```javascript
let blog = {
    owner: 'noah',
    ulr: 'aaa.naver.com',
    getPost() {
        console.log("ES6 문법 정리")
    }
}

// 기존 할당 방식
let owner = blog.owner
let getPost = blog.getPost()

// 비구조 할당 방식
let { owner, getPost } = blog
```
비구조 할당 방식으로 전달된 딕셔너리 값 가져오기
```javascript
let blogFunction = ({owner, url, getPost}) => {
    console.log(owner)
    console.log(url)
    console.log(getPost())
}

blogFunction(blog)
```

## 10. 앱개발 Javascript 2
- 리터럴
백틱(`)을 이용해 문자열을 + 기호 없이 간단히 처리
```javascript
const id = "myid"
const url = `http://blog.naver.com/login/${id}`
const message = `줄 바꿈

가능`
```

- 객체 리터럴
```javascript
var name = "sparta"
var job = "developer"

var user = {
    name,
    job
}

console.log(user) // {name: "sparta", job: "developer"}
```

## 11. 앱개발 Javascript 3
- map : 반복문의 또 다른 방식
```javascript
let numbers = [1, 2, 3, 4, 5, 6, 7]

 numbers.map((value, i) => {
     console.log(value, i)
 })
// 같은 방식
 numbers.map(function(value, i) {
     console.log(value, i)
 })

 // 1 0
 // 2 1
 // 3 2
 // 4 3
 // 5 4
 // 6 5
 // 7 6
```

- module system
특정 파일에서 정의한 값, 함수, 또는 딕셔너리를 다른 자바스크립트 파일에서 불러 사용 - 모듈 시스템
**export** : 값, 함수, 딕셔너리, 자바스크립트 파일 자체를 외부로 내보내는 키워드
**import** : 자바스크립트 파일 안으로 가져오는 키워드

```javascript
// util.js
export function times(x) {
    return x * x
}
export function plusTwo(number) {
    return number + 2
}

// index.js
import { times, plusTwo } from './util.js'

console.log(times(2))
console.log(plusTwo(3))
```

**export default**
```javascript
// utils.js
export default function times(x) {
    return x * x
}

// app.js
import k from './util.js' // times를 k라는 이름으로 import
console.log(k(4)) // 16
```
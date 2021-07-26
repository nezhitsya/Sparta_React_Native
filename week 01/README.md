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

**딕셔너리** : key - value 값의 묶음



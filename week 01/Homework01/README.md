# [Javascript 복습](https://velog.io/@nezhitsya/스파르타-코딩-클럽-개발일지-1-7by1sig7)

## map 함수
- 반복문의 또 다른 방식
- 리스트 길이 값을 몰라도 된다.
- for문과는 반대로 리스트 안에서 몇 번째에 있는 값인지 순서를 알려준다.

```javascript
리스트명.map((변수명) => {
    if (변수명 == ' ')
    ...
})
```

## indexOf
- 기본 제공 함수
- 특정 문자의 위치 찾는 함수
- 찾는 문자열이 없으면 -1 리턴

```javascript
// 찾는 문자열이 없으면 -1을 리턴
if (email.indexOf('@' < 0) {
    console.log("이메일이 아닙니다.")
}
```

## 정규식
- 문자열에 나타나는 특정 문자 조합과 대응시키기 위해 사용되는 패턴
- 정규 표현식 또한 객체
- exec, text, match, replace, search, split 메소드와 함께 사용

**search** : 검색된 문자열의 위치값 반환 <br>
**test** : 찾는 문자열이 들어있는지 아닌지 true / false 반환 <br>
**replace** : 문자열의 일부를 다른 문자열로 변환

```javascript
// 이메일 정규식
var emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
```
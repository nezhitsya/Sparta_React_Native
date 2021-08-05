# 앱개발 종합반 - 4 주차

### [수업 목표]
1. 앱과 서버
2. 서버리스
3. 파이어베이스를 이용한 서버 구셩

## 01. 4 주차
**파이어베이스** : 서버리스를 제공해주는 서비스

## 02. 앱에서의 서버
동작 방식
- 서버가 정한 규칙에 따라 대화 요청(Request)
- 정한 규칙에 따라 요청을 하면 응답(Response)을 수신
- 서버가 정한 규칙 = **API (Application Programming Interface)**
   - 규칙 형태는 도메인 / 함수 등 다양한 형태
   ```
   // 도메인 형식
   www.sparta.com/getdata // 데이터 조회 API
   www.sparta.com/setdata // 데이터 저장 API

   // 함수 형식
   db.ref('/like/').on('value') // 데이터 조회 API
   db.ref('/like/').on(new_like) // 데이터 저장 API
   ```

- 서버에서 앱에 데이터 전송 시 JSON 형태
- JSON 형태 : 리스트와 딕셔너리의 복합 구조
- 데이터 준비 시점
1. 앱 화면이 그려진 후 데이터 준비 (useEffect : 앱 화면을 보자마자 실행되어야 할 작업)

```javascript
useEffect(()=>{
  //서버 API 사용
  //이 화면에서 사용 할 데이터 준비 등
},[])
```

2. 앱에서 사용자가 저장 버튼을 누른 시점

## 03. 서버 외부 API 01
- 서버 API : 서버가 제공하는 도메인을 그대로 사용하는 방식

1. 현재 위치(좌표) 데이터 가져오기
2. 위치 데이터를 이용해 현재 위치 날씨 데이터 가져오기

앱 위치 정보 권한 설정

```
expo install expo-location
```

라이브러리

```javascript
import * as Location from 'expo-location';
```

위치 가져오기

```javascript
const getLocation = async () => {
    // 외부 API 요청 작업은 try / catch 사용
    try {
        // 함수 실행 순서 지정 asyns / await
        await Location.requestPermissionsAsync()
        const locationData = await Location.getCurrentPositionAsync()
    } catch (error) {
        Alert.alert("위치를 찾을 수 없습니다.", "다시 실행해주세요.")
    }
}

useEffect(() => {
    setTimeout(() => {
        navigation.setOptions({
            title: '나만의 꿀팁'
        })
        let tip = data.tip
        setState(tip)
        setCateState(tip)
        setReady(false)
        getLocation()
    }, 1000)
}, [])
```

- async / await
외부 API 호출 및 기기에 대한 정보 / 파일 등에 접근할 때 사용하는 키워드
함수 실행 순서 고정을 위해 사용 (**비동기** 특징 때문)

```javascript
const func = async function() {
    await function01()
    await function02()
}

const func = async () => {
    await function01()
    await function02()
}

async function func() {
    await function01()
    await function02()
}
```

## 04. 서버 외부 API 02
**axios** : 서버가 제공하는 도메인 형식의 API를 사용하기 위한 도구

```
yarn add axios
```

라이브러리

```javascript
import axios from 'axios';
```

```javascript
const getLocation = async () => {
    try {
        await Location.requestPermissionsAsync()
        const locationData = await Location.getCurrentPositionAsync()
        const latitude = locationData['coords']['latitude']
        const longitude = locationData['coords']['longitude']
        const API_KEY = "cfc258c75e1da2149c33daffd07a911d"
        const result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
        const temp = result.data.main.temp
        const condition = result.data.weather[0].main

        setWeather({
            temp, condition
        })
    } catch (error) {
        Alert.alert("위치를 찾을 수 없습니다.", "다시 실행해주세요.")
    }
}

...
<Text style={styles.weather}>오늘의 날씨 : {weather.temp + " °C " + weather.condition}</Text>
...
```

<p align="center">
  <img width="300" src="">
</p>

## 05. 서버리스 (serverless)
**서버리스** : 서버가 없다는 뜻이 아닌, 서버를 직접 만들 필요가 없는 것을 말한다.

## 06. Firebase
**Firebase** : 구글에서 만든 서버리스 서비스 <br>
**[Firebase 프로젝트 생성](https://firebase.google.com/?hl=ko)**

## 07. Firebase 연결
웹 앱 선택 (호스팅 선택 X)

Firebase 연결 expo 도구 설치

```
// node 버전 14 이상은 firebase 설치 시 오류 발생
// Node.js 제거 후 v12 재설치 진행 필요
expo install firebase
```

```javascript
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

//파이어베이스 사이트에서 봤던 연결정보
// 프로젝트 설정 > SDK 설정 및 구성 > CDN이 아니라 구성 선택 > 복사
const firebaseConfig = {
    ...
    // realtime database 시작 후 url 복사
    databaseURL: "..."
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const firebase_db = firebase.database()
```

## 08. File Storage
- 파일 저장소
- 이미지 및 사용할 파일 업로드 후 필요할때 꺼내 쓰는 용도로 사용

## 09. Realtime Database
- 리스트, 딕셔너리 구조, 즉 JSON 형태로 저장 / 관리되는 데이터베이스 서비스
- Firebase에서 제공해주는 함수들을 이용하여 데이터 저장 / 수정 / 삭제
- 플랫폼과 실시간 데이터를 주고 받는 것에 특화
- 이미지 저장 > File Storage
- JSON 데이터 > Realtime Database

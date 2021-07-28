# 앱개발 종합반 - 2 주차

### [수업 목표]
1. 리액트 네이티브(기술) & Expo(도구) 소개 및 설치
2. 앱 화면 구현
3. 앱개발 Javascript

## 01. 2 주차
- 리액트 네이티브 앱 개발을 더 편하고 쉽게 도와주는 Expo라는 도구로 앱 개발 진행
- 화면 그리는 법
    - 구역(레이아웃)을 잡는 문법 언어 = **JSX**
    - 화면 구역 <View> 태그. 글자 <Text> 태그 등

## 02. 리액트 네이티브 & Expo
- 리액트 네이티브 = 리액트 (React) + 네이티브 (Native)
- 자바스크립트 언어 하나로 안드로이드, iOS 두 가지 앱 모두 만들어주는 라이브러리
- Expo는 안드로이드, iOS 코드를 건드려야 하는 상황에서 도와주는 툴
- 개발 중인 앱을 쉽게 확인해주는 앱 제공 (Expo 클라이언트 앱)

[iOS 클라이언트 앱](https://apps.apple.com/app/apple-store/id982107779) <br>
[안드로이드 클라이언트 앱](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www)

## 03. 리액트 네이티브 & Expo 설치
- [Node & NPM 설치](https://nodejs.org/download/release/v12.19.1/node-v12.19.1.pkg)
- Yarn
```
// npm보다 가볍고 빠르게 자바스크립트 패키지 관리 자바스크립트 패키지 매니저 툴
npm install -g yarn
```
- Expo 명령어 도구 설치
```
sudo npm install -g expo-cli

// npm : 노트 패키지 매니저 명령 실행
// -g : 컴퓨터 전역적 설치
// expo-cli : 설치할 패키지 이름
```
- [Expo 가입](https://expo.io/signup) 및 로컬에 Expo 계정 세팅
```
expo login --username "Expo 사이트 가입당시 입력 name"
패스워드 입력
```

## 04. Expo 실행
```
expo init 폴더명
blank 타입 앱 선택
cd 폴더명
expo start (Expo 서버 On) <> command + c (Expo 서버 Off)
```
- **Run on Android device / emulator** : 컴퓨터와 USB로 연결된 안드로이드 휴대폰 또는 안드로이드 시뮬레이터로 Expo 앱 실행
- **Run on iOS simulator** : 설치한 iOS 시뮬레이터로 Expo 앱 실행
- **Run in web browser** : 작성중인 Expo 앱을 브라우저에서 확인하는 버튼
- **Send link with email** : 개발중인 Expo 앱 링크를 통해 Expo 클라이언트 앱으로 개발중인 앱 확인
- **Public or republic project** : 앱을 Expo 공식 사이트에 업로드. 공식 사이트 배포 시, 안드로이드용 APK 파일, iOS용 ipa 파일 빌드하여 다룬로드 가능

시뮬레이터 : 가상의 휴대폰을 컴퓨터에 띄워놓는 것
- 안드로이드 스튜디오 or XCode 설치
1. 안드로이드 스튜디오 > Configure의 SDK Manager 선택
2. SDK Platform에서 Android 최신 버전 선택 > Apply 설치
3. SDK Tools에서 4 항목 체크 후 설치
- Android SDK Build-Tools 30
- Android Emulator
- Android SDK Platform-Tools
- Intel x86 Emulator Accelerator (HAXM installer)
4. AVD Manager에서 Create Virtual Device 선택
5. 가장 최신의 안드로이드 버전 선택
```
expo start --android
```

1. XCode > preference > Location > command line tools에 XCode 버전 선택 확인
2. Open Developer Tool > 시뮬레이터 설정 화면 확인
3. 해당 시뮬레이터 화면에서 원하는 시뮬레이터 설치
```
expo start --ios
```

- 기본 폴더 구조
<img width="700" src="https://user-images.githubusercontent.com/60697742/127077190-410ce1ab-97e5-4f65-b999-f6d0c6c19e74.png">

**assets** : 앱이 동작되고 서비스되는데에 기본적으로 가지고 있는 이미지 및 아이콘 파일을 담는 폴더 <br>
**node_modules** : 라이브러리 저장 장소 <br>
**App.js** : 리액트 네이티브 앱이 시작되는 출발선 및 진입점 <br>
**app.json** : 앱의 이름, 출시 버전, 아이콘, 스플래시 스크린, 광고 설정 등 앱이 가지는 기본 정보 설정 파일

## 05. JSX 문법
```javascript
// 리액트, 리액트 네이티브, 엑스포 라이브러리에서 꺼내 사용할 기능들을
// 이렇게 앞으로도 상단에 선언한다음 가져다 사용
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// App.js는 App 함수를 내보내기 하고 있는 자바스크립트 파일
// 이 함수는 무언가?를 반환하고 있는데 결국 화면을 반환
export default function App() {
    // 화면을 반환
	// HTML 태그 같이 생긴 이 문법은 JSX라 불리우며 실제 화면을 그리는 문법
	
    // 경고창 없애기
    console.disableYellowBox = true;

    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    );
}

// styles 변수 이름 답게 화면을 그려주는, JSX문법을 꾸며주는 내용
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
```

## 06. JSX 기본 문법
- **return**은 작성한 JSX 문법으로 구성된 화면을 앱상에서 보여주는 역할
- **rendering**(렌더링)은 JSX 문법을 화면에 그려주는 행위
- JSX < > **태그** < > </ > **엘리면트**

1. 모든 태그는 가져와서 사용
```javascript
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
```

2. 태그는 항상 닫는 태그와 자체적으로 닫는 태그 구분해서 사용
```javascript
export default function App() {
  return (
		//<View>는 결국 두번째 줄 밑에 </View>로 닫히면서 본인 영역을 갖는다 
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
			//statusBar는 본인 스스로 닫는 태그이므로 다음과 같이 사용이 가능합니다.
      <StatusBar style="auto" />
    </View>
  );
}
```

3. 모든 엘리먼트는 감싸는 최상위 엘리먼트 존제 (엘리먼트는 곧 태그 <>)
```javascript
//App.js가 렌더링 하고 엘리먼트는 결국
//Text와 StatusBar엘리먼트를 감싸고 있는 View
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
```

4. return애 의해 렌더링 될 땐 항상 소괄호로 감싼다.
5. JSX 문법 밖에서의 주석과 안에서의 주석은 다르다.
```javascript
//JSX밖에서의 주석
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//JSX밖에서의 주석
export default function App() {
	//JSX밖에서의 주석
  return (
		//JSX 밖에서의 주석
    <View style={styles.container}>
			{/*
				JSX 문법 안에서의 주석
			*/}
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
```

## 07. View, Text, ScrollView
**<View></View>** <br>
화면의 영역(레이아웃)을 잡아주는 엘리먼트
View 엘리먼트로 원하는 대로 화면 분할 가능 (StyleSheet와 같이 사용)

**Text** <br>
앱에 글을 작성하기 위해 사용하는 엘리먼트

**ScrollView**<br>
앱 화면을 벗어나는 영역의 경우 ScrollView 엘리먼트로 감싸면 스크롤이 가능
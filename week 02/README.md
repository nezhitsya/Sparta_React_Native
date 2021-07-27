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

[iOS 클라이언트 앱](https://apps.apple.com/app/apple-store/id982107779)
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
**assets** : 앱이 동작되고 서비스되는데에 기본적으로 가지고 있는 이미지 및 아이콘 파일을 담는 폴더
**node_modules** : 라이브러리 저장 장소
**App.js** : 리액트 네이티브 앱이 시작되는 출발선 및 진입점
**app.json** : 앱의 이름, 출시 버전, 아이콘, 스플래시 스크린, 광고 설정 등 앱이 가지는 기본 정보 설정 파일

## 05. JSX 문법

# 앱개발 종합반 - 5 주차

### [수업 목표]
1. 수익형 앱
2. 구글 광고, 애드몹 적용
3. 배포

## 01. 5 주차
구글 광고 플랫폼을 이용한 수익 창출

## 02. 수익 창출 방식
- 앱 마켓에 유료앱 배포 수익 모델
- 앱 내 배너 광고 수익 모델
   - 배너 클릭
   - 배너 광고 시청
   - 배너 광고 사용자 참여
- 앱 콘텐츠 판매 수익 모델 (인 앱 결제)
- 구독 수익 모델
- 앱 개발 용역 수익 모델
- 외부 브랜드 광고 수익 모델

## 03. 애드몹 (AdMob) - 설정
AdMob : 앱 내 구글 배너광고를 쉽게 붙일 수 있으며 수익 현황 알림 및 일정 수익 이상 시 환전 가능

<img width="700" src="https://user-images.githubusercontent.com/60697742/128660286-3dc2be66-ed85-4706-ab75-fa82d18b6eb1.png">

```
expo install expo-ads-admob
```

app.json 수정

```
"ios": {
   "supportsTablet": true,
   "buildNumber": "1.0.0",
   "bundleIdentifier": "com.example.practice01",
   "config": {
      "googleMobileAdsAppId": ""
   }
},
"android": {
   "package": "com.example.practice01",
   "versionCode": 1,
   "config": {
     "googleMobileAdsAppId": ""
   },
   "adaptiveIcon": {
      "foregroundImage": "./assets/adaptive-icon.png",
      "backgroundColor": "#FFFFFF"
   }
},
```

## 04. 애드몹 (AdMob) - 가로 배너
1. 애드몹 가로 배너 광고 단위 설정
2. 앱 상에 적용

라이브러리

```javascript
import {
   setTestDeviceIDAsync,
   AdMobBanner,
   AdMobInterstitial,
   PublisherBanner,
   AdMobRewarded
} from 'expo-ads-admob';
```

배너 광고 삽입 - AdMobBanner

```javascript
{
   Platform.OS === 'ios' ? (
      <AdMobBanner
         bannerSize='fullBanner'
         servePersonalizedAds={true}
         adUnitID="ca-app-pub-5747612504152276/3005792623"
         style={styles.banner}
      />
   ) : (
      <AdMobBanner
         bannerSize='fullBanner'
         servePersonalizedAds={true}
         adUnitID="ca-app-pub-5747612504152276/3005792623"
         style={styles.banner}
      />
   )
}
```

## 05. 애드몹 (AdMob) - 전면 배너

라이브러리

```javascript
import {
   setTestDeviceIDAsync,
   AdMobBanner,
   AdMobInterstitial,
   PublisherBanner,
   AdMobRewarded
} from 'expo-ads-admob';
```

전면 배너 삽입 - AdMobInterstitial

```javascript
useEffect(() => {
   Platform.OS === 'ios' ? AdMobInterstitial.setAdUnitID("") : AdMobInterstitial.setAdUnitID("")

   AdMobInterstitial.addEventListener("interstitialDidLoad", () => console.log("interstitialDidLoad"))
   AdMobInterstitial.addEventListener("interstitialDidFailToLoad", () => console.log("interstitialDidFailToLoad"))
   AdMobInterstitial.addEventListener("interstitialDidOpen", () => console.log("interstitialDidOpen"))
   AdMobInterstitial.addEventListener("interstitialDidClose", () => { 
      console.log("interstitialDidClose")
      navigation.navigate('DetailPage', {idx: content.idx})
   })
}, [])

const goDetail = async () => {
   await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true})
   await AdMobInterstitial.showAdAsync()
}
```

## 06. 배포하기 - 배포 체크리스트

1. 앱 로고
2. 스플래시 스크린 (앱 시작 초기 화면)
3. 마켓에 올릴 설명 이미지

## 07. 배포하기 - 스플래시 스크린
[온라인 포토샵](https://pixlr.com/kr/x/)

## 08. 베포하기 - 로고

## 09. 배포하기 - 최종 앱 파일 생성
1. Expo를 통한 최종 앱 파일 생성
2. 구글 플레이 개발자 라이센스 가입 및 구입
3. 구글 플레이 스토어에 앱 배포

app.json "android"

```
"permissions": ["ACCESS_FINE_LOCATION", "ACCESS_COARSE_LOCATION"]
```

안드로이드앱 빌드 명령어

```
expo build:android

// apk 파일 선택
```

구글 플레이 스토에 접속 및 가입
[구글 플레이 스토어](https://developer.android.com/distribute/console?hl=ko)

구글 앱 개발자 라이센스 구매 - 25 달러

## 10. 배포하기 - 참고자료

[개인정보 처리 방침](https://www.privacy.go.kr/a3sc/per/inf/perInfStep01.do)

android 배포 과정
1. Expo 로 앱 개발 및 최종 앱 파일 생성 / 업로드
2. Expo 사이트에서 최종 앱 파일 다운로드
3. 구글 플레이스토어 개발자 가입
4. 앱 파일 등록
5. 앱 관련 정보 기입
6. 앱 파일 등록 단계로 돌아와 배포

ios 배포과정
1. 애플 개발자 계정 가입 및 라이센스 구매 - [애플 개발자 센터](https://developer.apple.com/)
2. 빌드: ipa 생성 및 앱 스토어 배포 중 알림

```
expo build:ios
// 1. 추가 인증 코드 입력
// 2. 인증키 생성 - Expo에 위임
```

3. 개발중인 앱 선택 및 작업 공간 활서오하
4. 프랜스포터로 앱 파일 앱스토어로 전송 - 트랜스포터 다운로드 필요
5. 이미지 및 회종 정보 등록 후 승인 요청
- [이미지 권고사항](https://help.apple.com/app-store-connect/#/devd274dd925)

## 11. Tips
단독의 컴포넌트 (isolated components)를 사용하여 UI 구현 권장

#### 1. [NativeBase](https://github.com/GeekyAnts/NativeBase)
네이티브 서드파티 라이브러리 기본 사용 가능

#### 2. [React Native Elements](https://github.com/react-native-training/react-native-elements)
cross-platform UI toolkit

#### 3. [Shoutem](https://shoutem.github.io/ui/)
UI 컴포넌트, 테마, 컴포넌트 애니메이션 세 부분으로 구성된 React Native UI Kit

#### 4. [UI Kitten](https://github.com/akveo/react-native-ui-kitten)
스타일 정의를 특정 위치로 이동시켜 컴포넌트를 재사용 및 단일방식으로 스타일화
사용자 정의 및 재사용 가능한 react-native component kit

#### 5. [React Native Material UI](https://github.com/xotahal/react-native-material-ui)
Google's material design을 맞춤 설정할 수 있는 UI 컴포넌트 세트 제공

#### 6. [React Native Material Kit](https://github.com/xinthink/react-native-material-kit)
Google MD 구현하는 기본적인 UI 컴포넌트 및 테마 제공

#### 7. [Nachos UI](https://github.com/nachos-ui/nachos-ui)
사용자 정의 가능한 컴포넌트 제공
웹에서 작동 가능

#### 8. [React Native UI Library](https://github.com/wix/react-native-ui-lib)
색상, 타이포그래피, 그림자, 테두리 반경 등 미리 정의된 스타일 설정 제공

#### 9. [React Native Paper](https://github.com/callstack/react-native-paper)
bundle-size를 줄이기 위한 babel-plugin과 material design 가이드 라인을 따르는 크로스 플랫폼 UI 컴포넌트 라이브러리

#### 10. [Expo Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
NavBar / TabBar / ToolbarAdroid, 이미지 등 스타일링 지원 맞춤형 아이콘 세트

#### 11. [Teaset](https://github.com/rilyu/teaset)
순수 JS(ES6) 컴포넌트와 반응하는 UI 라이브러리
콘텐츠 표시 및 동작 제어에 중점

#### 12. ETC

[기타 라이브러리 참고](https://github.com/jondot/awesome-react-native)

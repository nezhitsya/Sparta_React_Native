# 앱개발 종합반 - 3 주차

### [수업 목표]
1. 리액트 기초 공부
2. 기능 적용
3. 앱 상의 페이지 구성

## 01. 3 주차
- 리액트 : 컴포넌트 (Compoent), 상태 (State, useState), 속성 (Props), useEffect
- 링크 화면 전환
- 페이지 기능

## 02. 화면 구현 준비
- 딕셔너리 형태로 키 값에 접근해서 값 도출 or 문자열 삽입

## 03. 화면 구현

<p align="center">
  <img width="300" src="https://user-images.githubusercontent.com/60697742/127589018-50141af5-3f00-4d52-8a6a-5fcc91369cc2.png">
</p>

```javascript
export default function DetailPage() {

    const tip = {
        "idx": 9,
        "category":"재테크",
        "title":"렌탈 서비스 금액 비교해보기",
        "image": "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Frental.png?alt=media&token=97a55844-f077-4aeb-8402-e0a27221570b",
        "desc":"요즘은 정수기, 공기 청정기, 자동차나 장난감 등 다양한 대여서비스가 활발합니다. 사는 것보다 경제적이라고 생각해 렌탈 서비스를 이용하는 분들이 늘어나고 있는데요. 다만, 이런 렌탈 서비스 이용이 하나둘 늘어나다 보면 그 금액은 겉잡을 수 없이 불어나게 됩니다. 특히, 렌탈 서비스는 빌려주는 물건의 관리비용까지 포함된 것이기에 생각만큼 저렴하지 않습니다. 직접 관리하며 사용할 수 있는 물건이 있는지 살펴보고, 렌탈 서비스 항목에서 제외해보세요. 렌탈 비용과 구매 비용, 관리 비용을 여러모로 비교해보고 고민해보는 것이 좋습니다. ",
        "date":"2020.09.09"
    }

    const popup = () => {
        Alert.alert("POPUP!")
    }

    return (
        <ScrollView style={styles.container}>
            <Image style={styles.mainImage} source={{uri: tip.image}} resizeMode="cover" />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{tip.title}</Text>
                <Text style={styles.desc}>{tip.desc}</Text>
                <TouchableOpacity style={styles.button} onPress={() => popup()}>
                    <Text style={styles.buttonText}>찜하기</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
```

## 04. 컴포넌트
- **컴포넌트 (Component)** : 정해진 엘리먼트(요소)를 사용하여 만든 화면의 일부분
- **상태 (State)** : 컴포넌트에서 데이터를 유지하고 관리하기 위한 유일한 방법
- **속성 (Props)** : 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달하는 방식
- **useEffect** : 화면에 컴포넌트가 그려지면 처음 실행해야 하는 함수들을 모아두는 곳

- MainPage 컴포넌트화

**MainPage**

```javascript
// 라이브러리
import Card from '../components/Card';
...
<View style={styles.textContainer}>
    {
        tip.map((content, i) => {
            return (
                <Card content={content} key={i} />
            )
        })
    }
</View>
```

**Card component**

```javascript
export default function Card({content}) {

    return (
        <View style={styles.card}>
            <Image style={styles.cardImage} source={{uri:content.image}} />
            <View style={styles.cardText}>
                <Text style={styles.cardTitle}>{content.title}</Text>
                <Text style={styles.cardDesc} numberOfLines={3}>{content.desc}</Text>
                <Text style={styles.cardDate}>{content.date}</Text>
            </View>
        </View>
    )
}
```

## 05. 속성 (Props)
- **속성** : 컴포넌트에 데이터 전달. key & value 형태
    - ex. Text 태그의 numberOfLines 속성
    - ex. Image 태그의 resizeMode 속성

1. 컴포넌트에 속성(떼이터)을 부여해 전달 시, key & value (content={content}) 형태로 전달
2. 컴포넌트 반복문 수행 시, map에서 나오는 인덱스(i)를 key={i} 속성 전달 형태로 삽입

MainPage.js에서의 Card.js 컴포넌트

```javascript
<View style={styles.textContainer}>
    {
        tip.map((content, i) => {
            return (
                <Card content={content} key={i} />
            )
        })
    }
</View>
```

Card.js에서의 속성 값

```javascript
export default function Card({content})
...
<Image style={styles.cardImage} source={{uri:content.image}} />
...
```

**비구조 할당 방식** <br>
- 딕셔너리에서 키 값을 바로 취해 변수로써 함수 안에서 즉시 사용할 수 있는 방식

## 06. 상태 (useState) & useEffect
- **상태 (State, useState)** : 컴포넌트에서 보유 / 관리되는 데이터
- useSate로 생성 setState 함수로 정 / 변경

```javascript
// 사용자 화면 (UI)은 컴포넌트 (component)에 어떤 데이터 (state)가 주입되고 변경되냐에 따라 변화
UI = component(state)
```

- **useEffect** : 화면이 그려진 후 가장 먼저 실행되는 함수

```javascript
useEffect(() => {
    // 화면이 그려진 다음 가장 먼저 실행되야 할 코드
} [])
```

1. 화면 생성
2. useEffect가 데이터 준비 (state에 useState를 이용하여 업데이트)
3. 상태 데이터 업데이트 후 화면 다시 생성

## 07. 컴포넌트와 상태를 이용한 로딩화면
화면이 그려질때 데이터 준비하는 동안 로딩화면으로 대체

```javascript
const [state, setState] = useState([])
const [ready, setReady] = useState(true)

useEffect(() => {
    setTimeout(() => {
        setState(data)
        setReady(false)
    }, 1000)
}, [])

return ready ? <Loading /> : (
    ...
)
```

1. ready라는 새로운 상태값 추가 (상태값은 컴포넌트 안에 여러개 존재 가능)
2. ready 값이 true이므로 return 구문에서 ? 물음표 바로 뒤의 Loading 컴포넌트가 화면에 보려진다.
3. 화면이 보여진 후 1초 후 상태값들이 채워지고 변경
4. ready 값이 false로 변경
5. 상태값이 변경되어 화면이 다시 그려진다.
6. ready 값이 false 이므로, return 구문에서 : 콜론 뒤의 MainPage 컴포넌트가 화면에 그려진다.

<p align="center">
  <img width="300" src="https://user-images.githubusercontent.com/60697742/127805421-45ac296f-87be-4359-9e54-648df5f44d8a.png">
</p>

## 08. 카테고리
- 누르면 하단의 데이터가 카테고리에 맞게 다시 정렬되는 기능 (카테고리 상태 값이 변하면 화면 변경)

```javascript
const [state, setState] = useState([])
const [cateState, setCateState] = useState([])
const [ready, setReady] = useState(true)

const category = (cate) => {
    if (cate == '전체보기') {
        setCateState(state)
    } else {
        setCateState(state.filter((d) => {
            return d.category == cate
        }))
    }
}

useEffect(() => {
    setTimeout(() => {
        let tip = data.tip
        setState(tip)
        setCateState(tip)
        setReady(false)
    }, 1000)
}, [])
```

<p align="center">
  <img width="300" src="https://user-images.githubusercontent.com/60697742/127805765-c6a7f705-7e4b-4c7e-8329-85682cf7aacc.mp4">
</p>

## 09. 앱 상태 바(Status Bar) 관리
**Expo SDK.**에서 제공해주는 앱 기능 도구 개발 시 확인할 수 있는 사이트 <br>
[EXPO](https://docs.expo.io/versions/v38.0.0/) <br>

- Expo 상태 바 설치

```
expo install expo-status-bar
```

```javascript
import { StatusBar } from 'expo-status-bar'
...
<StatusBar style="black" /> // 또는
<StatusBar style="light" />
```

<p align="center">
  <img width="300" src="https://user-images.githubusercontent.com/60697742/127806450-560a634a-6061-4b79-ac2b-4048fdf25d28.png">
  <img width="300" src="https://user-images.githubusercontent.com/60697742/127806467-8842d67b-2951-4925-8d25-d59af0eb8eda.png">
</p>
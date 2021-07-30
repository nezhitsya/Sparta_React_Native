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

## 05. 속성 (Props)
- **속성** : 컴포넌트에 데이터 전달. key & value 형태
    - ex. Text 태그의 numberOfLines 속성
    - ex. Image 태그의 resizeMode 속성
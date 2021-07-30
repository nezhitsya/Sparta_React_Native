# [About Page](https://velog.io/@nezhitsya/스파르타-코딩-클럽-개발일지-2-hbu7r6lc)

<p align="center">
  <img width="300" src="https://user-images.githubusercontent.com/60697742/127432885-9bcd77a9-ff40-4f53-abf8-18c900c33f42.png">
</p>

## 라이브러리

```javascript
import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
```

## 태그

```javascript
export default function AboutPage() {

    return (
        <View style={styles.container1}>
            <Text style={styles.title}>HI! 스파르타 코딩 앱개발 반에 오신것을 환영합니다!</Text>
            <View style={styles.container2}>
                <Image style={styles.aboutImage} source={{uri: "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2FaboutImage.png?alt=media&token=13e1c4f6-b802-4975-9773-e305fc7475c4"}} resizeMode={"cover"} />
                <Text style={styles.introText}>많은 내용을 간결하게 담아내려 노력했습니다!</Text>
                <Text style={styles.descText}>꼭 완주 하셔서 여러분 것으로 만들어가시길 바랍니다!</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>인스타로 소개하기</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
    
}
```

## 디자인
**center horizontal** == alignItems: "center" <br>
**center vertical** == justifyContent: "center" <br>
**text center horizontal** == textAlign: "center"

```javascript
const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: "#001E6C",
        alignItems: "center",
        justifyContent: "center"
    },
    container2: {
        width: 300,
        height: 500,
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        backgroundColor: "orange",
        borderRadius: 15,
        padding: 15,
        marginTop: 30
    },
    aboutImage: {
        width: 150,
        height: 150,
        borderRadius: 20,
        marginTop: 20
    },
    title: {
        color: "white",
        fontWeight: "bold",
        fontSize: 30,
        padding: 35,
        textAlign: "center"
    },
    introText: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 30,
        textAlign: "center"
    },
    descText: {
        paddingLeft: 30,
        paddingRight: 30,
        textAlign: "center"
    },
    buttonText: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold"
    }
})
```
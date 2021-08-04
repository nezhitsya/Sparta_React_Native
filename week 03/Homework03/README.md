# [Stack Navigation](https://velog.io/@nezhitsya/스파르타-코딩-클럽-개발일지-3-kkez02li)

<p align="center">
  <img width="300" src="https://user-images.githubusercontent.com/60697742/128128595-96bdd88c-1c74-4911-af2b-b2f70d8a1b0c.mov">
</p>

## 라이브러리

```javascript
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DetailPage from '../pages/DetailPage';
import MainPage from '../pages/MainPage';
import AboutPage from '../pages/AboutPage';
import LikePage from '../pages/LikePage';
```

## 네비게이션 설정

```javascript
const Stack = createStackNavigator()
const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: "white",
                height: 100,
                borderBottomColor: "white",
                shadowColor: "white"
            },
            headerTitleAlign: 'left',
            headerTintColor: "black",
            headerBackTitleVisible: false
        }}>
            <Stack.Screen name="MainPage" component={MainPage} />
            <Stack.Screen name="DetailPage" component={DetailPage} />
            <Stack.Screen name="AboutPage" component={AboutPage} />
            <Stack.Screen name="LikePage" component={LikePage} />
        </Stack.Navigator>
    )
}
```

## 화면에 네비게이션 넣기

```javascript
export default function LikePage({navigation, route}) {
    ...
    useEffect(() => {
        navigation.setOptions({
            title: '찜한 팁'
        })
    })
    
    return (
        <ScrollView style={styles.container}>
            {
                tip.map((content, i) => {
                    return (
                        <LikeCard key={i} content={content} navigation={navigation} />
                    )
                })
            }
        </ScrollView>
    )
}
```
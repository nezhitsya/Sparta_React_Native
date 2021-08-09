# [Firebase](https://velog.io/@nezhitsya/스파르타-코딩-클럽-개발일지-4-1ka590ri)

<p align="center">
  <img width="300" src="https://user-images.githubusercontent.com/60697742/128659354-aba84a1f-4f05-44eb-adae-73016a7e1cc3.mp4">
</p>

## 라이브러리

```javascript
import { firebase_db } from '../firebaseConfig';
import Constants from 'expo-constants';
```

## Firebase - write

```javascript
const user_id = Constants.installationId
  firebase_db.ref('/like/' + user_id).once('value').then((snapshot) => {
    let tip = snapshot.val()
    let tip_list = Object.values(tip)

    if (tip_list.length > 0) {
      setTip(tip_list)
      setReady(false)
    }
  })
}, [])
```

## Reload

```javascript
const reload = () => {
  const user_id = Constants.installationId
  firebase_db.ref('/like/' + user_id).once('value').then((snapshot) => {
    if (snapshot.exists()) {
      let tip = snapshot.val()
      let tip_list = Object.values(tip)
      setTip(tip_list)
    } else {
      setReady(true)
      setTip([])
    }
  })
}
```

## Firebase - delete

```javascript
const remove = () => {
  const user_id = Constants.installationId
  firebase_db.ref('/like/' + user_id + '/' + content.idx).remove().then(function() {
    Alert.alert('삭제되었습니다.')
    reload()
  })
}
```
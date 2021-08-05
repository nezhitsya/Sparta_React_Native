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

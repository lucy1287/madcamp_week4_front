**당신을 / 그를 / 그녀를 / 우리를 위한**

**한 페이지가 될 수 있게**

# 1 Page

---

## 소개

끝을 앞두고 함께한 추억들로 채울 롤링페이퍼를 작성할 수 있는 웹사이트입니다.

![mainpage_logo.webp](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/92dbba6c-e943-4f1f-9092-8137ba69ba7f/mainpage_logo.webp)

---

## TEAM

이은재

SMWU CS 21

BACKEND

[lucy1287 - Overview](https://github.com/lucy1287)

이동건

KAIST EECS 20

FRONTEND

[dglee2007 - Overview](https://github.com/dglee2007)

---

## Tech Stack

FE

- 언어: React

BE

- 클라우드: AWS EC2
- 서버: Node.js
- DB: MySQL RDS

![화면 캡처 2024-07-22 171356.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/e7416e00-1fd7-4b44-8b6b-fef01114735f/%ED%99%94%EB%A9%B4_%EC%BA%A1%EC%B2%98_2024-07-22_171356.png)

- IDE: VSCode, Intellij
- SDK: Kakao

**디자인**

- Figma, Dalle, Pinterest

---

## Detail

### 1. Homepage

`Scroll Animation` 을 이용해서 홈페이지에 두개의 화면을 구현하였습니다.

[MainPage.mp4](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/b843dae5-c5f8-4c0c-8858-5b57301b718c/MainPage.mp4)

Header 부분은 총 4개의 버튼이 있습니다.

- 1 page: 글씨를 누르면 홈 화면으로 돌아옵니다.
- For us : 그룹 롤링페이퍼 생성 화면으로 이동합니다.
- Join : 생성되어 있는 방에 초대 코드를 입력하면 그룹에 가입할 수 있습니다.
- My papers : 내가 소속되어 있는 그룹을 둘러볼 수 있습니다.

## 2. Login

위 화면에서 시작하기 누르면 다음과 같은 화면으로 이동하여 로그인을 합니다. 

로그인은 `Kakao API`를 이용하였습니다. 클라이언트에서는 서버로부터 사용자를 식별할 수 있는 토큰을 받고 저장합니다. 

[React App - Google Chrome 2024-07-25 19-05-01.mp4](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/107bb44e-2d8b-41c8-a758-8b8da5300780/React_App_-_Google_Chrome_2024-07-25_19-05-01.mp4)

## 3. 그룹 생성

헤더의 For us를 누르면 그룹을 생성할 수 있는 탭으로 이동합니다.

그룹을 생성하기 위해서는 그룹명이 필요하며 그룹명을 입력하면 생성이 되고 상대방을 초대할 수 있는 초대 코드를 알려줍니다. 

그룹 화면에 들어가면 그룹에 소속되어있는 사용자들의 Envelope이 보여지고 사용자의 Envelope을 누르면 해당 사용자에게 작성할 수 있는 롤링페이퍼로 연결됩니다. 

[React App - Google Chrome 2024-07-25 19-38-47.mp4](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/0dce2f13-7673-4d14-a290-94a08f84816c/React_App_-_Google_Chrome_2024-07-25_19-38-47.mp4)

## 4. 그룹 초대

헤더의 Join을 누르면 초대 생성 코드를 입력하는 화면이 나오고 코드를 입력하면 그룹에 초대되고 소속된 유저들을 알 수 있다. 

[React App - Chrome 2024-07-25 19-48-51.mp4](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/114e4447-3f2d-4c36-bf10-7d8fadf13aa1/React_App_-_Chrome_2024-07-25_19-48-51.mp4)

## 5. 롤링페이퍼 작성

해당 유저의 Envelope을 누르면 롤링페이퍼로 이동되고 Envelope 안에 있는 롤링페이퍼를 조회하고 글을 작성할 수 있다. 

글을 작성하기 위해서 내용, 배경색, 폰트, 그림을 선택할 수 있다.

포스트잇을 누르면서 앞면과 뒷면을 볼 수 있다. 

[React App - Chrome 2024-07-25 20-08-49.mp4](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/6f17b2fc-2351-4685-ab81-6c450c79515a/React_App_-_Chrome_2024-07-25_20-08-49.mp4)

## 6. 소속 그룹 조회

이 탭에서는 소속되어 있는 그룹을 조회할 수 있다.

[React App - Google Chrome 2024-07-25 20-15-30.mp4](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/a8d3531c-4e67-4468-8312-c4db5e84c1cc/React_App_-_Google_Chrome_2024-07-25_20-15-30.mp4)

---

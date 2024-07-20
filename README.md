# 카카오 테크 캠퍼스 - 프론트엔드 카카오 선물하기 편

## ✏ 기능 목록

### STEP1

- [x] 상세페이지 UI 구현
- [x] 상품 결제하기 페이지 UI 구현
- [x] 상세페이지 API 구현
  - [x] /api/v1/products/{productId}/detail
  - [x] 없는 상품의 경우 메인페이지로 연결
  - [x] /api/v1/products/{productId}/options
  - [x] 나에게 선물하기 버튼 클릭 시 로그인이 되어있지 않다면 로그인 페이지로 연결

### STEP2

- [x] 상품 상세 페이지에서 상품 개수를 option API의 giftOrderLimit을 초과한 경우 선택이 불가능하게 하기.
- [x] 결제 페이지 Form Validation
  - [x] 카드 메세지를 입력하지 않으면 메세지를 입력하라고 안내.
  - [x] 카드 메세지가 100글자가 넘어가면 100글자 이내로 입력하라고 안내.
  - [x] 현금 영수증 checkbox클릭 시 현금영수증 번호가 입력되었는지 확인.
  - [x] 현금 영수증 입력은 숫자만 입력하도록 안내.

### STEP3

- [ ] 기존의 form / input을 react-hook-form으로 변경

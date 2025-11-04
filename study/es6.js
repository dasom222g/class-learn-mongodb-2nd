// admin 페이지 접근 여부
/**
 * admin페이지 접근 조건
 * 1. login된 사용자
 * 2. role이 admin이어야 함
 */

const user = {
  isLoggedIn: false,
  role: "admin", // 다른 값으로 "user", "guest"
  message: "", // false
};

// admin 페이지 접근
if (user.isLoggedIn && user.role === "admin") {
  // 로그인 된 사용자 이면서 role이 admin인 경우
  console.log("✅ 관리자 페이지에 접근할 수 있습니다");
} else {
  console.log("❌ 관리자 페이지에 접근할 수 없습니다");
}

// 메인페이지 접근
if (user.isLoggedIn || user.role === "admin") {
  console.log("✅ 메인페이지에 접근할 수 있습니다");
} else {
  console.log("❌ 메인페이지에 접근할 수 없습니다");
}
/**
if (false && true) -> 첫 조건식만 실행 후 종료
if (true && false) -> 다음 조건식으로 넘어감

if (false || true) -> 다음 조건식으로 넘어감
if (true || false) -> 첫 조건식만 실행 후 종료
 */

const canAccess = user.message || "접근 불가";
console.log("🚀 ~ canAccess:", canAccess);

if (!user.message) {
  // 메시지가 없는 경우
  console.log("메시지가 없습니다!!");
}

const sayHello = (username = "사용자") => {
  console.log(`안녕하세요 ${username}님!`);
};

sayHello();
sayHello("배홍진");

// 구조분해할당
const names = ["alice", "bob", "david"];

// 기존
const firstName = names[0];
console.log("🚀 ~ firstName:", firstName);
const secondName = names[1];
console.log("🚀 ~ secondName:", secondName);

// 사용후
const [second, first] = names;
console.log("🚀 ~ first:", first);
console.log("🚀 ~ second:", second);

const [, , last] = names;
console.log("🚀 ~ last:", last);

// 객체
const person = {
  name: "후츠릿",
  mbti: "ENTJ",
};

const { name: username, mbti } = person;
console.log("🚀 ~ username:", username);
console.log("🚀 ~ mbti:", mbti);

const name = person.name;

// spread syntax
// 배열이나 객체를 개별 요소로 분해하거나 결합할때 사용
const copyNames = ["kelly", ...names];
console.log("🚀 ~ copyNames:", copyNames);

const todoItem = {
  text: "mongoDB 학습",
  isComplete: false,
};

const copyTodoItem = {
  ...todoItem,
  description: "DB공부 할거예요",
  isComplete: true,
};
console.log("🚀 ~ copyTodoItem:", copyTodoItem);

console.log("🚀 ~ todoItem:", todoItem);

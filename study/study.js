let name = "chutzrit"

name = "변경"

const num = 1; // 숫자
const numStr = "1" // 문자열

// boolean : true, false

const numType = typeof (num);

// console.log("numType", numType)
// console.log("boolType", typeof (true))

/**
 * 자바스크립트에서 데이터 타입
 * 1. number
 * 2. string
 * 3. boolean
 * 4. null/undefined
 */

// 화살표 함수
// function sayHello() {
//   console.log("안녕하세요")
// }

const sayHello = (username) => {
  console.log(`안녕하세요, ${username}님!`)
}

// bad
// function sayHello() {
//   // 실행로직
// }
sayHello("김광수")
sayHello("후츠릿")

// ⭐️ 미션: 숫자 두개를 받아와서 이 두개 숫자를 더한값을 출력하는 화살표 함수를 만들어주세요. 
// 출력 형식: 1 + 2 = 3
// const sum = (a, b) => {
//   return a + b
// }

const sum = (a, b) => a + b

const result = sum(1, 2)
console.log("🚀 ~ result:", result)

console.log("🚀 ~ sum(28, 324):", sum(28, 324))

// 조건문
const score = 80;

if (score >= 60) {
  // 조건식이 true인경우 실행되는 구문
  console.log("✅ 합격");
} else {
  // 조건식이 false인경우 실행되는 구문
  console.log("❌ 불합격")
}

// 삼항 연산자
score >= 60 ? console.log("✅ 합격") : console.log("❌ 불합격")
const value = score >= 60 ? "합격" : "불합격" // 대입연산 가능

if (score >= 90) {
  console.log("A등급")
} else if (score >= 80) {
  // if 조건식이 false 인경우, 현재 조건식이 true인경우 실행
  console.log("B등급")
} else {
  console.log("F등급")
}

if ("") {
  console.log("값이 있습니다")
} else {
  console.log("값이 비어있습니다")
}

// 배열과 객체
const daysOfWeeks = ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"]
// 화요일 뽑아오기
console.log("🚀 ~ daysOfWeeks[1]:", daysOfWeeks[1])

const person = {
  name: "이승한",
  mbti: "ISTJ"
}

// mbti값 뽑아오기
console.log(`🚀 ~ person["mbti"]:`, person["mbti"])
console.log("🚀 ~ person.mbti:", person.mbti)

const names = ["alice", "bob", "david"];

names.forEach((name, index) => {
  console.log(`${index}번째: ${name}`)
})


// for (let i = 0; i < names.length; i++) {
//   console.log(`${i}번째: ${names[i]}`)
// }


//2. 아래 코드를 보고, 함수 호출 전, 함수 내부, 함수 호출 후에 각각 console.log로 위치를 표시하고, 변수를 출력해 주세요.
let msg = 'Hello';

function sayHello(name){
	if(name){
		msg += ', ' + name
//혹은 msg += `, ${name}`;
;
	}
    console.log('함수 내부 변수 = '+ msg)  //함수의 실행 결과 msg의 값이 Hello, Mike 가 됨.
}

console.log('함수 호출 전 변수 = '+ msg)   //msg의 초기값 'Hello' 출력 
sayHello('Mike');
console.log('함수 호출 후 변수 = '+ msg)   //함수의 실행 결과 msg의 값이 Hello, Mike 가 됨.
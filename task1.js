//1. 아래 코드의 실행 결과를 서술하고, 그 이유를 설명하세요. 
function sayHello(name){
	//let 변수 특: 재할당 가능
	let msg = `Hello`; 
	if(name){
		msg = `Hello, ${name}`;
	}
	console.log(msg);
}

sayHello();

//실행결과: Hello
//이유: 11번 줄 코드에서, 즉 함수 sayHello()를 호출할 때 name 매개변수를 입력하지 않았으므로, 함수 정의 내용의 if문이 실행되지 않고,
//      mgs의 값이 'Hello'인 채로 console.log(msg)가 실행되어 'Hello'만 출력된다.
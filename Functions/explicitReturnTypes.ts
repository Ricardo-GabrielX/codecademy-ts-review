import {getUserChoice,f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12} from './resources'
// resources.ts contains the following functions:
// export function getUserChoice(): number{
//   return Math.floor(Math.random() * 12) + 1;
// }
// export function f1(): string{
//   return 'apple.jpg';
// }
// export function f2(): string{
//   return 'banana.jpg';
// }
// export function f3(): string{
//   return 'cherry.jpg';
// } seriam isso mas tem mais 9 funções, cada uma retornando o nome de uma fruta diferente, como f4() retornando 'grape.jpg', f5() retornando 'orange.jpg' e assim por diante até f12().

function returnFruit(): string{
  let num = getUserChoice();
  switch(num){
    case 1 : return f1();
		case 2 : return f2();
		case 3 : return f3();
		case 4 : return f4();
		case 5 : return f5();
		case 6 : return f6();
		case 7 : return f7();
		case 8 : return f8();
		case 9 : return f9();
		case 10 : return f10();
		case 11 : return f11();
		case 12 : return f12();
  }
  return 'durian.jpg'
}
//The problematic function is f9()
console.log(returnFruit());


const numbers = [5,0,9,1,7,4,2,6,3,8];

let  tryNumb = numbers.toString();

let tryNumb1 = numbers.join(',');
let tryNumb2 = numbers.join('+');
let tryNumb3 = numbers.join(' ');
let tryNumb4 = numbers.join('');

let orderNumb = [];

for (let i = 0; i <numbers.length; i++) {
    let itemi = numbers[i];
    for (let j = i; j <numbers.length; j++) {
        let itemj = numbers[j]
        if (itemi <= itemj){
            itemi = itemj;
            orderNumb[i]= itemi;
        }else {
            orderNumb[i]= itemi;
        }
    }
    let index = numbers.indexOf(orderNumb[i]);
    console.log(index);
}

console.log(orderNumb);
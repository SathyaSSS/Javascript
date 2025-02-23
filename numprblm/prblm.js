// let num = 135
// let dup = num
// let res=0
// power=0
// powvalue=num
// while(powvalue!=0){
//     powvalue = Math.floor(powvalue/10);
//     power++;
// }
// while(num!=0){
//     rem=num%10
//     res+=Math.pow(rem,power)
//     power--
//     num=Math.floor(num/10)
// }
// if (dup == res) {
//     console.log("Disarium number");
// } else {
//     console.log("Not Disarium number");
// }



// let num = 28 
// let res = 0
// for(val=1;val<=Math.floor(num/2);val++){
//     if(num%val==0){
//         res+=val
//     }
// }
// if (res == num) {
//     console.log("Special number");
// } else {
//     console.log("Not special number");
// }


// let num = 145
// let dup = num
// let res = 0
// while(num!=0){
//     rem=num%10
//     fact=1
//     for(val=1;val<=rem;val++){
//         fact*=val
//     }
//     res+=fact
//     num=Math.floor(num/10)
// }
// if (res == dup) {
//     console.log("Strong number");
// } else {
//     console.log("Not strong number");
// }


// num=246
// rev=0
// while (num!=0){
//     rem=num%10
//     rev=rev*10+rem
//     num=Math.floor(num/10)
// }
// console.log(rev);

// num=121
// dup=num
// rev=0
// while (num!=0){
//     rem=num%10
//     rev=rev*10+rem
//     num=Math.floor(num/10)
// }
// if(dup==rev){
//     console.log('pn');
// }
// else{
//     console.log('not');
// }



// num=13
// res=0
// pos=1
// while (num!=0){
//     rem=num%2
//     res=res+rem*pos
//     pos=pos*10
//     num=Math.floor(num/2)
// }
// console.log(res);


// num=1101
// res=0
// pos=1
// while (num!=0){
//     rem=num%10
//     res=res+rem*pos
//     pos=pos*2
//     num=Math.floor(num/10)
// }
// console.log(res);


// num=2025
// s=String(num)
// let firsthalf = parseInt(s.slice(0,s.length/2));
// let secondhalf = parseInt(s.slice(s.length/2));
// let sum = firsthalf + secondhalf
// let ans = sum * sum;
// if (ans == num) {
//     console.log("Tech number");
// } else {
//     console.log("Not tech number");
// }

// num=3025
// dup=num
// digits=0
// while(dup!=0){
//     dup=Math.floor(dup/10)
//     digits++
// }
// let divisor = Math.pow(10,digits/2)
// let firsthalf = Math.floor(num/divisor)
// let secondhalf = num%divisor
// let sum=firsthalf + secondhalf
// let ans = sum*sum
// if(ans==num){
//     console.log('tech number')
// } else{
//     console.log('not') 
// }


// num=11
// rev=0
// dup=num
// while(num!=0){
//     rem = num%2
//     rev=rev*10+rem
//     num=Math.floor(num/10)
// }
// if(rev==dup){
//     if(dup>1){
//         isprime = true;
//         for(val=2; val <= Math.floor(dup/2);val++){
//             if (dup%val==0){
//                 isprime = false;
//                 break
//             }
//         }
//         if(isprime){
//             console.log('palyprime')
//         }
//         else{
//             console.log(' not palyprime')
//         }
//     }else{
//         console.log('not palyprime')
//     }
// }else{
//     console.log('not palyprime')
// }


// num = 13
// dup=num
// rev=0
// while(num!=0){
//     rem=num%10
//     rev=rev*10+rem
//     num=Math.floor(num/10)
// }
// if(dup!=rev){
//     if(dup>1){
//         isprime = true;
//         for(val=2;val<=Math.floor(dup/2);val++){
//             if(dup%val==0){
//                 isprime=false;
//                 break;
//             }
//         }
//         if(isprime){
//             if(rev>1){
//                 isrevprime=true
//                 for(val=2;val<=Math.floor(rev/2);val++){
//                     if(rev%val==0){
//                         isrevprime=false
//                         break;
//                     }
//                 }
//                 if(isrevprime){
//                     console.log('emp')
//                 } else{
//                     console.log('not emp')
//                 }
//             } else {
//                 console.log('not emp')
//             }
//         }else{
//             console.log('not emp')
//         }
//     } else{
//         console.log('not emp')
//     }
// } else{
//     console.log('not emp')
// }

// let num = 153
// let dup = num
// let res=0
// let power=String(num).length;
// while(num!=0){
//     rem=num%10
//     res+=Math.pow(rem,power)
//     num=Math.floor(num/10)
// }
// if (dup == res) {
//     console.log("Armstrong number");
// } else {
//     console.log("Not armstrong number");
// }

// num=153
// dup=num
// res=0
// power=0
// powval=num
// while(powval!=0){
//     powval=Math.floor(powval/10)
//     power++
// }
// while(num!=0){
//     rem=num%10
//     res+=Math.pow(rem,power)
//     num=Math.floor(num/10)
// }
// if (dup == res) {
//     console.log("Armstrong number");
// } else {
//     console.log("Not armstrong number");
// }

// let num = 19
// while(num>9){
//     res=0
//     while(num!=0){
//         rem=num%10
//         res+=rem**2
//         num=Math.floor(num/10)
//     }
//     num=res
// }
// if (num==1 || num==7){
//     console.log('happy number')
// }
// else{
//     console.log('not happy')
// }


// let num1 = 2
// let num2 = 4
// let lcm
// if(num1>num2){
//     lcm=num1
// }
// else{
//     lcm=num2
// }
// while(true){
//     if(lcm%num1==0 && lcm%num2==0){
//         console.log(lcm);
//         break
//     }
//     lcm++
// }


// let num1 = 2
// let num2 = 4
// let gcd
// if(num1<num2){
//     gcd=num1
// }
// else{
//     gcd=num2
// }
// while(true){
//     if(num1%gcd==0 && num2%gcd==0){
//         console.log(gcd);
//         break
//     }
//     gcd--
// }


// num=16
// val=0
// while(val*val<=num){
//     if (val*val==num){
//         console.log('perfect sq');
//         break
//     }
//     else{
//         val++
//     }
// }
// if(val*val!=num){
//     console.log('not')
// }

// num=123
// let a=0
// let m = 1
// while(num!=0){
//     rem=num%10
//     a=a+rem
//     m=m*rem
//     num=Math.floor(num/10)
// }
// if(a==m){
//     console.log('spy')
// }
// else{
//     console.log('not')
// }


// let num = 12;

// if (num > 3) {
//     for (let val = 1; val <= Math.floor(num / 2); val++) {
//         if (num % val === 0 && val!=1) {
//             console.log("Composite");
//             break;
//         }
//     }
// } else {
//     console.log("Not Composite");
// }

num=12345
count=0
while(num!=0){
    num=Math.floor(num/10)
    count++
}
console.log(count)
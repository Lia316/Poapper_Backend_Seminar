// problem2
// 피보나치 수열 문제

function fibo(n){
    let f0 = 0, f1 = 1, result;

    if(n<2) return n;

    for(let i=2; i<=n; i++) {
        result = f0 + f1;
        f0 = f1;
        f1 = result;
    }
    return result;
}

for(let i=0; i<18; i++) {
    console.log(fibo(i));
}
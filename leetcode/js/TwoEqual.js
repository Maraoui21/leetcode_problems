function check(A,B,N){
    const sum = {"A":0,"B":0};
    for(var i=0;i<N;i++){
        sum["A"]+=A[i];
        sum["B"]+=B[i];
    }
    return (sum["A"]-sum["B"])?false:true;
}

const A = [12,3,4,5];
const B = [5,4,5,0];

console.log(check(A,B,4));

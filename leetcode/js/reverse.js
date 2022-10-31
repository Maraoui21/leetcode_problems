var reverse = function(x) {
    const arr = [];
    let rev=0;
    let negativeNum;
    if(x<0){
        negativeNum=true;
        x*=-1;
    }
    while(x!=0){
        arr.push(x%10);
        x=Math.floor(x/10);
    }
    let size = arr.length-1;
    for(var i=0;i<arr.length;i++){
        rev+=arr[i]*(10**size);
        size--;
    }
    return (negativeNum)?-rev:rev;
};


console.log(reverse(-123))
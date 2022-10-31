const arr = ["dog","racecar","car"];
let commStr="";

const sortedArr = arr.sort();

const firstSize = sortedArr[0].length;
const lasItem = sortedArr[sortedArr.length  - 1];


for(var i=0;i<firstSize;i++){

    if(!sortedArr[0].substring(i,i+1) == lasItem.substring(i,i+1)){
        commStr+=sortedArr[0].substring(i,i+1)
    }else{
        break;
    };
    
}

console.log(commStr);
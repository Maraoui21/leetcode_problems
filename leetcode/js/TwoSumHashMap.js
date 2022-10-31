function twoSum(target){
    const nums = [3,3]
    const HashMap = {};
    nums.forEach((e,index)=>{
        HashMap[e]=index;
    })
    for(var i=0;i<nums.length;i++){
        const toFind = target-nums[i];
        if(HashMap[toFind]!=undefined){
            if(i==HashMap[toFind])continue;
            else{return [i,HashMap[toFind]]}
        }
    }
}


console.log(twoSum(6))
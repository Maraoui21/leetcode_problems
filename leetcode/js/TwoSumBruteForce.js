const numxs = [3,2,4];
const targetx = 6;
const number = [];
function twosum(nums,target){
    for(var i=0 ; i<nums.length;i++){
        for(var j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                console.log(nums[i],nums[j])
                return [i,j];
            }
        }
    }
}

console.log(twosum(numxs,targetx));
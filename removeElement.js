nums = [3,2,2,3];
val = 2;
const expected = [2,2]

var removeElement = function(nums, val) {
    let numsNew = nums.filter((number) => number !== val )
    nums = numsNew
    console.log(nums)
};

removeElement(nums,val)
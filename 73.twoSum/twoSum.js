const twoSum = (nums, target) => {
  const numsMap = {};
  let index = 0;

  nums.forEach((number) => {
    numsMap[number] = index;
    index++;
  });

  for (let i = 0; i <= nums.length - 1; i++) {
    if (numsMap[target - nums[i]] && numsMap[target - nums[i]] !== i) {
      return [i, numsMap[target - nums[i]]];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));

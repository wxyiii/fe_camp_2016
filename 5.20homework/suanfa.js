
/** 有效括号问题
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var a = s.length;
  if(a / 2 !== parseInt(a / 2))
    {
      return false;
    }
  for(let i = 0;i < (a - 1);i = i + 2){
    if(s[i] !== s[i + 1]){
      return false;
    }
  }
  return true;
};
/**  TWO SUM
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
  var twoSum = function (num,target) {
   num.sort();
   var i = 0;
   var j = num.length - 1;
   while(i < j){
    if(num[i] + num[j] == target){rerturn [i,j]}
     else{
        if(num[i] + num[j] < target){i++;}
        else{j--;}
      }
  } 
  return console.log('none');
}
/**
 * @param {string} s
 * @return {number}
 */
 var romToInt function(x){
  if((x >= 1&&x <= 3999))
  {return parseInt((x + '');}
  else{alert('incorrect number!!');}  
}
i/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  var a = strs[0].length;
  for(let i = 0;i < strs.length;i++){
    if(strs[i].length < a){
      a = i;
    }
    console.log(a);
  }  
  var b = strs[a];
  console.log(b);
  var c = b.length;
  console.log(c);
  var d;
  for(let i = 0;i < c;i++){
    for(let j = 0,d = 0;j < strs.length;j++){
      if(strs[j].indexOf(b) !== 0){
        break;
      }
      d++;
      console.log(d);
    }
    if(d == strs.length){
      return b;
    }
    else {
      b = b.split('');
      b.pop();
      b = b.join('');
      console.log(b);
    }
  }
  return console.log('none')
};
longestCommonPrefix(['alojm','ad','adef','api']);
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  var j = 0; 
  for(let i = 0;i < nums.length;i++){
   if(nums[i] === val){
     delete nums[i];
     j++;
   }
    console.log(j);
 }
  nums.sort();
  console.log(nums);
  var a = nums.length - nums.join('').length;
  console.log(a);
  nums.splice(a,j);
  console.log(nums.length);
  return nums.length;
}
removeElement([3,5,6,8,6,8,6],6);

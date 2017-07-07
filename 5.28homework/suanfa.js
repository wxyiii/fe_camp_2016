/**
 * @@array : Can Place Flowers
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  var a =  flowerbed.length;
  for(var i = 0;i < a;i++){
    if(i === 0||i === (a - 1)){
     if(flowerbed[i - 1] === 0||flowerbed[i + 1] === 0)
      n = n - 1;
    }
    else{
      if(flowerbed[i - 1] === 0&& flowerbed[i + 1] === 0&&flowerbed[i] === 0)
        n = n - 1;
    }
  }
  if(n === 0)
    return true;
  else
    return false;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
  var x = 0;
  nums.sort(function(a,b){return a-b;});
  for(let i = 0;i < nums.length - 2;i++){
   for(let j = i + 1;j < nums.length - 1;j++){
     for(let k = j + 1;j < nums.length;k++){
       if(nums[i] + nums[j] > nums[k])
         x++;
       else 
         break;
     }
   } 
  }
  return x;
  console.log(x);
};
/**
 * @@math : Maximum Product of Three Numbers
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums.sort(function(a,b){return a-b;} );
  console.log(nums.sort(function(a,b){return a-b;}));
    var a = nums.length;
    
    console.log(nums[a - 3]*nums[a - 2]*nums[a - 1]);
    return nums[a - 3]*nums[a - 2]*nums[a - 1];
};
maximumProduct([1,4,8,2,15,10]);
/*
 * @@math: Sum of Square Numbers
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    
  var i = 1;
  var j = c - 1;
  while(i <= Math.ceil(c / 2)&&j >= Math.ceil(c / 2))
    {
      if(i * i + j * j === c * c)
        return console.log('ture');
      else
       {
         if(i * i + j * j >= c * c)
           j--;
         else
           i++;
       } 
    }
  return console.log('false');
};
judgeSquareSum(5);
/**
 * @@string : Number of Segments in a String
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  var a = 0;
  for(var i = 1;i <s.length - 1;i++){
    if(s[i] ==' ')
      a++;
  }
  return console.log(a + 1);
};
countSegments('fdsa fdsaafe. fewad/ fd');

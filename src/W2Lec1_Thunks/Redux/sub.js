// With Space

let str = "abc";

let ans = [];
function recursion(str, index, temp) {
  if (index === str.length) {
    ans.push(temp.join(""));
    return;
  }
  temp.push(str[index]);
  recursion(str, index + 1, temp);
  temp.pop();
  recursion(str, index + 1, temp);
}

recursion(str, 0, []);
console.log(ans.sort());

// Without space

let str1 = "abc";

let ans1 = [];
function recursion1(str1, index, temp) {
  if (index === str1.length) {
    if (temp.length > 0) {
      // only this line changes rest is exactly the same
      ans1.push(temp.join(""));
    }
    return;
  }
  temp.push(str1[index]);
  recursion1(str1, index + 1, temp);
  temp.pop();
  recursion1(str1, index + 1, temp);
}

recursion1(str1, 0, []);
console.log(ans1.sort());

// yes it is a very big risk but i have this single thing in mind that if there is only 1% chance that this can work then it can improve lives of 1000's of women and if this fails then i will be jobless for one year.. so for me it was a very calculated and an affordable risk because i know that i can work hard and i can bounce back any time, and thats why i am here, right in front of you, fully prepared to became a full stack web developer

var romanToInt = function (s) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "I":
        answer += 1;
        break;
      case "V":
        answer += 5;
        break;
      case "X":
        answer += 10;
        break;
      case "L":
        answer += 50;
        break;
      case "C":
        answer += 100;
        break;
      case "D":
        answer += 500;
        break;
      case "M":
        answer += 1000;
    }
  }
  console.log(answer);
};

romanToInt("LVIII");

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

  if (s.includes("IV")) {
    answer -= s.match(/IV/g).length * 1;
  } else if (s.includes("IX")) {
    answer -= s.match(/IX/g).length * 2;
  } else if (s.includes("XL")) {
    answer -= s.match(/XL/g).length * 10;
  } else if (s.includes("XC")) {
    answer -= s.match(/XC/g).length * 20;
  } else if (s.includes("CD")) {
    answer -= s.match(/CD/g).length * 100;
  } else if (s.includes("CM")) {
    answer -= s.match(/CM/g).length * 200;
  }

  console.log(answer);
};

romanToInt("MCMXCIV");

/**
input
"{{2},{2,1},{2,1,3},{2,1,3,4}}"	
output
[2, 1, 3,4]

input
"{{1,2,3},{2,1},{1,2,4,3},{2}}"	
output
[2,1,3,4]

input
"{{20,111},{111}}"	
output
[111,20]

input
"{{123}}"	
output
[123]

input
"{{4,2,3},{3},{2,3,4,1},{2,3}}"	
output
[3,2,4,1]
 */

const solution = (s) => {
  s = s.split("");
  s[0] = "";
  s.pop();
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{" || s[i] === "}") s[i] = "/";
  }
  s = s
    .join("")
    .split("/")
    .filter((n) => n !== "" && n !== ",")
    .sort((a, b) => a.length - b.length)
    .map((n) => n.split(",").map((v) => +v))
    .flat();
  const answer = [...new Set(s)];

  return answer;
};

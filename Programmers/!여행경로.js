function solution(tickets) {
  let temp = [];
  let answer = [];
  const n = tickets.length;

  const DFS = () => {};
  tickets.sort();
  console.log(tickets);

  for (let i = 0; i < n; i++) {
    const slicedTickets = tickets.slice();
    if (slicedTickets[i][0] === "ICN") {
      // console.log(slicedTickets.splice(i, 1)[0][0])
      // console.log(i, temp);
      temp.push(...slicedTickets.splice(i, 1)[0]);
      // console.log(temp[temp.length-1], slicedTickets);
      // console.log(findPath(temp[temp.length - 1], slicedTickets));
      console.log("while문 전", temp, slicedTickets);
      let idx = findPath(temp[temp.length - 1], slicedTickets);
      while (idx >= 0) {
        // console.log('삽입전', i, temp, slicedTickets,slicedTickets.length);
        console.log(idx, temp);

        temp.push(slicedTickets.splice(idx, 1)[0][1]);
        // if (slicedTickets.length === 1) {
        //   temp.push(slicedTickets[0][1]);
        //   console.log("끝", slicedTickets);
        //   console.log(temp);
        //   break;
        // }
        idx = findPath(temp[temp.length - 1], slicedTickets);
        console.log("남은티켓", i, temp, slicedTickets, slicedTickets.length);
        // console.log("while 내부", findPath(temp[temp.length - 1], slicedTickets));
      }
    }
    // return temp;
  }

  return temp;
}

const findPath = (target, tickets) => {
  for (let ticket of tickets) {
    if (ticket[0] === target) return tickets.indexOf(ticket);
  }
};

/*
tickets[i][0] === "ICN"
answer.push()

DFS()
answer.length 비교해서 더 큰것으로 바꾸기
*/

// console.log(solution(["ICN", "JFK", "HND", "IAD"]));
console.log(
  solution([
    ["ICN", "SFO"],
    ["ICN", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "ICN"],
    ["ATL", "SFO"],
  ])
);

/*
tickets[i][0] === "ICN"
answer.push()

DFS()
answer.length 비교해서 더 큰것으로 바꾸기
*/

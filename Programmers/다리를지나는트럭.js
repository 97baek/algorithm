/**
input
2, 10, [7, 4, 5, 6]
output
8

input
100, 100, [10]
output
101

input
100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
output
110

*/

const solution = (bridge_length, weight, truck_weights) => {
  let passed = [];
  let onBridge = [];
  let bridgeWeight = truck_weights[0];
  let count = 1;
  const initWeights = truck_weights.length;
  onBridge.push([truck_weights.shift(), 1]);
  while (initWeights !== passed.length) {
    // while (count < 120) {
    // console.log(`onBridge[0][1]: ${onBridge[0][1]}`);
    // console.log(count, onBridge, truck_weights, firstTruck);
    // console.log(onBridge[0]);
    let firstTruck = truck_weights[0];
    // console.log(count, onBridge, truck_weights, firstTruck + bridgeWeight);
    if (onBridge[0][1] === bridge_length) {
      let passedTruck = onBridge.shift();
      passed.push(passedTruck);
      bridgeWeight -= passedTruck[0];
      // console.log(passedTruck[0]);
    }
    if (weight >= firstTruck + bridgeWeight) {
      let truck = truck_weights.shift();
      onBridge.push([truck, 0]);
      bridgeWeight += truck;
      // console.log("onBridge");
    }
    // console.log(`bridgeWeight: ${bridgeWeight}`);
    count++;
    onBridge.map((time) => time[1]++);
  }
  // console.log(onBridge);
  return count;
};

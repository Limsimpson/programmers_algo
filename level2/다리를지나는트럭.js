// 1번
const solution = (bridgeLength, weight, truckWeights) => {
  const progress = [];
  let i = 1;
  while (true) {
    progress.map((item, j) => {
      if (item.end === i) progress.splice(j, 1);
    });

    if (
      progress.reduce((p, c) => p + c.weight, 0) + truckWeights[0] <=
      weight
    ) {
      progress.push({ end: i + bridgeLength, weight: truckWeights.shift() });
    }

    if (!progress.length && !truckWeights.length) break;
    i += 1;
  }

  return i;
};

// 2번

const solution = (bridge_length, weight, truck_weights) => {
  var answer = 0;
  let total_truck_weight = 0;
  let bridge_queue = [],
    weight_queue = [];

  //while(truck_weights.length > 0) {
  do {
    // 다리를 건너는 트럭 이동
    for (let i in bridge_queue) {
      bridge_queue[i]--;
    }
    if (bridge_queue[0] == 0) {
      total_truck_weight -= weight_queue.shift();
      bridge_queue.shift();
    }

    // 다리가 견딜 수 있으면 트럭 1개 올리기
    if (total_truck_weight + truck_weights[0] <= weight) {
      weight_queue.push(truck_weights[0]);
      bridge_queue.push(bridge_length);
      total_truck_weight += truck_weights.shift();
    }
    answer++;
  } while (bridge_queue.length > 0);

  return answer;
};

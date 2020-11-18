const solution = (priorities, location) => {
    let answer = 1;
    let queue = [];
    
    priorities.forEach((priority, idx) => {
        queue.push({
            priority,
            location: idx
        });
    });
    
    while(queue.length > 0){
        let maximum = queue.map(e => e.priority).reduce((acc, cur) => {
            return Math.max(acc, cur)
        });
        if (queue[0].priority < maximum){
            queue = [...queue.slice(1), queue[0]];
        } else {
            if (queue[0].location === location){
                break;
            }
            queue = queue.slice(1);
            answer++;
        }
    }
    return answer;
}
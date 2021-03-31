function solution(cacheSize, cities) {
    if(cacheSize === 0) return cities.length * 5;
    
    let cache = [];
    let answer = 0;
    let HIT = 1;
    let MISS = 5;
    
    cache.push(cities[0].toLowerCase());
    answer += MISS;
    
    for(let i = 1; i < cities.length; i ++) {
        let newCity = cities[i].toLowerCase();
        
        if(cache.includes(newCity)) {
            cache.splice(cache.indexOf(newCity), 1);
            cache.push(newCity);
            answer += HIT;
        } else {
            if(cache.length >= cacheSize) cache.shift();
            cache.push(cities[i].toLowerCase());
            answer += MISS;
        }
    }
    
    return answer;
}
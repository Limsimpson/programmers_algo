function solution(cacheSize, cities) {
    if(cacheSize === 0) return cities.length * 5;
    
    let cache = [];
    let answer = 0;
    
    cache.push(cities[0].toLowerCase());
    answer += 5;
    
    for(let i = 1; i < cities.length; i ++) {
        let newCity = cities[i].toLowerCase();
        
        if(cache.includes(newCity)) {
            cache.splice(cache.indexOf(newCity), 1);
            cache.push(newCity);
            answer += 1;
        } else {
            if(cache.length >= cacheSize) cache.shift();
            cache.push(cities[i].toLowerCase());
            answer += 5;
        }
    }
    
    return answer;
}
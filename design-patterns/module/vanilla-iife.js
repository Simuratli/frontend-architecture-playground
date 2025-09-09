const CounterModule = (function(){
    let count = 0;

    //public aopi
    return {
        increment:function(){
            count++;
            console.log("Count:", count);
        },
        decrement:function(){
            count--;
            console.log("Count:", count);
        },
        getCount:function(){
            return count;
        }
    } 
})

// Usage
CounterModule.increment(); // Count: 1
CounterModule.increment(); // Count: 2
console.log(CounterModule.getCount()); // 2
CounterModule.decrement(); // Count: 1
class Subject {
    constructor(){
        this.observers = new Set();
    }

    subscribe(fn){
        this.observers.add(fn);
        return () => this.observers.delete(fn); // unsubscribe function
    }
    notify(payload){
        for(const fn of this.observers) fn(payload);
    }
}


// Usage
const subject = new Subject();
const log1 = (x) =>console.log("observer 1:", x);
const log2 = (x) =>console.log("observer 2:", x);

const off1 = subject.subscribe(log1);
subject.subscribe(log2);

subject.notify("first message");
off1(); // observer 1 log
subject.notify("second message");
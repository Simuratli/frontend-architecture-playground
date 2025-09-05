export function createEventBus() {
    const listeners = new Set();
    const subscribe = (fn) => (listeners.add(fn),()=>listeners.delete(fn)); 
    const publish = (data) => listeners.forEach((fn) => fn(data));
    return { subscribe, publish };
}

// Usage
const bus = createEventBus();
const off = bus.subscribe((data) => console.log("Received:", data));
bus.publish({ type: "LOGIN", user: "eljan" });
off();
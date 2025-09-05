import React from "react";
const listener = new Set();
const publish = (data) => listener.forEach((fn) => fn(data));
const subscribe = (fn) => (listener.add(fn), () => listener.delete(fn));


function Publisher () {
    return <button onClick={() => publish("Button Clicked!")}>Publish</button>
}

function Subscriber({Label}) { 
    const [message, setMessage] = React.useState("-");
    React.useEffect(() => subscribe(setMessage), []);

    return <div>Message for {Label}: {message}</div>
}

export default function App() {
  return (
    <div>
      <Publisher />
      <Subscriber label="A" />
      <Subscriber label="B" />
    </div>
  );
}
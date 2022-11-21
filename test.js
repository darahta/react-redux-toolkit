const target = {
   message1: "hello",
   message2: "everyone",
};
const handler1 = {};

let proxyobj = new Proxy(target, handler1);

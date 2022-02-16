const world_ = 'world';

export function hello(world: string = world_): string {
  return `Hello ${world}! `;
}

console.log(hello())

import express from 'express';
const app = express();
 
app.get('/', function (req, res) {
  res.send('Hello World');
})
 
app.listen(3000);
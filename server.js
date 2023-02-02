const express = require('express');
const app = express();

require('dotenv').config();
const PORT = parseInt(process.env.PORT) || 2000;


app.get('/',(req,res)=>{
    // res.send('welcome');
    // res.send('<h1>heading this is heading </h1>');
    res.send(`<h1>heading  heading ${PORT}  </h1>`);
});


app.get('/about',(req,res)=>{
    res.send(`this is about file`);
});

app.get('/contact',(a,b)=>{
    // b.send(`<h1>this is heading</h1> <h2>heading two</h2>`);
    b.send(`<table>
    <tr><td>Emil</td><td>Tobias</td><td>Linus</td></tr><tr>
      <td>16</td>
      <td>14</td>
      <td>10</td>
    </tr>
  </table>`)
})


app.listen(PORT,()=>{
    console.log(`server is started ${PORT}`);
});



const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

require('dotenv').config();
const PORT = parseInt(process.env.PORT) || 2000;


app.get('/',(req,res)=>{
    // res.send('welcome');
    // res.send('<h1>heading this is heading </h1>');
    res.send(`<h1>heading  heading ${PORT}  </h1>`);
});


app.get('/about',(req,res)=>{
    res.send(`
      <form method="post" action="http://localhost:6100/myform">
        <input type="text" name="firstname" id="one"><br>
        <input type="text" name="lastname" id="two"><br>
        <button type="submit">submit</button>
      </form>
    `);
});

app.post('/myform', (req,res)=>{
    res.send("hi");

})

app.get('/contact',(a,b)=>{
    // b.send(`<h1>this is heading</h1> <h2>heading two</h2>`);
    b.send(`<table>
    <tr><td>Emil</td><td>Tobias</td><td>Linus</td></tr><tr>
      <td>16</td>
      <td>14</td>
      <td>10</td>
    </tr>
  </table>`)
});





app.listen(PORT,()=>{
    console.log(`server is started ${PORT}`);
});



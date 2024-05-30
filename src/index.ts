import { Hono } from 'hono'

const app = new Hono()

// app.use(async (c, next) => {
//   const authKey = c.req.header("Authorization");
//   if (authKey === "123") {

//     await next()
//   } else {
//     return c.text("You dont have access");
//   }
// })

app.get('/', async (c) => {
  try {
    // Return some HTML content showing different available routes

    return c.html(`
      <h1>Available Routes</h1>
      <ul>
        <li><a href="/helloworld">/helloworld</a></li>
        <li><a href="/add?a=2&b=3">/add?a=2&b=3</a></li>
        <li><a href="/subtract?a=2&b=3">/subtract?a=2&b=3</a></li>
        <li><a href="/multiply?a=2&b=3">/multiply?a=2&b=3</a></li>
        <li><a href="/divide?a=2&b=3">/divide?a=2&b=3</a></li>
      </ul>
    `)
  } catch (e) {
    console.log(e);
    return c.json({ message: "No Body was passed" })
  }
})

app.get('/helloworld', async (c) => {
  try {
    return c.text("Hello World")
  } catch (e) {
    console.log(e);
    return c.json({ message: "[HELLOWORLD]: Internal Error" })
  }
})

app.get('/add', async (c) => {
  try {
    const a = c.req.query("a");
    const b = c.req.query("b");

    if (!a || !b) {
      return c.json({ message: "Please provide a and b" })
    }

    return c.text(`${parseInt(a) + parseInt(b)}`)
  } catch (error) {
    console.log(error);
    return c.json({ message: "[ADD]: Internal Error" })
  }
})

app.get('/subtract', async (c) => {
  try {
    const a = c.req.query("a");
    const b = c.req.query("b");

    if (!a || !b) {
      return c.json({ message: "Please provide a and b" })
    }

    return c.text(`${parseInt(a) - parseInt(b)}`)
  } catch (error) {
    console.log(error);
    return c.json({ message: "[SUB]: Internal Error" })
  }
})

app.get('/multiply', async (c) => {
  try {
    const a = c.req.query("a");
    const b = c.req.query("b");

    if (!a || !b) {
      return c.json({ message: "Please provide a and b" })
    }

    return c.text(`${parseInt(a) * parseInt(b)}`)
  } catch (error) {
    console.log(error);
    return c.json({ message: "[MUL]: Internal Error" })
  }
})

app.get('/divide', async (c) => {
  try {
    const a = c.req.query("a");
    const b = c.req.query("b");

    if (!a || !b) {
      return c.json({ message: "Please provide a and b" })
    }

    return c.text(`${parseInt(a) / parseInt(b)}`)
  } catch (error) {
    console.log(error);
    return c.json({ message: "[DIV]: Internal Error" })
  }
})

export default app
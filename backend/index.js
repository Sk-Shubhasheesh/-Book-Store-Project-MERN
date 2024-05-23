import express from 'express'
import cors from 'cors'
import { PORT, MONGODB_CONNECTION } from './config.js';
import booksRoute from './routes/booksRoute.js'
const app = express();
// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
app.use(cors());
app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome To MERN Stack Tutorial');
  });
  
app.use('/books', booksRoute);

app.listen(PORT, async()=>{
    console.log(`Server is running at PORT ${PORT}`);
    await MONGODB_CONNECTION();
    console.log("Database Connected");
})



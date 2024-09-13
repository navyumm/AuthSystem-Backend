import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

// Setting up CORS middleware
const corsOrigin = process.env.CORS_ORIGIN || process.env.VITE_URL ;
console.log("cors: ",  corsOrigin);


app.use(cors({
    origin : corsOrigin,
    credentials: true
}))

// const corsOptions = {
//   origin: 'https://auth-system-frontend-peach.vercel.app',
//   credentials: true, 
// };

// app.use(cors(corsOptions));

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cookieParser())


//routes import
import userRouter from './routes/user.routes.js'

//routes declaration
app.use("/api/v1/user", userRouter)


export { app }
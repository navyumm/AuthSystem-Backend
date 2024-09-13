import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

// Setting up CORS middleware
// const corsOrigin = process.env.CORS_ORIGIN;

// app.use(cors({
//     origin : corsOrigin,
//     credentials: true
// }))

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true, 
};

app.use(cors(corsOptions));

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cookieParser())


//routes import
import userRouter from './routes/user.routes.js'

//routes declaration
app.use("/api/v1/user", userRouter)


export { app }
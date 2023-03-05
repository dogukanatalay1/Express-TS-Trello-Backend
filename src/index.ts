import * as dotenv from "dotenv";
import * as express from 'express';
import * as cors from "cors";

import { taskRouter } from './routes/taskRoutes';

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
};

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1/tasks", taskRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});
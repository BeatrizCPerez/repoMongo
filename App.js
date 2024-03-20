import express from 'express';
import cors from 'cors';
import router from './routers/BicycleRouter.js'
import connection_db from './database/connection_db.js';
import { PORT } from './config.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
});

await connection_db();

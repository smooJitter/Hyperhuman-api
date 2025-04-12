import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { structureReweaver } from './functions/structureReweaver.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/structureReweaver', async (req, res) => {
  const { dry_text, desired_format } = req.body;
  const result = await structureReweaver(dry_text, desired_format);
  res.json({ result });
});

app.get('/', (req, res) => {
  res.send('HyperHuman API is live!');
});

app.listen(PORT, () => {
  console.log(`🧠 HyperHuman API running on port ${PORT}`);
});
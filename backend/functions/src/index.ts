import express from 'express';
import cors from 'cors';
import bookRoutes from './routes/bookRoutes';
import * as functions from 'firebase-functions';

const app = express();

app.use(cors());                  // Enable CORS
app.use(express.json());          // Parse JSON request bodies
app.use('/api/books', bookRoutes); // Mount book routes

export default app;
export const api = functions.https.onRequest(app); // Deploy as a Cloud Function

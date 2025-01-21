import * as admin from 'firebase-admin';
import { Book } from '../models/bookModel';

// Load Firebase service account key (replace with your actual key)
const serviceAccount = require('../serviceAccountKey.json');

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

// Firestore instance
const firestore = admin.firestore();

// Firestore methods to interact with database
export const getBooks = async (): Promise<Book[]> => {
  const snapshot = await firestore.collection('books').get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const createBook = async (book: Book): Promise<Book> => {
  const docRef = await firestore.collection('books').add(book);
  return { id: docRef.id, ...book };
};

export const updateBook = async (id: string, book: Book): Promise<Book> => {
  await firestore.collection('books').doc(id).update(book);
  return { id, ...book };
};

export const deleteBook = async (id: string): Promise<void> => {
  await firestore.collection('books').doc(id).delete();
};

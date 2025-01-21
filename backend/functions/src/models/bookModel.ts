export interface Book {
  id?: string;           // Firestore document ID
  title: string;         // Book title
  author: string;        // Book author
  publishedDate: string; // Date of publication
  genre: string;         // Genre of the book
}

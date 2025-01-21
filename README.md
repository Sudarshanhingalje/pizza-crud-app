# Book Management System

A modern web application for managing books built with Next.js, TypeScript, and Tailwind CSS.

![Book Management System](![Screenshot 2025-01-21 133551](https://github.com/user-attachments/assets/f8f4c05b-27bc-45e7-b86b-b58045541cea)
)

## Features

- 📚 Create, Read, Update, and Delete books
- 🎨 Modern and responsive UI with Tailwind CSS
- 💪 Type-safe with TypeScript
- ⚡ Fast and SEO-friendly with Next.js
- 🔍 Client-side search and filtering
- 🐳 Docker support for easy deployment

## Tech Stack

- **Frontend:** Next.js, TypeScript, Tailwind CSS
- **State Management:** React Hooks
- **Styling:** Tailwind CSS
- **Containerization:** Docker
- **Development:** ESLint, Prettier

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm or yarn
- Docker (optional)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Sudarshanhingalje/pizza-crud-app.git
cd pizza-crud-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Docker Setup

1. Build the Docker image:
```bash
docker build -t book-management-system .
```

2. Run the container:
```bash
docker run -p 3000:3000 book-management-system
```

## API Documentation

### Endpoints

#### GET /api/books
- Description: Retrieve all books
- Response: Array of book objects
```json
[
  {
    "id": "1",
    "title": "Book Title",
    "author": "Author Name"
  }
]
```

#### POST /api/books
- Description: Create a new book
- Request Body:
```json
{
  "title": "Book Title",
  "author": "Author Name"
}
```
- Response: Created book object

#### PUT /api/books
- Description: Update an existing book
- Request Body:
```json
{
  "id": "1",
  "title": "Updated Title",
  "author": "Updated Author"
}
```
- Response: Updated book object

#### DELETE /api/books?id={bookId}
- Description: Delete a book
- Query Parameter: `id` - Book ID to delete
- Response: Success message

## Usage

### Adding a Book
1. Fill in the book details in the form (title and author)
2. Click "Add Book"

### Updating a Book
1. Click the "Edit" button next to the book
2. Modify the details in the form
3. Click "Update Book"

### Deleting a Book
1. Click the "Delete" button next to the book
2. Confirm the deletion in the popup

## Project Structure
```
frontend/
├── pages/                    
│   ├── api/                  # API routes
│   │   └── books.ts         
│   └── index.tsx            # Home page
├── src/
│   ├── components/          # React components
│   ├── services/            # API services
│   ├── styles/              # CSS styles
│   └── types/               # TypeScript types
├── public/                  # Static assets
└── package.json
```

## Development

### Code Style

The project uses ESLint and Prettier for code formatting. Run linting:
```bash
npm run lint
```

### Building for Production
```bash
npm run build
npm start
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Sudarshan Hingalje - [GitHub Profile](https://github.com/Sudarshanhingalje)

Project Link: [https://github.com/Sudarshanhingalje/pizza-crud-app](https://github.com/Sudarshanhingalje/pizza-crud-app)

export const Booklist = (props) => {
  const books = [
    {
      id: "1",
      title: "The Psychology of Money",
      author: "Morgan Housel",
      genre: "personal transformation",
    },
    {
      id: "2",
      title: "Man's Search For Meaning",
      author: "Victor E. Frankl",
      genre: "Military History",
    },
    {
      id: "3",
      title: "The Ten Principal Upanishads",
      author: "Shree Purohit Swami",
      genre: "Theology & Philosophy",
    },
  ];
  return (
    <div>
      <h1>
        <u>List of books</u>
      </h1>
      {books.map((book) => {
        return (
          <ul key={book.id}>
            <li>
              <h3>{book.title}</h3>
              <h4>Author:   {book.author}</h4>
              <h5>Genre:  {book.genre}</h5>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

// Create a React.js application that displays a list of books. Follow the steps below to complete the assignment:
// Initialize a new React.js project using the create-react-app command.
// Create a BookList component to store and display the list of books.
// Inside the BookList component, declare an array called "books" that contains objects representing different books. Each book object should have properties such as title, author, and genre.
// Render the list of books on the screen by mapping through the "books" array and displaying the title, author, and genre for each book.

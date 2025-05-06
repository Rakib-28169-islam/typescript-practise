interface Book {
    title: string;
    author: string;
  }
  
  interface Magazine {
    name: string;
    editor: string;
  }
  
  type BookOrMagazine = Book | Magazine; // Union
  type BookAndMagazine = Book & Magazine; // Intersection
  
  const book: Book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
  };

    const magazine: Magazine = {
        name: "National Geographic",
        editor: "Susan Goldberg",
    };
 const BookOrMagazine1:BookOrMagazine = {
     
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        name: "National Geographic",
        
 }
 const BookAndMagazine1:BookAndMagazine = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    name: "National Geographic",
    editor: "Susan Goldberg",
} 
 console.log(BookOrMagazine1);
 
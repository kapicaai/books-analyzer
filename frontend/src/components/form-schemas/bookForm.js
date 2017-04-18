const bookFormSchema = {
    title: "Add new book",
  type: "object",
  required: ["name", "text"],
  properties: {
    name: {
        type: "string", 
        title: "Title"
    },
    author: {
        type: "string", 
        title: "Author"
    },
    year: {
        type: "integer",
        title: "Year"
    },
    image: {
        type: "string",
        format: "data-url",
        title: "Picture of a book"
    },
    text: {
        type: "string",
        format: "data-url",
        title: "Text of a book (txt)"
    }
  }
};

export {bookFormSchema};
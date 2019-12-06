interface Book {
  id: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    description: string;
    imageLinks: {
      smallThumbnail: string;
    };
  };
}

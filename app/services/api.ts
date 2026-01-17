import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';
export const fetchNotes = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Błąd podczas pobierania notatek:", error);
    throw error;
  }
};

export const saveNote = async (title: string, body: string) => {
  try {
    const response = await axios.post(API_URL, {
      title,
      body,
      userId: 1, // wymagane przez JSONPlaceholder
    });
    return response.data;
  } catch (error) {
    console.error("Błąd podczas zapisywania notatki:", error);
    throw error;
  }
};

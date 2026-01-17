import { createContext, ReactNode, useState } from 'react';

type Note = {
  id: string;
  title: string;
  body: string;
  photo: string | null;
};

type NotesContextType = {
  notes: Note[];
  addNote: (note: Note) => void;
};

export const NotesContext = createContext<NotesContextType>({
  notes: [],
  addNote: () => {},
});

export const NotesProvider = ({ children }: { children: ReactNode }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (note: Note) => {
    setNotes([...notes, note]);
  };

  return (
    <NotesContext.Provider value={{ notes, addNote }}>
      {children}
    </NotesContext.Provider>
  );
};

import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import { useEffect, useState } from 'react';

import Search from './components/search';
import Header from './components/Header';

const App = () => {
  const [darkMode, setDarkMode] = useState('false');
  const [searchText, setSearchText] = useState('');
  const [lightTheme, setLightTheme] = useState('');
  const [darkTheme, setDarkTheme] = useState('');
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'This is my first note!',
      date: '15/04/2021',
    },
    {
      id: nanoid(),
      text: 'This is my second note!',
      date: '21/04/2021',
    },
    {
      id: nanoid(),
      text: 'This is my third note!',
      date: '28/04/2021',
    },
    {
      id: nanoid(),
      text: 'This is my new note!',
      date: '30/04/2021',
    },
  ]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));

    if (savedNotes) {
      setNotes(savedNotes);
    }
    console.log(notes);
  }, []);

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  }, [notes]);

  const AddNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  if (document.querySelector('#main') && !darkMode) {
    document.querySelector('#main').style.backgroundColor = lightTheme;
  }
  if (document.querySelector('#main') && darkMode) {
    document.querySelector('#main').style.backgroundColor = darkTheme;
  }

  return (
    <div className={`ab ${darkMode && 'dark-mode'}`} id="main">
      <div className="container">
        <Header
          handleDarkMode={setDarkMode}
          handleLightTheme={setLightTheme}
          handleDarkTheme={setDarkTheme}
          lightTheme={lightTheme}
          darkTheme={darkTheme}
        />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={AddNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;

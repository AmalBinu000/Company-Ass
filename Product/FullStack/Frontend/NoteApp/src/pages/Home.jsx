import React, { useState } from 'react';
import NoteList from '../components/NoteList';
import CreateNote from '../components/CreateNotes';

const Home = () => {
  const [reloadFlag, setReloadFlag] = useState(false);

  const refreshNotes = () => {
    setReloadFlag(prev => !prev); // flip the flag to trigger refresh
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start p-8">
      <div className="max-w-2xl w-full space-y-8">
        <CreateNote onNoteCreated={refreshNotes} />
        <NoteList reloadFlag={reloadFlag} />
      </div>
    </div>
  );
};

export default Home;

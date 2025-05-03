import React, { useEffect, useState } from 'react';
import { fetchNotes, deleteNotes, updateNotes } from '../api/notes';

const NoteList = ({ reloadFlag }) => {
  const [notes, setNotes] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({ title: '', content: '' });

  useEffect(() => {
    const getNotes = async () => {
      try {
        const response = await fetchNotes();
        setNotes(response.data);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };

    getNotes();
  }, [reloadFlag]);

  const handleDelete = async (id) => {
    try {
      await deleteNotes(id);
      setNotes(notes.filter(note => note._id !== id));
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  const startEdit = (note) => {
    setEditingId(note._id);
    setEditData({ title: note.title, content: note.content });
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (id) => {
    try {
      await updateNotes(id, editData);
      setEditingId(null);
      setEditData({ title: '', content: '' });
      // Refresh locally
      setNotes(notes.map(n => (n._id === id ? { ...n, ...editData } : n)));
    } catch (error) {
      console.error('Error updating note:', error);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">All Notes</h2>
      {notes.length === 0 ? (
        <p>No notes available.</p>
      ) : (
        <ul className="space-y-4">
          {notes.map((note) => (
            <li key={note._id} className="bg-white p-4 shadow rounded-md">
              {editingId === note._id ? (
                <>
                  <input
                    name="title"
                    value={editData.title}
                    onChange={handleEditChange}
                    className="w-full p-1 mb-2 border rounded"
                  />
                  <textarea
                    name="content"
                    value={editData.content}
                    onChange={handleEditChange}
                    className="w-full p-1 mb-2 border rounded"
                  />
                  <button
                    onClick={() => handleEditSubmit(note._id)}
                    className="bg-green-600 text-white px-2 py-1 rounded mr-2"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="bg-gray-400 text-white px-2 py-1 rounded"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <h3 className="font-semibold">{note.title}</h3>
                  <p>{note.content}</p>
                  <div className="mt-2 space-x-2">
                    <button
                      onClick={() => startEdit(note)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(note._id)}
                      className="bg-red-600 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NoteList;

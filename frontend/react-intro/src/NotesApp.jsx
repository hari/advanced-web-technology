import { Folder, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

/**
 * Functional components
 * Props
 * Conditional rendering
 * Short circuiting
 * Event handling (Callback function)
 * State
 * Component composition
 * State lifting/props drilling
 */

function FolderItem({ active, folder, onClick }) {
  const hasNotes = Boolean(folder?.notes?.length);

  return (
    <button
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        border: '0 none',
        gap: '12px',
        padding: '12px',
        backgroundColor: active ? 'yellow' : 'white',
      }}
      onClick={onClick}
    >
      <span>
        <Folder />
      </span>
      <span>{folder.title}</span>

      {hasNotes && <ChevronRight />}
    </button>
  );
}

const sampleFolders = [
  {
    id: 'folder-1',
    title: 'All iCloud',
  },
  {
    id: 'folder-2',
    title: '',
    notes: [],
  },
  {
    id: 'folder-3',
    title: 'AWT',
    notes: [
      {
        id: 'note-1',
        title: 'Note 1',
        content: 'This is the content of note 1',
      },
      {
        id: 'note-2',
        title: 'Note 2',
        content: 'This is the content of note 2',
      },
    ],
  },
];

function FolderList({ folders, activeFolder, setActiveFolder }) {
  return (
    <div style={{ minWidth: '250px' }}>
      {folders.map((folder) => (
        <FolderItem
          active={folder.id === activeFolder?.id}
          key={folder.id}
          folder={folder}
          onClick={() => setActiveFolder(folder)}
        />
      ))}
    </div>
  );
}

function NoteItem({ note, activeNote, setActiveNote }) {
  return (
    <button
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        border: '0 none',
        backgroundColor: activeNote?.id === note.id ? 'yellow' : 'white',
      }}
      onClick={() => setActiveNote(note)}
    >
      <h4>{note.title}</h4>
    </button>
  );
}

function NotesList({ activeFolder, activeNote, setActiveNote }) {
  useEffect(() => {
    console.log('Notes list mounted', activeFolder?.title);
    return () => {
      console.log('Notes list unmounted', activeFolder?.title);
    };
  }, [activeFolder?.title]);

  return (
    <div
      style={{
        minWidth: '250px',
      }}
    >
      {activeFolder?.notes?.map((note) => {
        return (
          <NoteItem
            activeNote={activeNote}
            setActiveNote={setActiveNote}
            note={note}
            key={note.id}
          />
        );
      })}
    </div>
  );
}

export default function NotesApp() {
  const [activeFolder, setActiveFolder] = useState(null);
  const [activeNote, setActiveNote] = useState(null);

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <FolderList
        folders={sampleFolders}
        activeFolder={activeFolder}
        setActiveFolder={(folder) => {
          setActiveFolder(folder);
          setActiveNote(null);
        }}
      />

      <NotesList
        activeNote={activeNote}
        setActiveNote={setActiveNote}
        activeFolder={activeFolder}
      />

      <div>
        {activeNote ? (
          <div>
            <h1>{activeNote.title}</h1>
            <p>{activeNote.content}</p>
          </div>
        ) : null}
      </div>
    </section>
  );
}

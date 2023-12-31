import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <span className="text">{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          className="delete-icon"
          size="1.5em"
          onClick={() => handleDeleteNote(id)}
        />
      </div>
    </div>
  );
};
export default Note;

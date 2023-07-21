import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState('');
  var Note_length = 200;

  const [noteLength, setnoteLength] = useState('200');
  const handleChange = (e) => {
    if (e.target.value.length <= 200) {
      setNoteText(e.target.value);
      setnoteLength(200 - e.target.value.length);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText('');
      setnoteLength(200);
    }
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a Note..."
        id="text"
        onChange={handleChange}
        value={noteText}
      ></textarea>

      <div className="note-footer">
        <small>{noteLength} Remaining.</small>
        <button className="save" onClick={handleSaveClick}>
          save
        </button>
      </div>
    </div>
  );
};
export default AddNote;



const fs = require('fs');

 var fetchNotes = () => {
    try {
      var textOne = fs.readFileSync('json_file.json');
      return JSON.parse(textOne);
    } catch (e) {
      console.log('no file on the record')
      return [];
    }
 }

 var saveNotes = (notes) => {
    fs.writeFileSync('json_file.json', JSON.stringify(notes))
 }

var addNote = (title, body) => {
  var notes = fetchNotes();
    var note = {
      title,
        body
  };

 var duplicateFile = notes.filter( (note) => note.title === title);

  if (duplicateFile.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }
}

var getAll = () => {
  return fetchNotes();
}

var getRead = (title) => {
  var notes = fetchNotes();
    var readNotes = notes.find( (note) => note.title === title );
    return readNotes;
}


var removeNote = (title) => {
  var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title)
    console.log(notes.length, filteredNotes.length)
     saveNotes(filteredNotes)
   
   
    // if(filteredNotes.length == notes.length){
    //   console.log('its not true');
    // } else {
    //   console.log('its was removed')
    // }
    return notes.length !== filteredNotes.length;
}




module.exports = { 
  addNote, 
  getAll, 
  getRead,
  removeNote 
}
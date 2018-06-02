
// PLEASE NAME THIS FILE {  app.js   }

const fs = require('fs');
const _ = require('lodash');
const notes = require('./note.js');
// const yargs = require('yargs');
const yargs = require('yargs');

const titleOptions = { describe: 'title of note', demand: true,  alias: 't' };
const bodyOptions = { describe: 'body content', demand: 'true', alias: 'b' };


const argv = yargs
    .command('add', 'add a new note', {
        title: titleOptions,
          body: bodyOptions
      })
    .command('list', 'list all notes', {

    })
    .command('read', 'read a note', {
         title: titleOptions,
           body: bodyOptions
    })
    .command('remove', 'remove a note', {
      title: titleOptions,
    })
    .help()
      .argv


// var command = process.argv[2];
var command = argv._[0];

// console.log('Command: ', command)
// console.log('Yargs: ', argv)



if (command === 'add'){
  var note = notes.addNote(argv.title, argv.body);
    if(note){
      console.log(note, ' was added')
    } else {
      console.log('no data was added')
    }

} else if (command === 'list') {
  var allNote = notes.getAll();
    allNote.forEach( (note) => {
      console.log(note)
    })
  




} else if (command === 'read') {
  var note = notes.getRead(argv.title);
    if(note){
      console.log('Note Found');
    } else {
      console.log('Nothing is found');
    }


} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'it was removed' : 'nothing was removed';
    console.log(message)




}

// in the terminal text
// node app.js add --title="Title" --body="Cuerpo"

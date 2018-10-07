//Create a function that returns an empty object.
const user = () => {
    var user = {};
    user.time = 12;
    return user;
};
var timeObject = user();
console.log(timeObject);

//warmup1

const paint = (color1, color2, color3) => {
    var bla = [{ color: color1 }, { color: color2 }, { color: color3 }];
    return bla;
}

var colorObjects = paint();
var colors = paint('blue', 'yellow', 'purple')

for (let i = 0; i < colors.length; i++) {
    let obj = colors[i];
    console.log(obj.color);
}

//warmup2

function days() {

    const weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";

    const currentDate = new Date();
    const numberOfDay = currentDate.getDay();
    const futureDate = 6;
    const newDay = (numberOfDay + futureDate) % 7;
    console.log(weekdays[newDay]);

}
days();

//NOnoN0nOYes (Note taking app)

var notes = [];

function addNote(note, noteId) {
    var obj = {
        note,
        noteId
    }

    notes.push(obj);
}

addNote("Marwan", 2);
addNote("Majd", 3);
addNote("Timo", 4);

console.log(notes);

function getNoteFromId(id) {
    if (id === undefined || typeof id !== "number") {
        console.log("ERROR");
        return;
    }

    for (let index = 0; index < notes.length; index++) {
        if (notes[index].noteId == id) {
            return notes[index];
        }
    }

    return null; // wrong id
}


console.log(getNoteFromId(4));

function showAllNotes() {
    for (let index = 0; index < notes.length; index++) {
        console.log(`The note with id: ${notes[index].noteId}, has the following note text: "${notes[index].note}".`);
    }
}
showAllNotes();

function deleteItem(id) {
    const func = note => {
        return id != note.noteId;
    }
    const newArray = notes.filter(func);
    console.log(newArray);
}

function showAllNotes() {
    for (let index = 0; index < notes.length; index++) {
        console.log(`The note with id: ${notes[index].noteId}, has the following note text: "${notes[index].note}".`);
    }
}

//CactusIO-interactive (Smart phone usage app)

let activities = [];
function addActivity(activity, duration, date = new Date()) {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var dateString = date.toLocaleDateString("en-US", options);
    activities.push({ date: dateString, activity, duration });
}

var human = {
    name: "Marwan",
    age: 21
}

addActivity('Reading', 15);
addActivity('walking', 20);
addActivity('video games', 60);
const yesterdayDate = new Date();
yesterdayDate.setDate(yesterdayDate.getDate() - 1);
addActivity('Instagram', 60, yesterdayDate);
addActivity('Youtube', 20, yesterdayDate);

console.log(activities);

// show my status
var sumOfMinutes = 0;

function showStatus() {
    if (activities === undefined || activities.length == 0) {
        console.log("Add some activities before calling showStatus");
        return;
    }

    for (let index = 0; index < activities.length; index++) {
        sumOfMinutes += activities[index].duration;
    }
    console.log(`You have added ${activities.length} activities. They amount to ${sumOfMinutes} of usage`);

}
showStatus();

// function is  showing the number of actitivies for that specific day.

function specificDay(date) {
    return activities.filter(activity => activity.date == date);
}
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var transformDate = yesterdayDate.toLocaleDateString("en-US", options);
console.log(specificDay(transformDate));

//limit

function userLimit(limit) {
    if (limit < sumOfMinutes) {
        console.log("bruh live your life");
    }
}
userLimit(60);

/*
Greeting.js@0.1.8
Author : Adeoye Adefemi Opeoluwa
Github : https://github.com/opeolluwa
*/
//Get the Day from Client Machine
const _d = new Date();
const day = _d.getDay();
const hour = _d.getHours();
const new_month = _d.getDate() == 1;
const christmas = _d.getMonth() == 11 && _d.getDate() == 25;
const valentine = _d.getMonth() == 1 && _d.getDate() == 14;
// let message;
// an Util Function to Get Random Items in This Case, Greeting Options
function _r(array: string[]) {
    const index = Math.round(Math.random() * (array.length - 1));
    return array[index];
}
//COLLECTION OF POSSIBLE VALUES
const options = {
    monday: [
        "Hello Monday!",
        "Monday is here!",
        "Show some Monday love",
        "Another fresh start",
    ],
    tuesday: ["Hello"],
    wednesday: ["Welcome Back"],
    thursday: [
        "#TBT",
        "Throwback Thursday😋",
        "Time for throwback",
        "let's do some throwback",
        "Hectic week, huh? ",
    ],
    friday: [
        "#TGIF",
        "Weekend is here!",
        "Have a nice weekend",
        "How has the week been?",
        "Thank God It's Friday",
        "It's weekend",
        "Hello",
        "Weekend is near",
    ],
    saturday: [
        "You deserve some break",
        "Take timeout, enjoy",
        "Hangout! It's saturday",
        "#Owanbe Saturday😋",
        "Still indoor? Hangout!",
        "You deserve a great time",
        "How about some treats?",
    ],
    sunday: [
        "Happy New Week!",
        "Happy Sunday!",
        "It's a new week💃💃",
        "New week wishes",
    ],
    //---------------------------DAYTIME---------------_
    morning: [
        "Blessed morning",
        "Good Morning",
        "Trust you slept well",
        "Beautiful morning",
        "A new day",
        "Have a fruitful day",
    ],
    day_break: [
        "How is your day going",
        "How has the day being",
        "A fresh morning, huh?",
        "How's the weather?",
        "Howdy?",
    ],
    afternoon: [
        "Good afternoon!",
        "How's the weather outside",
        "How is your day going",
        "How has work been?",
        "How has your day been?",
        "How is your day going",
        "How has the day been",
        "How's the weather?",
        "Howdy?",
    ],
    evening: ["Good evening", "How was your day", "How did your day go"],
    midnight: [
        "You up so late ?",
        "You should probably be in bed",
        "You should probably be in bed by now",
        "Surprised to see you up so late",
        "Up so early, huh?",
        "Up so early?",
        "Working Late",
        "Aren't you sleeping?",
    ],
    //--------------------------------Special Occasion--------------------
    new_month: [
        "Happy new month!",
        "Blessed new Month",
        "Have a Happy new month!",
        "It's a new month!",
    ],
    new_year: ["Happy new year", "Happy Holidays"],
    christmas: ["Merry Christmas", "Season greetings"],
    //TODO: boxing_day: [],
    valentine: ["It's Valentine", "Happy Valentine"],
    other: ["Holla!", "Hello!", "Welcome", "Howdy?", "Ciao!"],
};
//greetings = greetings
const greetings = {
    time: "",
    other: "",
    occasion: "",
    day: "",
};
//HANDLE DAY PROCESSING
switch (day) {
    //If Sunday
    case 0:
        greetings.day = _r(options.sunday);
        break;
    case 1:
        //If Monday
        greetings.day = _r(options.monday);
        break;
    //If Thursday
    case 4:
        greetings.day = _r(options.thursday);
        break;
    //If Friday
    case 5:
        greetings.day = _r(options.friday);
        break;
    //If Saturday
    case 6:
        greetings.day = _r(options.saturday);
        break;
    default:
        greetings.day = "";
        break;
}
//HANDLE TIME PROCESSING :: GREET BY HOUR: MORNING NIGHT, AFTERNOON & EVENING
// switch (hour) {
//If between 6:00am & 8:00am
if (Number(hour) >= 6 && Number(hour) <= 8) {
    greetings.time = _r(options.morning);
}
//if between 8:00AM & 10:00AM
else if (hour >= 8 && hour <= 10) {
    greetings.time = _r(options.day_break);
}
//if afternoon 12:00PM - 3:00PM
else if (hour >= 12 && hour <= 15) {
    greetings.time = _r(options.afternoon);
}
//if evening : 4:00PM - 8:00PM
else if (hour >= 16 && hour <= 20) {
    greetings.time = _r(options.evening);
}
//if midnight between 1:00AM - 3:00AM
else if (hour >= 1 && hour <= 3) {
    greetings.time = _r(options.midnight);
} else {
    greetings.time = "";
}
// HANDLE SPECIAL OCCASIONS
greetings.occasion = new_month
    ? _r(options.new_month)
    : //christmas
    christmas
        ? _r(options.christmas)
        : //valentine
        valentine
            ? _r(options.valentine)
            : "";
//HANDLE EXCEPTION
greetings.other = _r(options.other);
// set in message and export
const message =
    greetings.occasion || greetings.time || greetings.day || greetings.other;
// console.log(message);
export default message as String;

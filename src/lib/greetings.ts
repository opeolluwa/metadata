/*
Greeting.js@0.1.0
Author : Adeoye Adefemi Opeoluwa
Github : https://github.com/opeolluwa
*/
//Get the Day from Client Machine
var _d = new Date();
var day = _d.getDay();
var hour = _d.getHours();
var new_month = (_d.getDate() == 1);
var christmas = ((_d.getMonth() == 11) && (_d.getDate() == 25));
var valentine = ((_d.getMonth() == 1) && (_d.getDate() == 14));
var message;
// an Util Function to Get Random Items in This Case, Greeting Options
function _r(array: string | any[]) {
    var index = Math.round(Math.random() * (array.length - 1));
    return array[index];
}
//COLLECTION OF POSSIBLE VALUES
var options = {
    monday: [
        "Hello Monday!",
        "Monday is here!",
        "Show some Monday love",
        "Another fresh start"
    ],
    tuesday: [
        "Hello"
    ],
    wednesday: [
        "Welcome Back"
    ],
    thursday: [
        "#TBT",
        "Throwback Thursday😋",
        "Time for throwbabk",
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
        "Hello", "Weekend is near",
    ],
    saturday: [
        "You deserve some break",
        "Take timeout, enjoy",
        "Hangout! It's saturday",
        "#Owanbe Saturday😋",
        "Still indoor? Hangout!",
        "You deserve a great time",
        "How about some treats?"
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
        "Bonjour!",
        "Trust you slept well",
        "Beautiful morning",
        "A new day",
        "Have a fruitful day"
    ],
    day_break: [
        "How is your day going?",
        "How has the day been?",
        "A fresh morning, huh?",
        "How's the weather?",
        "How's the weather outside?",
        "Howdy?"
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
        "Howdy?"
    ],
    evening: [
        "Good evening",
        "How was your day",
        "How did your day go",
        "Bonsoir"
    ],
    midnignt: [
        "You up so late ?",
        "You should probably be in bed",
        "You should probably be in bed by now",
        "Surprised to see you up so late",
        "Up so early huh ?",
        "Hi there!",
        "Aren't you sleeping?"
    ],
    //--------------------------------Special Occasion--------------------
    new_month: [
        "Happy new month!",
        "Blessed new Month",
        "Have a Happy new month!",
        "It's a new month!"
    ],
    new_year: [
        "Happy new year"
    ],
    christmas: [
        "Merry Christmas"
    ],
    //TODO: boxing_day: [],
    valentine: [
        "Spread da love"
    ],
    other: [
        "Holla!",
        "Hello!",
        "Welcome",
        "Howdy?"
    ]
};
var greeting = {
    //If Sunday 
    day: (day == 0) ? _r(options.sunday) :
        //if monday
        (day == 1) ? _r(options.monday) :
            //if thursday
            (day == 4) ? _r(options.thursday) :
                //if friday 
                (day == 5) ? _r(options.friday) :
                    //if saturday
                    (day == 6) ? _r(options.saturday) :
                        '',
    //GREET BY HOUR: MORNING NIGHT, AFTERNOON & EVENING
    //If between 8:00am & 10:00am
    time: (hour >= 6 && hour <= 8) ? _r(options.morning) :
        //if between 8:00AM & 10:00AM
        (hour >= 8 && hour <= 10) ? _r(options.day_break) :
            //if afternoon 12:00PM - 3:00PM
            (hour >= 12 && hour <= 15) ? _r(options.afternoon) :
                //if evening : 4:00PM - 8:00PM
                (hour >= 16 && hour <= 20) ? _r(options.evening) :
                    //if midnight between 1:00AM - 3:00AM
                    (hour >= 1 && hour <= 3) ? _r(options.midnignt) : '',
    //SPECIAL OCCASIONS
    occasion: (new_month) ? _r(options.new_month) :
        //christmas
        (christmas) ? _r(options.christmas) :
            //valentine
            (valentine) ? _r(options.valentine) : '',
    other: _r(options.other)
};
// set message in ths o
message = greeting.occasion || greeting.time || greeting.day || greeting.other;
// console.log(message)
export  default { message };

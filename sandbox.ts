export const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/metadata', { useNewUrlParser: true }, (err: string) => {
    if (!err) {
        console.log('Successfully Established Connection with MongoDB')
    }
    else {
        console.log('Failed to Establish Connection with MongoDB with Error: ' + err)
    }
});


import { User } from "./src/models/User";

const user = new User({
    name: "opeolluwa",
    email: "adefemiadeoye@yahoo.com"
})

async function main() {

    try {
        await user.save()
        console.log("saved")
    } catch (error) {
        console.log(error.message)
    }


    try {
        const users = await User.find({})
        console.log(users)
    }
    catch (error) {
        console.log(error.message)
        
    }
}

main()
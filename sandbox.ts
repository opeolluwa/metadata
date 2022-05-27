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
import { Resource } from "./src/models/Resource";
import { metadata } from "./src/seeders/resouce";
import console from "console";


async function main() {

    try {
        for (const data of metadata) {
            const meta = new Resource({ ...data })
            await meta.save()
            console.log("saved")
        }
    } catch (error) {
        console.log(error.message)
    }
}

// main()
async function find() {
    const query = Resource.find();
    const response = await query.$where("this.category.includes('gradient')")
    console.log(response)
}

find()

main()
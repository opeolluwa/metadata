import { MetaDataInterface } from "./../types/meta-resource-types";
import { Resource } from "./../models/Resource";
import ImageKit from "imagekit";
import path from "path";
export const mongoose = require('mongoose');
mongoose.connect('', { useNewUrlParser: true }, (err: string) => {
    if (!err) {
        console.log('Successfully Established Connection with MongoDB')
    }
    else {
        console.log('Failed to Establish Connection with MongoDB with Error: ' + err)
    }
});

//SDK initialization
const imagekit = new ImageKit({
    publicKey: String(process.env.FILE_SERVER_PUBLIC_KEY),
    privateKey: String(process.env.FILE_SERVER_PRIVATE_KEY),
    urlEndpoint: String(process.env.FILE_SERVER_END_POINT)
});



export async function saveResource(model: MetaDataInterface) {
    /**
     * extract the following fields from the argument
     * generate avatarUrl for the resource
     * once generated, save the resource and log the status
     */
    const { name, url, description, category } = model
    const fileName = name.replaceAll(" ", "-") + ".png"
    //generate and save the image
    imagekit.upload({
        file: `https://v1.nocodeapi.com/opeolluwa/screen/XsafwFbNBDzQTBFT/screenshot?url=${url}`,
        fileName,
    }).then(async response => {
        // return response;
        console.log(response)

        //save the resource
        const resource = new Resource({ name, url, description, category, avatarUrl: response.thumbnailUrl })
        await resource.save()
        console.log("saved inner")
        return
    }).catch(error => {
        console.log(error);
    });

}


const sample: MetaDataInterface = {
    name: "Mobbin",
    url: "https://mobbin.design/",
    description: "Mobbin is a hand-picked collection of the latest mobile design patterns from apps that reflect the best in design.",
    avatarUrl: "string",
    category: ["design inspiration"],

}


// saveResource(sample)
import { metadata } from "./../seeders/resouce"

async function main() {

    try {
        for (const data of metadata) {
            await saveResource({ ...data })
            console.log("saved outer")
        }
    } catch (error) {
        console.log(error.message)
    }
}

main()
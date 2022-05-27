import axios from "axios"
import { uploadSnapShot } from "./upload-snapshot";

export async function createSnapShot(url: string, fileName:string) {
  axios({
    method: 'get',
    url: `https://v1.nocodeapi.com/opeolluwa/screen/XsafwFbNBDzQTBFT/screenshot?url=${url}`,
    params: {},
  }).then(function (response) {
    // handle success
    uploadSnapShot(response.data, fileName)
    return;
  }).catch(function (error) {
    // handle error
    console.log(error.message);
    return { error: true, message: "an unexpected error occurred" }
  })

}


//  createSnapShot("https://edwork.vercel.app", "edwork.png")

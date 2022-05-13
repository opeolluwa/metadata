import captureWebsite from "capture-website"

//option to decide the aspect ratio of the image to generate
interface Options {
    width: number,
    height: number
}
/**
 * create snapshot of webpages
 * @param url the url of website whose snapshot is required
 */
export default class Snapshot {
    static async generate(url: string) {
        const shot = await captureWebsite.base64(url)
        return shot;
    }
}
import axios from "axios";

//get the input feeds
const usernameFeed = (<HTMLInputElement>document.getElementById("username"));
const passwordFeed = (<HTMLInputElement>document.getElementById("password"));
const registrationForm = (<HTMLFormElement>document.querySelector("#account form"))
//parse the value
type input = string | undefined;
const username: input = usernameFeed?.value;
const password: input = passwordFeed?.value;
console.log("hey fool")

registrationForm.addEventListener("submit", async () => {
    console.log("hey fool")

    const response = await axios.post("/auth/user/sign-up", { username, password })
    console.log(response);
})

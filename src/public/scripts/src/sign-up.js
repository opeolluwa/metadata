"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
//get the input feeds
const usernameFeed = document.getElementById("username");
const passwordFeed = document.getElementById("password");
const registrationForm = document.querySelector("#account form");
const username = usernameFeed === null || usernameFeed === void 0 ? void 0 : usernameFeed.value;
const password = passwordFeed === null || passwordFeed === void 0 ? void 0 : passwordFeed.value;
console.log("hey fool");
registrationForm.addEventListener("submit", () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("hey fool");
    const response = yield axios_1.default.post("/auth/user/sign-up", { username, password });
    console.log(response);
}));
//# sourceMappingURL=sign-up.js.map
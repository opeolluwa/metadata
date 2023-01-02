export function hideEmailCharacters(email: string) {
    let encryptedEmail = email.split("@")[0];
    encryptedEmail = `${encryptedEmail.substring(
        0,
        Math.floor(encryptedEmail.length / 2)
    )}${"*".repeat(
        encryptedEmail.substring(Math.ceil(encryptedEmail.length / 2), -1).length
    )}@${email.split("@")[1]}`;
    return encryptedEmail;

}
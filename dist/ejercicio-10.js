function isValidUsername(user) {
    const userLen = user.length;
    if ((userLen >= 4) && (userLen <= 30)) {
        if ((user[0] != "_") && (user[userLen - 1] != "_")) {
            if ((/[A-Z]/.test(user)) && (/[a-z]/.test(user)) && (/[0-9]/.test(user)) && (/[$_-]/.test(user))) {
                if ((!/[A-Z][A-Z][A-Z]/.test(user)) && (!/[a-z][a-z][a-z]/.test(user)) && (!/[0-9][0-9][0-9]/.test(user)) && (!/[$_-][$_-][$_-]/.test(user))) {
                    return true;
                }
            }
        }
    }
    return false;
}
console.log(`El usuario alu01 es valido? : ${isValidUsername("alu01")}`);
console.log(`El usuario u__hello$122__ es valido? : ${isValidUsername("u__hello$122__")}`);
console.log(`El usuario Alu01 es valido? : ${isValidUsername("Alu01")}`);
console.log(`El usuario J$$_c0 es valido? : ${isValidUsername("J$$_c0")}`);
console.log(`El usuario J$$c0 es valido? : ${isValidUsername("J$$c0")}`);
console.log(`El usuario u__hi$12__S es valido? : ${isValidUsername("u__hi$12__S")}`);

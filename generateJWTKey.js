const crypto = require('crypto');

const generateJWTSecret = () => {
    return crypto.randomBytes(32).toString('hex'); // Generates a 256-bit (32-byte) random string
};

console.log(generateJWTSecret());

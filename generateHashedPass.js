
const bcrypt = require('bcrypt');

async function generateHashedPassword() {
    const password = 'bogutu123';
    try {
        const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds
        console.log('Hashed password:', hashedPassword);
    } catch (error) {
        console.error('Error generating hashed password:', error);
    }
}

generateHashedPassword();

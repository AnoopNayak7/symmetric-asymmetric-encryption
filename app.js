const express = require('express');
const crypto = require('crypto');

const app = express();
app.use(express.json());

// Symmetric Encryption (AES)
const symmetricKey = crypto.randomBytes(32); // 256-bit key
const symmetricIv = crypto.randomBytes(16);  // Initialization Vector

// Asymmetric Encryption (RSA)
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
});

// Symmetric Encryption Example
app.post('/symmetric/encrypt', (req, res) => {
    const { plaintext } = req.body;

    const cipher = crypto.createCipheriv('aes-256-cbc', symmetricKey, symmetricIv);
    let encrypted = cipher.update(plaintext, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    res.json({ encrypted });
});

app.post('/symmetric/decrypt', (req, res) => {
    const { encrypted } = req.body;

    const decipher = crypto.createDecipheriv('aes-256-cbc', symmetricKey, symmetricIv);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    res.json({ decrypted });
});

// Asymmetric Encryption Example
app.post('/asymmetric/encrypt', (req, res) => {
    const { plaintext } = req.body;

    const encrypted = crypto.publicEncrypt(publicKey, Buffer.from(plaintext));

    res.json({ encrypted: encrypted.toString('hex') });
});

app.post('/asymmetric/decrypt', (req, res) => {
    const { encrypted } = req.body;

    const decrypted = crypto.privateDecrypt(privateKey, Buffer.from(encrypted, 'hex'));

    res.json({ decrypted: decrypted.toString('utf8') });
});

// Export the app
module.exports = app;

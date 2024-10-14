

# Symmetric and Asymmetric Key Encryption Demo

This project demonstrates the use of **symmetric key encryption** and **asymmetric key encryption** using Node.js and Express. It provides basic APIs to encrypt and decrypt data using these methods.

## What is Symmetric Encryption?

Symmetric encryption uses a single secret key for both encryption and decryption of the data. It’s faster and suitable for encrypting large amounts of data, but both the sender and receiver must securely share and store the same key.

### Limitation:
- **Key Distribution Problem**: The same key needs to be securely shared between the sender and receiver, which can pose a security risk.
  
## What is Asymmetric Encryption?

Asymmetric encryption uses a pair of keys: a **public key** for encryption and a **private key** for decryption. The public key is shared openly, while the private key remains secure with the receiver. This method is generally slower than symmetric encryption but eliminates the key distribution problem.

### Limitation:
- **Performance**: Asymmetric encryption is computationally slower compared to symmetric encryption, making it less efficient for large amounts of data.

## Why are Both Required?

In practice, a combination of both encryption methods is often used. Symmetric encryption is used to encrypt the actual data, while asymmetric encryption is used to securely exchange the symmetric key. This ensures both speed and security.

## Steps to Run the Project

1. Install the dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   node server.js
   ```

The server will run on `http://localhost:3000`.

## Testing the API

You can test the API using `curl` commands or by using Postman.

- For **curl commands** or to **test the API using postman**, follow the instructions in the 
  [Postman Documentation](https://documenter.getpostman.com/view/12715576/2sAXxTaVU4).

---
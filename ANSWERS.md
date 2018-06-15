<!-- Answers to the Short Answer Essay Questions go here -->

1. Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

Middleware: software that acts as a bridge between an operating system or database and applications, especially on a network.

Sessions: a server-side storage of information that is desired to persist throughout the user's interaction with the web site or web application.

bcrypt: is a password hashing function designed by Niels Provos and David Mazières, based on the Blowfish cipher and presented at USENIX in 1999. ... The bcrypt function is the default password hash algorithm for OpenBSD and other systems including some Linux distributions such as SUSE Linux.(Wikipedia)

JWT are JSON web tokens, or rather pieces of encrypted data that contain three parts. These tokens can be used to verify the authorization status of a user, and can be stored on the client securely.

2. What does bcrypt do in order to prevent attacks?

Generate a random salt. A "cost" factor has been pre-configured. Collect a password. Derive an encryption key from the password using the salt and cost factor. Use it to encrypt a well-known string. Store the cost, salt, and cipher text. Because these three elements have a known length, it's easy to concatenate them and store them in a single field, yet be able to split them apart later.

3. What are the three parts of the JSON Web Token?

a. Header: contains the type and algorithm. 
b. Payload: contains data that can be customized by the developer. 
c. Signature: contains a string which enables third parties to identify if the token has been changed.
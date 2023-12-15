# docker
## docker befehle
1. docker ps -a -> um zu zeigen dass leer
2. docker build . -t redirectmanager -> erstellt image
3. docker run -d `
 --name redirect `
 -p 127.0.0.1:3000:3000 `
 -v redirect-slugs:/usr/app/data `
 redirectmanager

 ## Postman
 1. GET all entries
 localhost:3000/entries -> unter Headers
 Authorization: very-secret-token

 2. GET entry by slug
 localhost:3000/google

3. POST new entry
localhost:3000/entry -> body raw
{
    "url": "https://www.amazon.de",
    "slug": "amazon"
}

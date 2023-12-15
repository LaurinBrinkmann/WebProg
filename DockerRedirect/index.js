const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const bodyParser = require('body-parser');


//Middelware
app.use(bodyParser.json());
const authenticate = (req, res, next) => {
    const token = req.headers.authorization;
    
    if (token === 'very-secret-token') {
    next();
    } else {
    res.status(401).json({ error: 'Unauthorized' });
    }
};

//Endpoints
// GET /entries - Alle Einträge aus der JSON-Datei ausgeben
app.get('/entries', authenticate, (req, res) => {
    const entries = JSON.parse(fs.readFileSync('./data/entries.json', 'utf8'));
    res.json(entries);
});

// GET /:slug - Eintrag mit der gegebenen Slug aus der Datei ausgeben
app.get("/:slug", (req, res) => {
    const { slug } = req.params;
    const entries = JSON.parse(fs.readFileSync('./data/entries.json', 'utf8'));
    
    if (entries[slug]) {
        res.redirect(entries[slug]);
    } else {
        res.status(404).json({ error: 'Slug not found' });
    }
});

// DELETE /entry/:slug - Eintrag mit der gegebenen Slug aus der Datei entfernen
app.delete('/entry/:slug', (req, res) => {
const { slug } = req.params;
const entries = JSON.parse(fs.readFileSync('./data/entries.json', 'utf8'));

if (entries[slug]) {
    delete entries[slug];
    fs.writeFileSync('./data/entries.json', JSON.stringify(entries, null, 2));
    res.json({ success: true });
} else {
    res.status(404).json({ error: 'Slug not found' });
}
});
  
// POST /entry - URL und Slug für die spätere Weiterleitung speichern
app.post('/entry', (req, res) => {
    const { url, slug } = req.body;

    // Wenn keine Slug mitgegeben wurde, generiere eine zufällige
    const newSlug = slug || generateRandomSlug();

    const entries = JSON.parse(fs.readFileSync('./data/entries.json', 'utf8'));
    entries[newSlug] = url;

    fs.writeFileSync('./data/entries.json', JSON.stringify(entries, null, 2));
    res.json({ slug: newSlug, url });
});
  
// Hilfsfunktion zum Generieren einer zufälligen Slug
function generateRandomSlug() {
    return Math.random().toString(36).substring(7);
}

app.listen(port, () => console.log(`Server listening on port ${port}!`));
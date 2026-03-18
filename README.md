# पांगरटाटी ग्रामपंचायत — Official Website

## Folder Structure

```
pangartati-gp/
├── index.html            ← Main HTML page
├── css/
│   └── styles.css        ← All CSS styles
├── js/
│   ├── data.js           ← Translation strings (Marathi + English) & form templates
│   └── main.js           ← Page rendering logic, form handling, scroll events
├── assets/
│   └── images/
│       └── README.md     ← Instructions for adding village photos
└── README.md             ← This file
```

## How to open

Just open `index.html` in any browser — no server needed.

## How to add photos

1. Copy your photo into `assets/images/`
2. In `index.html`, replace the placeholder:
   - `VILLAGE_IMG` → path to your village/hero photo
   - `SARPANCH_IMG` → path to the Sarpanch portrait

## How to update content

- **Text / translations** → Edit `js/data.js` (both `mr` and `en` objects)
- **Layout / styles** → Edit `css/styles.css`
- **Form logic / rendering** → Edit `js/main.js`

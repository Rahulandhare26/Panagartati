# Setup Instructions

## 1) Open the site locally

This is a static HTML site — no build step or server is required.

1. Open `index.html` in any browser.
2. (Optional) For a better development workflow, you can run a simple local server (e.g., `python -m http.server` or `npx serve`) and open `http://localhost:8000`.

---

## 2) Adding / updating content

- **Text / translations:** edit `js/data.js` (see `mr` + `en`).
- **Layout / styling:** edit `css/styles.css`.
- **App logic (forms, rendering, UI interactions):** edit `js/main.js`.

---

## 3) (Optional) Supabase form submissions

This project includes a small helper module at `js/supabase.js` for sending form submissions to Supabase.

### To enable it:

1. Create a Supabase project at https://app.supabase.com.
2. Create a table (example: `forms`) with at least:
   - `id` (uuid, PK, default `gen_random_uuid()`)
   - `created_at` (timestamp, default `now()`)
   - `form_type` (text)
   - `reference` (text)
   - `data` (jsonb)
3. Create a `.env` file in the project root containing:

   ```env
   SUPABASE_URL=https://<YOUR-PROJECT>.supabase.co
   SUPABASE_ANON_KEY=<YOUR-ANON-KEY>
   ```

4. Open `js/supabase.js` and set `SUPABASE_URL` and `SUPABASE_ANON_KEY` with your values.

5. (Optional) Update `js/main.js` to call `SupabaseHelpers.saveFormSubmission(...)` inside `submitForm()`.

---

## 4) Assets

- Add photos to `assets/images/`.
- In `index.html`, replace `VILLAGE_IMG` and `SARPANCH_IMG` placeholders with the correct paths.

# 💒 Boda — Jessenia & Gabriel

Wedding invitation website. All content is managed from a single file: **`data.js`**.  
GitHub Pages will **not** render this README on the live site (it only serves `index.html`).

---

## ✅ TODO — Things to Customize

All edits go in **`data.js`** unless noted otherwise.  
Check off each item as you complete it.

### 👫 Couple Info
| # | What | File | Line | Current Value |
|---|------|------|------|---------------|
| ☐ | Bride's name | `data.js` | 11 | `"Jessenia"` |
| ☐ | Groom's name | `data.js` | 12 | `"Gabriel"` |
| ☐ | Tagline | `data.js` | 14 | `"¡Nos casamos!"` |

### 📅 Date & Time
| # | What | File | Line | Current Value |
|---|------|------|------|---------------|
| ☐ | Display date text | `data.js` | 19 | `"Sábado 09 de Mayo, 2026"` |
| ☐ | Display time | `data.js` | 20 | `"7:00 PM"` |
| ☐ | ISO date (for countdown) | `data.js` | 22 | `"2026-05-09T19:00:00"` |

### ⛪ Ceremony (Church)
| # | What | File | Line | Current Value |
|---|------|------|------|---------------|
| ☐ | Church name | `data.js` | 27 | `"Iglesia de Ejemplo"` |
| ☐ | Church address | `data.js` | 28 | `"Calle Iglesia #456, Ciudad, Estado"` |
| ☐ | Ceremony time | `data.js` | 29 | `"7:00 PM"` |
| ☐ | Church Google Maps URL | `data.js` | 31 | `"https://maps.google.com/..."` |

### 🥂 Reception (Venue)
| # | What | File | Line | Current Value |
|---|------|------|------|---------------|
| ☐ | Reception venue name | `data.js` | 36 | `"Hacienda Los Jardines"` |
| ☐ | Reception address | `data.js` | 37 | `"Calle Ejemplo #123, Ciudad, Estado"` |
| ☐ | Reception time | `data.js` | 38 | `"9:00 PM"` |
| ☐ | Reception Google Maps URL | `data.js` | 40 | `"https://maps.google.com/..."` |

### 🖼️ Images
| # | What | File | Line | Current Value |
|---|------|------|------|---------------|
| ☐ | Gallery photos (array) | `data.js` | 46–52 | Unsplash placeholder URLs |
| ☐ | Full album link | `data.js` | 54 | `"#"` |
| ☐ | Hero section background | `index.html` | 96 | Unsplash placeholder URL |

> **Tip — Images:** You can use local images (e.g., `images/photo1.jpg`) or hosted URLs. For Google Drive images, use:  
> `https://drive.google.com/uc?export=view&id=YOUR_FILE_ID`

### 🔗 Interactive Links (RSVP, Photos, Music)
| # | What | File | Line | Current Value |
|---|------|------|------|---------------|
| ☐ | **RSVP link** (Google Form, WhatsApp, etc.) | `data.js` | 62 | `"#"` |
| ☐ | Upload photos link | `data.js` | 60 | `"#"` |
| ☐ | Suggest a song link | `data.js` | 64 | `"#"` |

### 🎵 Background Music
| # | What | File | Line | Current Value |
|---|------|------|------|---------------|
| ☐ | Background song URL | `data.js` | 97 | `''` (empty — no music) |

> A floating 🎵 button appears in the bottom-right corner if a `songUrl` is set. Visitors click it to play/pause.

> **Tip — Song from Google Drive:**
> 1. Upload your `.mp3` to Google Drive
> 2. Right-click → *Share* → *Anyone with the link*
> 3. Copy the link. It looks like: `https://drive.google.com/file/d/XXXXXXX/view`
> 4. Extract the file ID (`XXXXXXX`) and use this format:
>    ```
>    https://drive.google.com/uc?export=download&id=XXXXXXX
>    ```
> 5. Paste that URL as the `songUrl` value on line 97

### 👔 Event Info
| # | What | File | Line | Current Value |
|---|------|------|------|---------------|
| ☐ | Dress code | `data.js` | 69 | `"Formal / Elegante"` |
| ☐ | Kids policy message | `data.js` | 70 | `"Nuestro evento es exclusivamente..."` |

### 🎁 Gifts / Registry
| # | What | File | Line | Current Value |
|---|------|------|------|---------------|
| ☐ | Gifts intro message | `data.js` | 75 | `"Tu presencia es el mejor regalo..."` |
| ☐ | Bank transfer details | `data.js` | 80 | `"Banco Ejemplo · CLABE: 0123..."` |
| ☐ | Gift registry name | `data.js` | 85 | `"Liverpool — Evento #123456"` |
| ☐ | Gift registry URL | `data.js` | 86 | `"#"` |

> You can add more gift options by copying the `{ label, detail, icon, url }` block inside the `options` array.

### 🏷️ Footer & Branding
| # | What | File | Line | Current Value |
|---|------|------|------|---------------|
| ☐ | Footer message | `data.js` | 102 | `"¡Esperamos celebrar este día..."` |
| ☐ | Wedding hashtag | `data.js` | 103 | `"#JessyYGabriel2026"` |

### 🌐 Custom Domain
| # | What | File | Line | Current Value |
|---|------|------|------|---------------|
| ☐ | Custom subdomain | `CNAME` | 1 | `wedding-jessy.gabrieljimenez.phd` |

---

## 🚀 Deploy to GitHub Pages

### Step 1: Create the GitHub Repository

```bash
# From the project folder
cd wedding-site
git init
git add .
git commit -m "Initial wedding site"

# Create the repo on GitHub (using gh CLI or the website)
gh repo create wedding-site --public --source=. --push

# Or manually:
git remote add origin https://github.com/YOUR_USERNAME/wedding-site.git
git branch -M main
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repo on GitHub → **Settings** → **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Select branch: **`main`**, folder: **`/ (root)`**
4. Click **Save**
5. Wait ~1 minute. Your site will be live at: `https://YOUR_USERNAME.github.io/wedding-site/`

### Step 3: Set Up Custom Subdomain

#### 3a. Configure DNS (at your domain registrar)

Add a **CNAME record** pointing your subdomain to GitHub:

| Type  | Name                | Value                               |
|-------|---------------------|-------------------------------------|
| CNAME | `wedding-jessy`     | `YOUR_USERNAME.github.io`           |

> If your domain is `gabrieljimenez.phd`, the full subdomain will be `wedding-jessy.gabrieljimenez.phd`

#### 3b. Configure GitHub Pages

1. Make sure the `CNAME` file in your repo contains exactly:
   ```
   wedding-jessy.gabrieljimenez.phd
   ```
2. Go to repo **Settings** → **Pages** → **Custom domain**
3. Enter: `wedding-jessy.gabrieljimenez.phd`
4. Click **Save**
5. Wait for the DNS check to pass (can take up to 24 hours, usually ~10 minutes)
6. ✅ Check **Enforce HTTPS** once the certificate is provisioned

### Step 4: Verify

Visit `https://wedding-jessy.gabrieljimenez.phd` — your site should be live! 🎉

---

## 📁 Project Structure

```
wedding-site/
├── index.html    ← Main page (structure + styles + logic)
├── data.js       ← ⭐ ALL editable content lives here
├── CNAME         ← Custom domain for GitHub Pages
└── README.md     ← This file (not rendered on the live site)
```

---

## 🔄 Making Updates

1. Edit `data.js` with your changes
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update wedding details"
   git push
   ```
3. GitHub Pages will automatically redeploy in ~30 seconds

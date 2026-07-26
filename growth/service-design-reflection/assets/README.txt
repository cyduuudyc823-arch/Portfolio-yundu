MA SERVICE DESIGN REFLECTIVE TALK — ASSET AND EDITING GUIDE
===========================================================

The presentation works by opening index.html directly in a modern browser.
All required code is local. No server, package installation or internet
connection is needed during the talk.


1. RECOMMENDED IMAGE FILES
--------------------------

assets/teamwork.jpg
Students or collaborators working together.
The included image is an original editorial-style generated photograph.

assets/tesco.jpg
Supermarket checkout, voucher or loyalty-card context.
The included image is an original editorial-style generated photograph with
no Tesco branding.

assets/charity-community.jpg
Authentic community participation image from the GenZ4Good project page.
This environment could not access the source page, so slide 7 currently uses a
designed blue/lavender fallback. Add this file to replace it automatically.

assets/charity-system-loop.jpg
System loop, ecosystem activation or charity–community collaboration model
from GenZ4Good. Slide 8 currently uses a designed collaboration-model fallback.

assets/charity-prototype.jpg
GenZ4Good prototype or user journey screenshot. Reserved for future editing.

assets/charity-ecosystem.jpg
Stakeholder ecosystem or collaboration diagram. Reserved for future editing.

assets/readyology-disagreement.png
Readyology radiologist-versus-AI disagreement interface. The current deck uses
a locally reconstructed interface with actual local mammogram assets.

assets/readyology-arbitration.png
Readyology arbitration support interface. Reserved for replacement.

assets/readyology-learning.png
Readyology Learning Hub interface. Reserved for replacement.

assets/readyology-governance.png
Readyology governance or calibration dashboard. Reserved for replacement.

assets/readyology-hero.png
Readyology overview or hero interface. Reserved for replacement.

Also included:
assets/mammo-l-cc.png
assets/mammo-r-cc.png
assets/readyology-wordmark.svg


2. REPLACING IMAGES
-------------------

Use the exact filenames above and place the files in the assets folder.
The presentation will pick them up the next time index.html is opened.

For photographic images, use a landscape crop of at least 1600 × 900 pixels.
For interface screenshots, use sharp PNG files and crop to the relevant moment
rather than including an unreadable full webpage.

If an image is missing or fails to load, JavaScript hides the broken image and
the slide shows a deliberately designed palette-based fallback. A broken-image
icon will never be shown.


3. EDITING THE PRESENTATION
---------------------------

Change colours:
Open styles.css and edit the colour variables at the top:
--blue, --blue-dark, --lavender, --lavender-muted, --black and --off-white.

Edit slide text:
Open index.html. Each slide is a semantic <section class="slide">. Edit only
the text inside the relevant section.

Update the presenter name:
Search index.html for "Yundu Chen" and replace it.

Enable or disable the backup slide:
Open script.js and set:
showBackupSlide: true
or:
showBackupSlide: false

Change transition speed:
Open script.js and change transitionMs. The value is milliseconds; for example,
350 is faster and 500 is slower.

Change slide order:
In index.html, move whole <section class="slide"> blocks. The order in the file
is the presentation order. Keep the optional backup section last unless you
intend it to become part of the main talk.

Update portfolio and demo URLs:
Open script.js and edit portfolioUrl and readyologyUrl in the CONFIG object.
The backup slide links and canvas codes update from these values.

Important QR note:
The included canvas codes are dependency-free visual placeholders, not certified
QR encodings. For guaranteed phone scanning, export real QR codes as local PNG
files and replace the canvas elements in index.html with image elements.


4. PRESENTING
-------------

Open index.html in Chrome, Edge, Safari or Firefox.

Right Arrow, Page Down or Space: next slide
Left Arrow or Page Up: previous slide
Home: first slide
End: last slide
F: enter fullscreen
Escape: leave fullscreen

The invisible left and right edge zones are also clickable. They reveal a subtle
arrow on hover or keyboard focus.


5. EXPORTING TO PDF
-------------------

Open index.html, choose Print, and select Save as PDF.

Recommended settings:
- Landscape orientation
- Margins: None
- Scale: 100%
- Background graphics: On
- Headers and footers: Off

The print stylesheet creates one 16:9 slide per page, removes navigation and
progress controls, preserves colours and images, and omits the disabled backup
slide. To include the backup page, enable it in script.js before printing.


6. FILE OVERVIEW
----------------

index.html       Slide content and semantic structure
styles.css       Layout, palette, typography, responsiveness and print styling
script.js        Navigation, fullscreen, configuration, fallbacks and link codes
assets/          All local image files and this guide

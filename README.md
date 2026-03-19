# IrisCalib

Calibrated iris diameter measurement using a credit card as a physical ruler.
Built with MediaPipe FaceMesh + WebGL. Runs entirely in the browser — no server, no data sent anywhere.

## Files

```
iris_calibrate.html   ← main app
manifest.json         ← PWA manifest
sw.js                 ← service worker (offline cache)
icon-192.png          ← app icon (generate from icon.svg)
icon-512.png          ← app icon large
icon.svg              ← source SVG icon
```

## GitHub Pages deployment

1. Push all files to a repo (e.g. `yourname/iriscalib`)
2. Go to **Settings → Pages → Source: main branch / root**
3. Access at `https://yourname.github.io/iriscalib/iris_calibrate.html`

> **Note:** GitHub Pages requires HTTPS, which is needed for camera access — this works automatically.

## Generating icons from SVG

```bash
# using Inkscape
inkscape icon.svg --export-png=icon-192.png --export-width=192
inkscape icon.svg --export-png=icon-512.png --export-width=512

# or using ImageMagick (if SVG renders correctly)
convert -background none icon.svg -resize 192x192 icon-192.png
convert -background none icon.svg -resize 512x512 icon-512.png
```

Or use any online SVG→PNG converter.

## Usage

1. Open on iPhone Safari — tap **Share → Add to Home Screen** for PWA install
2. Tap **Start Camera**
3. Hold credit card (85.6mm wide) flat beside your eye at camera distance
4. Tap 2–4 points spanning the full card width on screen
5. Tap **Lock Scale**
6. Look at camera — tap **Snap Left** / **Snap Right** to record iris diameter

## Calibration note

Card must be at the **same focal plane as the eye** — hold it flat against your cheekbone/temple.
Measure the 85.6mm **width** dimension (landscape orientation).

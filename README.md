# 💕 Valentine's Day - Love is in the Air

A beautiful, fully responsive Valentine's Day landing page with interactive photo albums, videos, and local storage for saving memories.

![Valentine's Day](https://img.shields.io/badge/Love-is%20in%20the%20Air-ff1493)
![Responsive](https://img.shields.io/badge/Responsive-Mobile%20Friendly-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)

---

## 🌟 Features

### 📖 **Memory Album Book**
- Beautiful 3D book-style layout with left and right pages
- 4 photo slots in the main album
- Click or drag-and-drop to upload photos
- 3D perspective effects on hover
- Professional book spine design

### 📸 **Photo Album Grid**
- 12 customizable photo slots
- Grid layout that adapts to all screen sizes
- Click to add photos or drag-and-drop
- Beautiful dashed border design
- Photos display with perfect aspect ratio

### 🎥 **Video Gallery**
- 3 video frame slots
- Full video player with controls (play, pause, volume, fullscreen)
- Support for all common video formats (MP4, WebM, Ogg)
- 16:9 aspect ratio for optimal viewing
- Responsive and mobile-friendly

### 💾 **Smart Data Saving**
- **Automatic saving** - Photos and videos auto-save to browser storage
- **Manual save** - Save button to manually backup your album
- **Export feature** - Download complete album as JSON backup
- **Clear option** - Delete all data with confirmation
- **Persistent storage** - Data survives page refreshes and browser restarts

### 🎁 **Gift Ideas Section**
- 4 romantic gift suggestions
- Interactive hover effects
- Beautiful card design

### 📋 **Contact Form**
- Visitor contact form
- Email and name fields
- Message textarea
- Form validation

### 🎨 **Design Elements**
- Stunning gradient backgrounds
- Smooth animations and transitions
- Floating hearts animation
- Beautiful color scheme (reds and pinks)
- Professional typography

### 📱 **Responsive Design**
- Mobile-first approach
- Works perfectly on desktop, tablet, and mobile
- Hamburger menu for mobile navigation
- Touch-friendly interface
- Optimized for all screen sizes

---

## 📦 Project Structure

```
c:\text.html\text.html\
├── index.html              # Main HTML file
├── css/
│   └── style.css          # Complete styling and animations
├── javascript/
│   └── script.js          # All interactivity and functionality
├── images/                # (Optional) Place images here
├── video/                 # (Optional) Place videos here
└── README.md              # This file
```

---

## 🚀 Getting Started

### **Local Development**

1. **Download/Clone the project**
   ```bash
   # Navigate to your project folder
   cd c:\text.html\text.html
   ```

2. **Open in browser**
   - Double-click `index.html` OR
   - Right-click → Open with → Your browser

3. **Start customizing**
   - Edit `index.html` for content
   - Edit `css/style.css` for styling
   - Edit `javascript/script.js` for functionality

### **Live Preview**
- Use VS Code Live Server extension:
  1. Install "Live Server" extension
  2. Right-click `index.html`
  3. Select "Open with Live Server"
  4. Auto-refreshes on file changes

---

## 💾 How Saving Works

### **Automatic Saving**
- Photos and videos automatically save when uploaded
- Data stored in browser's LocalStorage
- Persists even after closing browser
- Up to ~5-10MB storage capacity

### **Manual Save**
- Click "Save Album" button to manually save
- Useful after making changes

### **Export**
- Click "Export" to download backup as JSON
- File format: `valentine-album-YYYY-MM-DD.json`
- Can be shared or restored later

### **Clear Data**
- Click "Clear All" to delete everything
- Requires confirmation
- Resets all photo slots and videos

---

## 🎨 Customization Guide

### **Change Colors**
Edit CSS color variables in `css/style.css`:
```css
:root {
    --primary-red: #e74c3c;      /* Main red */
    --dark-red: #c0392b;         /* Dark red */
    --light-pink: #f9e3e6;       /* Light pink */
    --white: #ffffff;            /* White */
    --dark-text: #2c3e50;        /* Text color */
    --light-text: #7f8c8d;       /* Light text */
}
```

### **Change Text Content**
Edit `index.html`:
- Title: Line 7
- Navigation: Lines 16-21
- Hero section: Lines 35-37
- Gift names/descriptions: Lines 59-76
- Album titles: Lines 96-97
- And more...

### **Add More Photo Slots**
Copy a photo slot div in the photo album section and increment the slot number.

### **Adjust Grid Layout**
Edit in `css/style.css`:
```css
.photo-album-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    /* Change minmax(200px, 1fr) to adjust size */
}
```

### **Change Animations**
Modify keyframes in `css/style.css`:
- `@keyframes float` - Floating hearts
- `@keyframes fadeInUp` - Fade animations
- `@keyframes heartBeat` - Heart pulse
- And more...

---

## 📱 Supported Features by Device

| Feature | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Photo upload | ✅ | ✅ | ✅ |
| Video upload | ✅ | ✅ | ✅ |
| Drag & drop | ✅ | ⚠️ | ❌ |
| Save/Load | ✅ | ✅ | ✅ |
| Full navigation | ✅ | ✅ | 📱 |

---

## 🌐 Deployment

### **Option 1: Netlify (Recommended - Free)**
1. Go to `netlify.com`
2. Sign up (free)
3. Drag & drop your project folder
4. Your site is live! (URL: `your-site.netlify.app`)
5. Optional: Connect custom domain

### **Option 2: GitHub Pages (Free)**
1. Create GitHub account
2. Create repository named `username.github.io`
3. Push your files
4. Site goes live automatically
5. URL: `username.github.io`

### **Option 3: Vercel (Free)**
1. Go to `vercel.com`
2. Sign up
3. Import project
4. Deploy (URL: `project-name.vercel.app`)

### **Option 4: Traditional Hosting**
1. Buy domain + hosting from:
   - Namecheap, Hostinger, GoDaddy, etc.
2. Upload files via FTP/File Manager
3. Point domain to hosting

---

## 📋 File Reference

### **index.html**
- Complete HTML structure
- Semantic markup
- All interactive elements
- Form fields
- Photo/video input elements

### **css/style.css** (~950 lines)
- Global styles
- Navigation styling
- Hero section animations
- Album styling (3D effects)
- Video frame design
- Photo album grid
- Responsive breakpoints
- Animations & keyframes
- Media queries for mobile

### **javascript/script.js** (~480 lines)
- Mobile menu toggle
- Photo upload handling
- Video upload handling
- Drag & drop functionality
- LocalStorage save/load
- Form submission
- Smooth scrolling
- File validation

---

## 🔧 Technical Details

### **Browser Compatibility**
- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile browsers
- ⚠️ IE 11 (not supported)

### **Storage Limits**
- **LocalStorage**: ~5-10MB per domain
- **File size limits**:
  - Photos: 5MB max
  - Videos: 100MB max

### **Technologies Used**
- HTML5
- CSS3 (Flexbox, Grid, Gradients, Animations)
- Vanilla JavaScript (ES6+)
- Browser APIs:
  - FileReader API
  - LocalStorage API
  - Blob/URL APIs

---

## 🎯 Usage Tips

### **Best Practices**
1. **Compress images** before uploading for faster load
2. **Use common video formats** (MP4 recommended)
3. **Test on mobile** before sharing
4. **Export regularly** to backup your memories
5. **Clear browser cache** if storage issues occur

### **Optimization**
- Keep photos under 2MB each
- Compress videos before uploading
- Use modern formats (WebP for images)
- Clear old data if storage is full

### **Sharing with Partner**
1. Share the website URL
2. They can add their own photos
3. Click "Export" and send the JSON backup
4. They can import it back later

---

## 🐛 Troubleshooting

### **Photos not saving?**
- Check browser storage isn't full
- Clear browser cache
- Try a different browser
- Check file size (max 5MB)

### **Videos won't play?**
- Ensure video format is supported (MP4, WebM, Ogg)
- Check video file size (max 100MB)
- Try encoding video in H.264 codec

### **Drag & drop not working?**
- Not supported on mobile devices
- Use click-to-upload instead
- Works best on desktop browsers

### **Data lost after clearing browser?**
- Export your album as JSON backup
- Use "Export" button to save locally
- Keep the JSON file safe

---

## 📄 License

This project is open source and available under the MIT License.

---

## ❤️ Credits

Created as a romantic Valentine's Day project with love.

### **Features Inspired By:**
- Photo album books
- Modern web design
- User experience best practices

---

## 🚀 Future Enhancement Ideas

- [ ] User authentication (save to cloud)
- [ ] Share albums with link
- [ ] Add captions to photos
- [ ] Music/background audio
- [ ] Print-friendly album view
- [ ] Import from cloud storage (Google Drive, Dropbox)
- [ ] Timeline view of memories
- [ ] Filters and effects on photos
- [ ] Collaborative album editing
- [ ] Multiple album support

---

## 📞 Support & Questions

For issues or questions:
1. Check the Troubleshooting section
2. Review file structure
3. Check browser console for errors
4. Test in different browser

---

## 💝 Special Notes

- **All data is stored locally** - Nothing uploaded to servers
- **Privacy guaranteed** - Your memories stay private
- **Fully customizable** - Edit colors, text, layout
- **Mobile friendly** - Perfect for sharing
- **No dependencies** - Pure HTML/CSS/JS
- **Lightweight** - Fast loading

---

## 🎉 Have Fun!

Perfect gift idea to share memories with your loved one.
Create, customize, fill with memories, and share! 💕

---

**Happy Valentine's Day!** 💌

*Last Updated: February 12, 2026*

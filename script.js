// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// CTA Button Scroll to Gifts
document.querySelector('.cta-button').addEventListener('click', () => {
    document.querySelector('#gifts').scrollIntoView({ behavior: 'smooth' });
});

// Form Submission
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const name = document.querySelector('.contact-form input[type="text"]').value;
    const email = document.querySelector('.contact-form input[type="email"]').value;
    const message = document.querySelector('.contact-form textarea').value;

    // Simple validation
    if (name && email && message) {
        // Show success message
        alert(`Thank you ${name}! Your message has been sent with love ❤️`);

        // Reset form
        document.querySelector('.contact-form').reset();
    } else {
        alert('Please fill in all fields!');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(231, 76, 60, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(231, 76, 60, 0.1)';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe gift cards and about content
document.querySelectorAll('.gift-card, .about-text, .contact-form').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Create random floating hearts
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '💕';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.top = '100%';
    heart.style.fontSize = '2rem';
    heart.style.pointerEvents = 'none';
    heart.style.opacity = '0.7';
    heart.style.zIndex = '0';

    document.body.appendChild(heart);

    let top = 100;
    const speed = Math.random() * 2 + 1;
    const drift = Math.random() * 100 - 50;

    const interval = setInterval(() => {
        top -= speed;
        heart.style.top = top + '%';
        heart.style.left = (parseFloat(heart.style.left) + drift * 0.01) + '%';

        if (top < -10) {
            clearInterval(interval);
            heart.remove();
        }
    }, 30);
}

// Trigger floating hearts on scroll (optional)
let lastHeartTime = 0;
document.addEventListener('scroll', () => {
    const now = Date.now();
    if (now - lastHeartTime > 500) {
        if (Math.random() > 0.7) {
            createFloatingHeart();
            lastHeartTime = now;
        }
    }
});

// Hamburger Menu Animation
hamburger.addEventListener('click', () => {
    hamburger.style.animation = 'none';
    setTimeout(() => {
        hamburger.style.animation = '';
    }, 10);
});

// Click outside to close menu
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        navLinks.classList.remove('active');
    }
});

/* ===== Image Upload Functionality ===== */

// Trigger file input on photo card click
function triggerUpload(card, caption) {
    const fileInput = card.querySelector('.image-input');
    fileInput.click();
}

// Handle image upload
document.addEventListener('change', (e) => {
    if (e.target.classList.contains('image-input')) {
        const fileInput = e.target;
        const file = fileInput.files[0];

        if (file) {
            // Check if file is an image
            if (!file.type.startsWith('image/')) {
                alert('Please select a valid image file!');
                return;
            }

            // Check file size (max 5MB)
            if (file.size > 5 * 1024 * 1024) {
                alert('Image size should be less than 5MB!');
                return;
            }

            // Read and display the image
            const reader = new FileReader();
            reader.onload = (event) => {
                const card = fileInput.closest('.photo-card') || fileInput.closest('.memory-card');

                // Remove old image if exists
                const oldImg = card.querySelector('img');
                if (oldImg) {
                    oldImg.remove();
                }

                // Create and add new image
                const img = document.createElement('img');
                img.src = event.target.result;
                img.alt = card.querySelector('p').textContent;

                // Insert image before placeholder
                const placeholder = card.querySelector('.photo-placeholder, .memory-placeholder');
                if (placeholder) {
                    card.insertBefore(img, placeholder);
                } else {
                    card.appendChild(img);
                }

                // Mark card as having image
                card.classList.add('has-image');

                // Show success message
                const caption = card.querySelector('p').textContent;
                console.log(`✅ ${caption} photo uploaded successfully!`);
            };

            reader.readAsDataURL(file);
        }
    }
});

// Allow drag and drop on cards
document.querySelectorAll('.photo-card, .memory-card').forEach(card => {
    card.addEventListener('dragover', (e) => {
        e.preventDefault();
        card.style.opacity = '0.8';
        card.style.borderColor = 'var(--primary-red)';
    });

    card.addEventListener('dragleave', () => {
        card.style.opacity = '1';
        card.style.borderColor = '';
    });

    card.addEventListener('drop', (e) => {
        e.preventDefault();
        card.style.opacity = '1';
        const file = e.dataTransfer.files[0];

        if (file && file.type.startsWith('image/')) {
            const fileInput = card.querySelector('.image-input');
            // Create a DataTransfer object to set files
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);
            fileInput.files = dataTransfer.files;

            // Trigger change event
            fileInput.dispatchEvent(new Event('change', { bubbles: true }));
        }
    });
});

/* ===== Video Upload Functionality ===== */

// Trigger video file input on video frame click
document.querySelectorAll('.video-frame').forEach(frame => {
    frame.addEventListener('click', () => {
        const videoInput = frame.querySelector('.video-input');
        videoInput.click();
    });
});

// Handle video upload
document.addEventListener('change', (e) => {
    if (e.target.classList.contains('video-input')) {
        const fileInput = e.target;
        const file = fileInput.files[0];

        if (file) {
            // Check if file is a video
            if (!file.type.startsWith('video/')) {
                alert('Please select a valid video file!');
                return;
            }

            // Check file size (max 100MB)
            if (file.size > 100 * 1024 * 1024) {
                alert('Video size should be less than 100MB!');
                return;
            }

            // Read and display the video
            const reader = new FileReader();
            reader.onload = (event) => {
                const frame = fileInput.closest('.video-frame');
                const videoPlayer = frame.querySelector('.video-player');
                const videoCaption = frame.querySelector('.video-caption');

                // Set video source
                videoPlayer.src = event.target.result;

                // Show video player and hide placeholder
                videoPlayer.style.display = 'block';
                frame.classList.add('has-video');

                // Show success message
                const caption = videoCaption.textContent;
                console.log(`✅ ${caption} video uploaded successfully!`);
            };

            reader.readAsDataURL(file);
        }
    }
});

// Allow drag and drop on video frames
document.querySelectorAll('.video-frame').forEach(frame => {
    frame.addEventListener('dragover', (e) => {
        e.preventDefault();
        frame.style.opacity = '0.8';
        frame.style.borderColor = 'var(--primary-red)';
    });

    frame.addEventListener('dragleave', () => {
        frame.style.opacity = '1';
        frame.style.borderColor = '';
    });

    frame.addEventListener('drop', (e) => {
        e.preventDefault();
        frame.style.opacity = '1';
        const file = e.dataTransfer.files[0];

        if (file && file.type.startsWith('video/')) {
            const fileInput = frame.querySelector('.video-input');
            // Create a DataTransfer object to set files
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);
            fileInput.files = dataTransfer.files;

            // Trigger change event
            fileInput.dispatchEvent(new Event('change', { bubbles: true }));
        }
    });
});

/* ===== Photo Album Upload Functionality ===== */

// Trigger file input on photo slot click
function triggerPhotoUpload(slot) {
    const fileInput = slot.querySelector('.album-photo-input');
    fileInput.click();
}

// Handle album photo upload
document.addEventListener('change', (e) => {
    if (e.target.classList.contains('album-photo-input')) {
        const fileInput = e.target;
        const file = fileInput.files[0];

        if (file) {
            // Check if file is an image
            if (!file.type.startsWith('image/')) {
                alert('Please select a valid image file!');
                return;
            }

            // Check file size (max 5MB)
            if (file.size > 5 * 1024 * 1024) {
                alert('Image size should be less than 5MB!');
                return;
            }

            // Read and display the image
            const reader = new FileReader();
            reader.onload = (event) => {
                const slot = fileInput.closest('.album-photo-slot');
                const imgElement = slot.querySelector('.album-photo-img');

                // Set image source
                imgElement.src = event.target.result;
                imgElement.style.display = 'block';

                // Mark slot as having photo
                slot.classList.add('has-photo');

                console.log('✅ Photo added to album!');
            };

            reader.readAsDataURL(file);
        }
    }
});

// Allow drag and drop on photo slots
document.querySelectorAll('.album-photo-slot').forEach(slot => {
    slot.addEventListener('dragover', (e) => {
        e.preventDefault();
        slot.style.opacity = '0.8';
        slot.style.borderColor = 'var(--dark-red)';
        slot.style.background = 'rgba(231, 76, 60, 0.05)';
    });

    slot.addEventListener('dragleave', () => {
        slot.style.opacity = '1';
        slot.style.borderColor = '';
        slot.style.background = '';
    });

    slot.addEventListener('drop', (e) => {
        e.preventDefault();
        slot.style.opacity = '1';
        slot.style.borderColor = '';
        slot.style.background = '';
        const file = e.dataTransfer.files[0];

        if (file && file.type.startsWith('image/')) {
            const fileInput = slot.querySelector('.album-photo-input');
            // Create a DataTransfer object to set files
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);
            fileInput.files = dataTransfer.files;

            // Trigger change event
            fileInput.dispatchEvent(new Event('change', { bubbles: true }));
        }
    });
});
/* ===== LocalStorage Save/Load Functionality ===== */

const STORAGE_KEY = 'valentineAlbum';

// Auto-save photo album data
function saveAlbumData() {
    const albumData = {
        photoSlots: [],
        videos: [],
        savedAt: new Date().toLocaleString()
    };

    // Save all photo slots
    document.querySelectorAll('.album-photo-slot').forEach((slot, index) => {
        const imgElement = slot.querySelector('.album-photo-img');
        if (imgElement && imgElement.style.display !== 'none' && imgElement.src) {
            albumData.photoSlots[index] = imgElement.src;
        }
    });

    // Save all videos
    document.querySelectorAll('.video-frame').forEach((frame, index) => {
        const videoPlayer = frame.querySelector('.video-player');
        if (videoPlayer && videoPlayer.src) {
            albumData.videos[index] = videoPlayer.src;
        }
    });

    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(albumData));
        console.log('✅ Album saved successfully!');
        return true;
    } catch (e) {
        if (e.name === 'QuotaExceededError') {
            alert('Storage limit exceeded! Your album is too large to save.');
        } else {
            console.error('Error saving album:', e);
        }
        return false;
    }
}

// Load photo album data
function loadAlbumData() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        if (!data) {
            console.log('No saved album found');
            return false;
        }

        const albumData = JSON.parse(data);

        // Restore photo slots
        if (albumData.photoSlots && albumData.photoSlots.length > 0) {
            document.querySelectorAll('.album-photo-slot').forEach((slot, index) => {
                if (albumData.photoSlots[index]) {
                    const imgElement = slot.querySelector('.album-photo-img');
                    imgElement.src = albumData.photoSlots[index];
                    imgElement.style.display = 'block';
                    slot.classList.add('has-photo');
                }
            });
            console.log('✅ Photos restored!');
        }

        // Restore videos
        if (albumData.videos && albumData.videos.length > 0) {
            document.querySelectorAll('.video-frame').forEach((frame, index) => {
                if (albumData.videos[index]) {
                    const videoPlayer = frame.querySelector('.video-player');
                    videoPlayer.src = albumData.videos[index];
                    videoPlayer.style.display = 'block';
                    frame.classList.add('has-video');
                }
            });
            console.log('✅ Videos restored!');
        }

        console.log(`Album last saved: ${albumData.savedAt}`);
        return true;
    } catch (e) {
        console.error('Error loading album:', e);
        return false;
    }
}

// Clear all saved data
function clearAlbumData() {
    if (confirm('Are you sure you want to delete all saved photos and videos? This cannot be undone.')) {
        try {
            localStorage.removeItem(STORAGE_KEY);
            location.reload();
            console.log('✅ Album data cleared!');
        } catch (e) {
            console.error('Error clearing album:', e);
        }
    }
}

// Export album as JSON
function exportAlbumData() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        if (!data) {
            alert('No album data to export!');
            return;
        }

        const albumData = JSON.parse(data);
        const dataStr = JSON.stringify(albumData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `valentine-album-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        URL.revokeObjectURL(url);
        console.log('✅ Album exported!');
    } catch (e) {
        console.error('Error exporting album:', e);
    }
}

// Auto-save whenever images or videos are uploaded
document.addEventListener('change', (e) => {
    if (e.target.classList.contains('album-photo-input') ||
        e.target.classList.contains('video-input')) {
        setTimeout(() => {
            saveAlbumData();
        }, 1000);
    }
});

// Load album data when page loads
window.addEventListener('load', () => {
    // Small delay to ensure all elements are ready
    setTimeout(() => {
        loadAlbumData();
    }, 500);
});

// Save album data before leaving page
window.addEventListener('beforeunload', () => {
    saveAlbumData();
});
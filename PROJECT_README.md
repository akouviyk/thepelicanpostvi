# The Pelican Post Website

A modern, responsive React website for The Pelican Post - St. John's essential mail, shipping, and business service center.

## 🎨 Design & Features

- **Modern UI/UX**: Inspired by contemporary web design with smooth animations and micro-interactions
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **SEO Optimized**: Meta tags, semantic HTML, and structured data for search engines
- **Performance Focused**: Fast loading times with optimized assets
- **Accessibility**: WCAG compliant with proper contrast and semantic markup

## 🛠️ Tech Stack

- **React 18.3**: Modern React with Hooks
- **Vite**: Lightning-fast build tool
- **React Router DOM**: Client-side routing
- **Framer Motion**: Smooth animations and transitions
- **Tailwind CSS**: Utility-first CSS framework
- **Firebase**: Backend services (Firestore for contact forms)
- **React Helmet Async**: SEO meta tags management
- **React Icons**: Comprehensive icon library

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Firebase account (for backend services)

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Firebase

1. Create a Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com)
2. Enable Firestore Database
3. Copy your Firebase configuration
4. Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

5. Fill in your Firebase credentials in `.env`:

```env
VITE_FIREBASE_API_KEY=your_actual_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_actual_auth_domain
VITE_FIREBASE_PROJECT_ID=your_actual_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_actual_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_actual_sender_id
VITE_FIREBASE_APP_ID=your_actual_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_actual_measurement_id
```

### 3. Set Up Firestore

In your Firebase console:
1. Go to Firestore Database
2. Create a collection named `contact_submissions`
3. Set up security rules (example):

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contact_submissions/{document} {
      allow create: if true;
      allow read, update, delete: if false;
    }
  }
}
```

### 4. Add Logo and Images

Place your images in the `public` directory:
- `/public/logo.png` - Main logo (transparent background recommended)
- `/public/images/location-exterior.jpg` - Location photo
- `/public/images/owners-photo.jpg` - Owners photo

### 5. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to view the site.

## 📦 Building for Production

```bash
npm run build
```

The optimized files will be in the `dist` directory.

## 🌐 Deployment Options

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Netlify
1. Push code to GitHub
2. Connect repository in Netlify
3. Add environment variables
4. Deploy

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
npm run build
firebase deploy
```

## 📱 Pages & Routes

- `/` - Homepage
- `/services` - All Services
- `/services/mailboxes` - Mailbox Rental
- `/services/package-receiving` - Package Receiving
- `/pricing` - Pricing Information
- `/location` - Location & Hours
- `/about` - About Us
- `/faq` - Frequently Asked Questions
- `/contact` - Contact Form

## 🎨 Color Palette

```css
--pelican-dark-green: #1a3a2e
--pelican-green: #2d5a4a
--pelican-coral: #ee6c7a
--pelican-yellow: #f4d03f
--pelican-cream: #faf9f6
--pelican-sand: #e8ddc7
--pelican-ocean: #7ec8e3
```

## 📧 Contact Form

The contact form submissions are stored in Firebase Firestore. To view submissions:

1. Go to Firebase Console
2. Navigate to Firestore Database
3. Open the `contact_submissions` collection

Each submission includes:
- Name
- Email
- Phone
- Subject
- Message
- Timestamp
- Status (new/read/resolved)

## 🔧 Customization

### Updating Content

Most content can be updated directly in the page files located in `src/pages/`.

### Changing Colors

Edit the color palette in `tailwind.config.js`:

```javascript
colors: {
  'pelican': {
    'dark-green': '#1a3a2e',
    // ... other colors
  }
}
```

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add route in `src/App.jsx`
3. Update navigation in `src/components/Header.jsx`

## 📊 SEO Optimization

Each page includes:
- Custom title tags
- Meta descriptions
- Keywords
- Open Graph tags (for social media)
- Structured data

Update SEO content using React Helmet in each page component.

## 🎯 Key Features

### Homepage
- Hero section with call-to-action
- Service grid with icons
- Why Pelican Post section
- Testimonials slider
- Final CTA section

### Services Pages
- Comprehensive service listings
- Detailed descriptions
- Clear pricing information
- Step-by-step guides

### Contact Form
- Firebase-powered submissions
- Real-time validation
- Success/error handling
- Email notifications (requires Cloud Functions)

### Location Page
- Embedded Google Maps
- Directions and parking info
- Business hours
- Contact information

## 🐛 Troubleshooting

### Firebase Issues
- Ensure all environment variables are set correctly
- Check Firebase console for proper Firestore setup
- Verify security rules allow write access

### Build Errors
- Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`
- Clear Vite cache: `rm -rf .vite`

### Missing Images
- Ensure images are placed in the `public` directory
- Check file names match exactly (case-sensitive)

## 📄 License

Private - All rights reserved to The Pelican Post

## 🤝 Support

For issues or questions about the website:
- Email: info@pelicanpostvi.com
- Phone: (340) 776-7663

---

Built with ❤️ for St. John, USVI 🇻🇮

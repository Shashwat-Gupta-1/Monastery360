# 🏛️ Monastery360 - Digital Heritage Platform

> Experience Sikkim's spiritual heritage through immersive virtual tours, AI-powered itineraries, and digital archives preserving centuries of Buddhist wisdom.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-38B2AC.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.4.1-646CFF.svg)](https://vitejs.dev/)

## 🚀 Quick Deployment to Vercel

### Prerequisitesss
- Node.js 18+ 
- npm or yarn
- Git
- Vercel account

### Deploy to Vercel (Recommended)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Shashwat-Gupta-1/Monastery360.git
   cd Monastery360
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build the project:**
   ```bash
   npm run build
   ```

4. **Deploy to Vercel:**
   - Push your code to GitHub
   - Connect your GitHub repo to Vercel
   - Vercel will automatically detect the build settings
   - Your site will be deployed at `https://your-project-name.vercel.app`

### Environment Setup
The project is configured with:
- ✅ Vite build system
- ✅ TypeScript support
- ✅ Tailwind CSS
- ✅ All component files created
- ✅ Production-ready build
- ✅ Vercel configuration (`vercel.json`)

### Build Status
- Build: ✅ Passing
- TypeScript: ✅ Configured 
- All Components: ✅ Created
- Dependencies: ✅ Installed

---

### 🗺️ **Interactive Monastery Map**
- **25+ Comprehensive Monasteries** across all four regions of Sikkim
- **Real-time OpenStreetMap integration** with custom monastery markers
- **Nearby Infrastructure** - 40+ hospitals, restaurants, and activities
- **Route Planning** between monasteries with elevation profiles
- **Offline Map Caching** for remote areas

### 🎮 **Immersive 360° Virtual Tours**
- **Professional 360° Viewer** with dependency-free implementation
- **Interactive Hotspots** for exploring sacred spaces
- **Multi-Scene Navigation** - Main halls, courtyards, meditation rooms
- **Touch & Mouse Controls** - Drag to explore, zoom, auto-rotate
- **VR-Ready Architecture** for future headset integration

### 🤖 **AI-Powered Features**
- **Custom Itinerary Planner** generating personalized trip plans
- **OCR Manuscript Scanner** for digitizing ancient texts
- **AI-Enhanced Search** through digital archives
- **Intelligent Recommendations** based on user preferences

### 📚 **Digital Heritage Preservation**
- **Comprehensive Archives** with search functionality
- **Manuscript Digitization** with OCR technology
- **Cultural Calendar** with event bookings
- **Multilingual Support** (English, Hindi, Nepali, Tibetan)

### 🎨 **Heritage-Inspired Design**
- **Traditional Color Palette** - Saffron, gold, deep red, green
- **Serif Typography** for titles, sans-serif for body text
- **Smooth Micro-Animations** with Framer Motion
- **Mandala-Inspired Patterns** and decorative elements
- **Responsive Design** for all devices

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/monastery360.git
   cd monastery360
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production
```bash
npm run build
npm run preview
```

## 🏗️ Project Structure

```
monastery360/
├── components/
│   ├── ui/                         # Shadcn/ui components
│   ├── figma/                      # Image handling utilities
│   ├── SimpleInteractiveMap.tsx    # OpenStreetMap integration
│   ├── Monastery360Viewer.tsx      # 360° panorama viewer
│   ├── VirtualTours.tsx            # Tour management
│   ├── AIItineraryPlanner.tsx      # AI trip planning
│   ├── ManuscriptScanner.tsx       # OCR functionality
│   ├── ReviewsPage.tsx             # User reviews system
│   ├── LoginPage.tsx               # Authentication
│   └── [other components]
├── styles/
│   └── globals.css                 # Tailwind V4 + custom heritage styles
├── utils/
│   └── supabase/                   # Database utilities
├── supabase/
│   └── functions/                  # Edge functions
├── public/                         # Static assets
└── guidelines/                     # Development guidelines
```

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS V4
- **Animations**: Framer Motion
- **UI Components**: Radix UI + Shadcn/ui
- **Maps**: OpenStreetMap with custom markers
- **360° Viewer**: Custom dependency-free implementation
- **Backend**: Supabase (Database, Auth, Storage)
- **Build Tool**: Vite
- **Icons**: Lucide React

## 🎯 Key Features Breakdown

### Interactive Map
- **Complete Coverage**: All regions of Sikkim with detailed monastery information
- **Smart Markers**: Color-coded by region, size by importance
- **Route Planning**: Calculate distances, elevation, and travel time
- **Nearby Services**: Find hospitals, restaurants, and activities
- **Offline Support**: Cached maps for remote monastery visits

### 360° Virtual Tours
- **Professional Experience**: Smooth navigation and high-quality panoramas
- **Educational Hotspots**: Learn about sacred artifacts and architecture
- **Multiple Perspectives**: Interior halls, courtyards, mountain views
- **Mobile Optimized**: Touch gestures for natural exploration

### AI-Powered Planning
- **Personalized Itineraries**: Based on interests, time, and accessibility
- **Cultural Integration**: Align visits with festivals and ceremonies
- **Practical Information**: Weather, accommodation, transportation
- **OCR Technology**: Digitize and translate ancient manuscripts

## 🎨 Design Philosophy

### Heritage-Inspired Aesthetics
- **Color Harmony**: Warm saffron, gold, and earth tones
- **Typography**: Serif fonts for elegance, sans-serif for readability  
- **Visual Hierarchy**: Clear information architecture
- **Cultural Sensitivity**: Respectful representation of Buddhist heritage

### User Experience
- **Intuitive Navigation**: Easy exploration for all user levels
- **Accessibility**: WCAG compliant with keyboard navigation
- **Performance**: Optimized for slow connections in remote areas
- **Progressive Enhancement**: Works without JavaScript for basic features

## 🌏 Cultural Impact

### Digital Preservation
- **Heritage Documentation**: Preserving monastery architecture and artifacts
- **Language Preservation**: Multilingual content and manuscript digitization
- **Cultural Education**: Teaching Buddhist philosophy and history
- **Community Engagement**: Connecting global audiences with Sikkim's heritage

### Sustainable Tourism
- **Virtual Exploration**: Reduce physical impact on sensitive sites
- **Educational Preparation**: Better-informed visitors
- **Seasonal Planning**: Distribute tourism throughout the year
- **Local Economic Support**: Highlight local businesses and services

## 🚀 Getting Started with Development

### Environment Setup
```bash
# Clone the repository
git clone https://github.com/yourusername/monastery360.git

# Navigate to project directory
cd monastery360

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Component Development
All components are located in the `components/` directory. The main component files include:

- **SimpleInteractiveMap.tsx** - Complete OpenStreetMap implementation
- **Monastery360Viewer.tsx** - Custom 360° panorama viewer
- **VirtualTours.tsx** - Tour management and selection
- **AIItineraryPlanner.tsx** - AI-powered trip planning
- **ManuscriptScanner.tsx** - OCR functionality for manuscripts

## 🤝 Contributing

We welcome contributions! Please feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure responsive design
- Test on multiple browsers



## 🙏 Acknowledgments

- **Sikkim Tourism Department** for cultural guidance
- **Local Monasteries** for access and historical information
- **Buddhist Scholars** for accuracy review
- **Open Source Community** for tools and libraries

## 📞 Support & Contact

- **Documentation**: [Wiki](https://github.com/yourusername/monastery360/wiki)
- **Issues**: [GitHub Issues](https://github.com/yourusername/monastery360/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/monastery360/discussions)

## 🚀 Live Demo

[🌐 Visit Monastery360](https://bit.ly/46pIDkI) 

---

**Built with ❤️ for preserving and sharing Sikkim's spiritual heritage**

*"Every monastery tells a story. Every story preserves wisdom. Every preservation enriches humanity."*

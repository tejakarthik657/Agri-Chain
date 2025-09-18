import React from 'react';
import { useNavigate } from 'react-router-dom';
import ThreeDHoverGallery from '../components/ThreeDHoverGallery';

const galleryImages = [
  "https://i.pinimg.com/736x/b5/03/84/b503840363eb5a4d5807a4d5d09cacae.jpg",
  "https://i.pinimg.com/1200x/37/4b/18/374b184407081184837de603b9e94873.jpg",
  "https://i.pinimg.com/1200x/fa/c4/7e/fac47e3245a0e93aa042bcc22c2e76ae.jpg",
  "https://i.pinimg.com/736x/a5/c8/32/a5c832897eeff23edc7764af5a23c580.jpg",
];

const linkPaths = ['farmers', 'logistics', 'retailers', 'customers'];

// NEW: An array for the display labels.
const galleryLabels = ['Farmers', 'Logistics', 'Retailers', 'Customers'];

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleImageClick = (index: number) => {
    const role = linkPaths[index];
    if (index < 3) {
      // Pass the role in the URL for the LoginPage to read
      navigate(`/login/${role}`);
    } else {
      navigate(`/${role}`);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen text-center overflow-hidden">
      <header className="absolute top-[10vh] z-10 [text-shadow:2px_2px_8px_rgba(0,0,0,0.7)]">
        <h1 className="text-5xl font-bold mb-2 text-white">Welcome to the Agri-Chain Portal</h1>
        <p className="text-xl text-gray-300">Select your entry point below</p>
      </header>

      <ThreeDHoverGallery
        images={galleryImages}
        labels={galleryLabels} // <-- NEW PROP: Pass the labels here
        onImageClick={handleImageClick}
        itemWidth={10}
        itemHeight={25}
        activeWidth={30}
        gap={2}
      />
    </div>
  );
};

export default LandingPage;
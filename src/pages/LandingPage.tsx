import React from 'react';
import { useNavigate } from 'react-router-dom';
import ThreeDHoverGallery from '../components/ThreeDHoverGallery';

const galleryImages = [
  "https://i.pinimg.com/1200x/c8/6a/13/c86a13beec6eedf10e6e5c68d772a2f4.jpg",
  "https://i.pinimg.com/1200x/6b/40/fd/6b40fd8edce2a87025cf86e1201f6257.jpg",
  "https://i.pinimg.com/736x/a8/ca/0f/a8ca0fd6894db828c12767afb4f3e2f1.jpg",
  "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

const linkPaths = ['farmers', 'logistics', 'retailers', 'customers'];

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleImageClick = (index: number) => {
    const path = linkPaths[index];
    if (index < 3) {
      navigate(`/login/${path}`);
    } else {
      navigate(`/${path}`);
    }
  };

  return (
    <div className="relative flex flex-col justify-center items-center h-screen w-screen text-center overflow-hidden">
      {/* Geometric Background Design */}
     
      <header className="absolute top-[10vh] z-10 [text-shadow:2px_2px_8px_rgba(0,0,0,0.7)]">
        <h1 className="text-5xl font-bold mb-2 text-white">Welcome to the Agri-Chain Portal</h1>
        <p className="text-xl text-gray-300">Select your entry point below</p>
      </header>

      <ThreeDHoverGallery
        images={galleryImages}
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
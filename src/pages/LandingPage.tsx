import React from 'react';
import { useNavigate } from 'react-router-dom';
import ThreeDHoverGallery from '../components/ThreeDHoverGallery';

const galleryImages = [
  "https://i.pinimg.com/736x/b5/03/84/b503840363eb5a4d5807a4d5d09cacae.jpg",
  "https://i.pinimg.com/736x/bb/fd/f4/bbfdf4d772149ffa19f74c0d989ad97b.jpg",
  "https://i.pinimg.com/736x/a8/ca/0f/a8ca0fd6894db828c12767afb4f3e2f1.jpg",
  "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
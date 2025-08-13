import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Layout } from "../components/Layout";
import NavigationPages from './NavigationPages';
import { Tilt } from 'react-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useFetchData } from '../hooks/useFetchData';
import bgDesign from "../assets/bgdesign3.jpg";
import GalleryBanner from '../assets/Family.jpg'
import { IoIosClose } from "react-icons/io";
import { Helmet } from "react-helmet";

gsap.registerPlugin(ScrollTrigger);

const ImageGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [filteredImages, setFilteredImages] = useState([]);
  const [categories, setCategories] = useState(['ALL']);
  const [isFullScreen, setIsFullScreen] = useState(false); 
  const [fullScreenImage, setFullScreenImage] = useState(null); 
  const galleryRef = useRef(null);

  const baseURL = process.env.REACT_APP_BASE_URL;
  const galleryURL = `${baseURL}/api/v1/gallery`;
  const categoryURL = `${baseURL}/api/v1/gallery/?category`;

  const { data: images,  error: imagesError,  } = useFetchData(galleryURL);
  const { data: categoryData,  error: categoriesError } = useFetchData(categoryURL);

  useEffect(() => {
    if (categoryData && categoryData.success) {
      const uniqueCategories = ['ALL', ...new Set(categoryData.data.map(item => item.category))];
      setCategories(uniqueCategories);
    }
  }, [categoryData]);

  useEffect(() => {
    if (imagesError) {
      console.error('Error fetching images:', imagesError);
    }
    if (categoriesError) {
      console.error('Error fetching categories:', categoriesError);
    }
  }, [imagesError, categoriesError]);

  useEffect(() => {
    if (Array.isArray(images?.data)) {
      // Sort images by createdAt date (newest first)
      const sortedImages = [...images.data].sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });

      const filtered = selectedCategory === 'ALL'
        ? sortedImages
        : sortedImages.filter((image) => image.category === selectedCategory);
      
      setFilteredImages(filtered);
    } else {
      setFilteredImages([]);
    }
  }, [selectedCategory, images]);

  useEffect(() => {
    gsap.from(".category-btn", {
      duration: 0.8,
      opacity: 0,
      y: 50,
      stagger: 0.2,
      ease: "power3.out"
    });

    ScrollTrigger.batch(".gallery-image", {
      onEnter: (elements) => {
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          overwrite: true
        });
      },
      onLeave: (elements) => {
        gsap.set(elements, { opacity: 0, y: 50 });
      },
      onEnterBack: (elements) => {
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          overwrite: true
        });
      },
      onLeaveBack: (elements) => {
        gsap.set(elements, { opacity: 0, y: 50 });
      }
    });
  }, []);

  const openFullScreen = (image) => {
    setFullScreenImage(image);
    setIsFullScreen(true);
  };

  const closeFullScreen = () => {
    setIsFullScreen(false);
    setFullScreenImage(null);
  };

  return (
    <Layout>
      <Helmet>
  <title>Gallery - GD Goenka Public School Aligarh</title>
  <meta name="description" content="Browse our image gallery to see vibrant campus life and school events at GD Goenka Aligarh." />
</Helmet>

      <motion.div
        className="relative h-[35vh] md:h-[60vh] lg:h-[60vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.img
          src={GalleryBanner}
          alt="Gallery Banner"
          className="h-full w-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <motion.h1
          className="absolute bottom-4 shadow-md md:bottom-6 left-4 md:left-8 text-3xl md:text-5xl font-bold text-[#2a3c7e] bg-white bg-opacity-80 px-4 py-2 rounded"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            type: "spring",
            stiffness: 100,
          }}
        >
          GALLERY
        </motion.h1>
      </motion.div>

      <NavigationPages />

      <div className="categories bg-pattern">
        {categories.map((category, index) => (
          <motion.button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            {category.toUpperCase()}
          </motion.button>
        ))}
      </div>

      <motion.div
        className="gallery bg-pattern"
        ref={galleryRef}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        <AnimatePresence>
          {Array.isArray(filteredImages) && filteredImages.map((image, index) => (
            <motion.div
              key={`${image._id}-${index}`}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="gallery-item"
            >
              <Tilt className="Tilt" options={{ max: 25, scale: 1.05 }}>
                <LazyLoadImage
                  src={`${image.image}`}
                  alt={`${image.category} ${index + 1}`}
                  effect="blur"
                  className="gallery-image"
                  onClick={() => openFullScreen(image)} // Open full screen on click
                />
              </Tilt>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Full-Screen Modal */}
      {isFullScreen && (
        <div className="fullscreen-modal" onClick={closeFullScreen}>
          <div className="fullscreen-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={`${fullScreenImage.image}`}
              alt="Full Screen"
              className="fullscreen-image"
            />
            <button className="close-btn" onClick={closeFullScreen}><IoIosClose /></button>
          </div>
        </div>
      )}

      <style>{`
        .bg-pattern {
          background-image: url(${bgDesign});
          background-size: 10px;
          background-repeat: repeat;
        }
        .categories {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          margin: 20px 0;
          gap: 15px;
        }
        .category-btn {
          padding: 12px 30px;
          font-size: 16px;
          cursor: pointer;
          border: none;
          border-radius: 50px;
          background: linear-gradient(45deg, #00C9FF, #92FE9D);
          color: white;
          font-weight: 600;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
          transition: background 0.3s ease, transform 0.2s ease;
        }
        .category-btn:hover {
          background: linear-gradient(45deg, #FF5E3A, #FFB9A1);
          transform: scale(1.05);
          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
        }
        .category-btn.active {
          background: linear-gradient(45deg, #8E2DE2, #4A00E0);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
          transform: scale(1.1);
        }
        .gallery {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
          padding: 20px;
        }
        .gallery-item {
          position: relative;
        }
        .gallery-image {
          width: 400px;
          height: 200px;
          object-fit: cover;
          border-radius: 15px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .gallery-image:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        /* Full-Screen Modal Styles */
        .fullscreen-modal {
          position: fixed;
          top: 60px;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999;
        }
        .fullscreen-content {
          position: relative;
          max-width: 100vh;
          max-height: 100vh;
          overflow: hidden;
        }
        .fullscreen-image {
          width: 800px;
          height: 600px;
          object-fit: cover;
        }
        .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgba(255, 255, 255, 0.8);
          border: none;
          padding: 6px;
          font-size: 30px;
          color: #000;
          cursor: pointer;
          border-radius: 50%;
          transition: background 0.3s ease;
        }
        .close-btn:hover {
          background: rgba(255, 255, 255, 1);
        }

        @media (max-width: 768px) {
          .gallery {
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          }
          .gallery-image {
            height: 150px;
          }9

          
          .fullscreen-image {
            width: 500px;
            height: 400px;
            object-fit: cover;
          }
        }
      `}</style>
    </Layout>
  );
};

export default ImageGallery;

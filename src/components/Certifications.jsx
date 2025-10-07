import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import ImageModal from "./ImageModal";
import { certificationsData } from "../../constants";
import CertificationCard from "./CertificationCard";

const Certifications = () => {
  const scrollRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <SectionWrapper
        id="certifications"
        className="bg-gray-50/50 dark:bg-black/20"
      >
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
            <span className="text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text">
              Credentials & Certifications
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400">
            My collection of certified skills, validating my expertise and
            commitment to learning.
          </p>
        </div>

        <div className="relative cursor-grab active:cursor-grabbing">
          <motion.div
            ref={scrollRef}
            className="pb-8 overflow-x-auto"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <motion.div
              className="flex gap-8 px-4"
              drag="x"
              dragConstraints={{
                left: -((certificationsData.length - 2.5) * 320),
                right: 0,
              }}
            >
              {certificationsData.map((cert, index) => (
                <CertificationCard
                  key={index}
                  cert={cert}
                  onImageClick={handleImageClick}
                />
              ))}
            </motion.div>
          </motion.div>
          <div className="absolute top-0 bottom-0 left-0 w-16 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-16 pointer-events-none"></div>
        </div>
      </SectionWrapper>

      <AnimatePresence>
        {selectedImage && (
          <ImageModal imageUrl={selectedImage} onClose={closeModal} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Certifications;

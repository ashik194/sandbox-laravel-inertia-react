import React, { useState } from 'react'
import { FaPencil } from "react-icons/fa6";
import manImage from "../../../public/images/man.jpg"
import LogoModal from './LogoModal';

export default function LogoUp() {
    const [avatarUrl, setAvatarUrl] = useState(manImage);
    const [modalOpen, setModalOpen] = useState(false);
  
    const handleImageCrop = (e) => {
      e.preventDefault();
      setModalOpen(true)
    }
  
    const updateAvatar = (imgSrc) => {
      setAvatarUrl(imgSrc);
    };
  
    return (
      <div className="flex flex-col items-center pt-12">
        <div className="relative">
          {/* <Image
            src={avatarUrl}
            alt="Avatar"
            className="w-[150px] h-[150px] rounded-full border-2 border-gray-400"
          /> */}
          <img 
          src={avatarUrl}
          alt="Avater"
          className="w-[150px] h-[150px] rounded-full border-2 border-gray-400"
          />
          <button
            className="absolute -bottom-3 left-0 right-0 m-auto w-fit p-[.35rem] rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-600"
            title="Change photo"
            onClick={handleImageCrop}
          >
            <FaPencil className="text-white"/>
          </button>
        </div>
        <p className="text-gray-500 mt-4 text-xl">Logo Select</p>
        {modalOpen && (
          <LogoModal
            avatarUrl={avatarUrl}
            updateAvatar={updateAvatar}
            closeModal={() => setModalOpen(false)}
          />
        )}
      </div>
    );
  };
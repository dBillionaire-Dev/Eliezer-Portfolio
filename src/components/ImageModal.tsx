// import React, { useEffect } from 'react';
// import { X } from 'lucide-react';

// interface ImageModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   imageSrc: string;
//   imageAlt: string;
// }

// const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageSrc, imageAlt }) => {
//   useEffect(() => {
//     const handleEscape = (e: KeyboardEvent) => {
//       if (e.key === 'Escape') {
//         onClose();
//       }
//     };

//     if (isOpen) {
//       document.addEventListener('keydown', handleEscape);
//       document.body.style.overflow = 'hidden';
//     }

//     return () => {
//       document.removeEventListener('keydown', handleEscape);
//       document.body.style.overflow = 'unset';
//     };
//   }, [isOpen, onClose]);

//   if (!isOpen) return null;

//   return (
//     <div 
//       className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
//       onClick={onClose}
//     >
//       <div className="relative max-w-7xl max-h-full">
//         <button
//           onClick={onClose}
//           className="absolute -top-12 right-0 text-white hover:text-orange-400 transition-colors duration-200"
//         >
//           <X size={32} />
//         </button>

//         <img
//           src={imageSrc}
//           alt={imageAlt}
//           className="max-w-full max-h-[90vh] object-contain cursor-pointer"
//           onClick={onClose}
//           onContextMenu={(e) => e.preventDefault()}
//           draggable={false}
//           style={{ userSelect: 'none' }}
//         />
//       </div>
//     </div>
//   );
// };

// export default ImageModal;

// import React, { useEffect, useRef } from 'react';

// interface Props {
//   isOpen: boolean;
//   onClose: () => void;
//   imageSrc: string;
//   imageAlt: string;
//   onNext: () => void;
//   onPrev: () => void;
// }

// const ImageModal: React.FC<Props> = ({ isOpen, onClose, imageSrc, imageAlt, onNext, onPrev }) => {
//   const touchStartX = useRef<number | null>(null);
//   const touchEndX = useRef<number | null>(null);

//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === 'Escape') onClose();
//       if (e.key === 'ArrowRight') onNext();
//       if (e.key === 'ArrowLeft') onPrev();
//     };
//     document.addEventListener('keydown', handleKeyDown);
//     return () => document.removeEventListener('keydown', handleKeyDown);
//   }, [onClose, onNext, onPrev]);

//   const handleTouchStart = (e: React.TouchEvent) => {
//     touchStartX.current = e.changedTouches[0].clientX;
//   };

//   const handleTouchEnd = (e: React.TouchEvent) => {
//     touchEndX.current = e.changedTouches[0].clientX;
//     if (touchStartX.current !== null && touchEndX.current !== null) {
//       const diff = touchStartX.current - touchEndX.current;
//       if (diff > 50) onNext(); // swipe left
//       if (diff < -50) onPrev(); // swipe right
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
//       onClick={onClose}
//       onTouchStart={handleTouchStart}
//       onTouchEnd={handleTouchEnd}
//     >
//       <div className="relative max-w-3xl mx-auto" onClick={(e) => e.stopPropagation()}>
//         <img src={imageSrc} alt={imageAlt} className="max-h-[80vh] max-w-full rounded shadow-xl" />
//         <button
//           className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-4xl px-3"
//           onClick={onPrev}
//         >
//           ‹
//         </button>
//         <button
//           className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-4xl px-3"
//           onClick={onNext}
//         >
//           ›
//         </button>
//         <button
//           className="absolute top-4 right-4 text-white text-2xl"
//           onClick={onClose}
//         >
//           ✕
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ImageModal;

import React, { useEffect, useCallback } from 'react';
import { IoClose, IoChevronBack, IoChevronForward } from 'react-icons/io5';

type ImageModalProps = {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  onNext?: () => void;
  onPrev?: () => void;
  showNext?: boolean;
  showPrev?: boolean;
};

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  onNext,
  onPrev,
  showNext = true,
  showPrev = true
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && showNext) onNext?.();
      if (e.key === 'ArrowLeft' && showPrev) onPrev?.();
    },
    [isOpen, onClose, onNext, onPrev, showNext, showPrev]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-3xl hover:text-orange-500"
        aria-label="Close"
      >
        <IoClose />
      </button>

      {showPrev && (
        <button
          onClick={onPrev}
          className="absolute left-4 text-white text-4xl hover:text-orange-500"
          aria-label="Previous"
        >
          <IoChevronBack />
        </button>
      )}

      <img
        src={imageSrc}
        alt={imageAlt}
        className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg shadow-xl"
        onContextMenu={(e) => e.preventDefault()}
        draggable={false}
        style={{ userSelect: 'none' }}
      />

      {showNext && (
        <button
          onClick={onNext}
          className="absolute right-4 text-white text-4xl hover:text-orange-500"
          aria-label="Next"
        >
          <IoChevronForward />
        </button>
      )}
    </div>
  );
};

export default ImageModal;
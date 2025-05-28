// import React, { useEffect, useCallback } from 'react';
// import { IoClose, IoChevronBack, IoChevronForward } from 'react-icons/io5';

// type ImageModalProps = {
//   isOpen: boolean;
//   onClose: () => void;
//   imageSrc: string;
//   imageAlt: string;
//   onNext?: () => void;
//   onPrev?: () => void;
//   showNext?: boolean;
//   showPrev?: boolean;
// };

// const ImageModal: React.FC<ImageModalProps> = ({
//   isOpen,
//   onClose,
//   imageSrc,
//   imageAlt,
//   onNext,
//   onPrev,
//   showNext = true,
//   showPrev = true
// }) => {
//   const handleKeyDown = useCallback(
//     (e: KeyboardEvent) => {
//       if (!isOpen) return;
//       if (e.key === 'Escape') onClose();
//       if (e.key === 'ArrowRight' && showNext) onNext?.();
//       if (e.key === 'ArrowLeft' && showPrev) onPrev?.();
//     },
//     [isOpen, onClose, onNext, onPrev, showNext, showPrev]
//   );

//   useEffect(() => {
//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [handleKeyDown]);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4">
//       <button
//         onClick={onClose}
//         className="absolute top-4 right-4 text-white text-3xl hover:text-orange-500"
//         aria-label="Close"
//       >
//         <IoClose />
//       </button>

//       {showPrev && (
//         <button
//           onClick={onPrev}
//           className="absolute left-4 text-white text-4xl hover:text-orange-500"
//           aria-label="Previous"
//         >
//           <IoChevronBack />
//         </button>
//       )}

//       <img
//         src={imageSrc}
//         alt={imageAlt}
//         className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg shadow-xl"
//         onContextMenu={(e) => e.preventDefault()}
//         draggable={false}
//         style={{ userSelect: 'none' }}
//       />

//       {showNext && (
//         <button
//           onClick={onNext}
//           className="absolute right-4 text-white text-4xl hover:text-orange-500"
//           aria-label="Next"
//         >
//           <IoChevronForward />
//         </button>
//       )}
//     </div>
//   );
// };

// export default ImageModal;

import React, { useEffect, useCallback, useRef, useState } from 'react';
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
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Pinch zoom states
  const imgContainerRef = useRef<HTMLDivElement | null>(null);
  const initialDistance = useRef<number | null>(null);
  const [scale, setScale] = useState(1);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && showNext) onNext?.();
      if (e.key === 'ArrowLeft' && showPrev) onPrev?.();
    },
    [isOpen, onClose, onNext, onPrev, showNext, showPrev]
  );

  const handleTouchStart = (e: TouchEvent) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      initialDistance.current = Math.sqrt(dx * dx + dy * dy);
    } else {
      touchStartX.current = e.touches[0].clientX;
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (e.touches.length === 2 && initialDistance.current) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const newDistance = Math.sqrt(dx * dx + dy * dy);
      const newScale = Math.min(Math.max(newDistance / initialDistance.current, 1), 3); // Limit zoom between 1x and 3x
      setScale(newScale);
    }
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (e.touches.length < 2) {
      initialDistance.current = null;
    }

    if (touchStartX.current !== null && e.changedTouches.length === 1) {
      touchEndX.current = e.changedTouches[0].clientX;
      const delta = touchStartX.current - touchEndX.current;
      const threshold = 50;

      if (delta > threshold && showNext) {
        onNext?.(); // swipe left
      } else if (delta < -threshold && showPrev) {
        onPrev?.(); // swipe right
      }

      touchStartX.current = null;
      touchEndX.current = null;
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('touchstart', handleTouchStart);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
    } else {
      document.body.style.overflow = 'auto';
      setScale(1); // reset zoom
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isOpen, handleKeyDown]);

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

      <div
        ref={imgContainerRef}
        className="max-h-[80vh] max-w-[90vw] overflow-hidden"
        style={{ touchAction: 'none' }}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="object-contain rounded-lg shadow-xl transition-transform duration-100"
          style={{
            transform: `scale(${scale})`,
            maxHeight: '80vh',
            maxWidth: '90vw',
            userSelect: 'none'
          }}
          onContextMenu={(e) => e.preventDefault()}
          draggable={false}
        />
      </div>

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

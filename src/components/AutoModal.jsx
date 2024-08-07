import { useEffect } from 'react'

const CustomModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-black text-gray-200 p-4 rounded-lg shadow-lg relative w-full max-w-md h-60 flex flex-col items-start justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-0 right-0 px-2 text-xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="w-full">
          <h2 className="text-xl">
            Let&apos;s build it{' '}
            <span className="text-[#ff5200] italic">together</span>
          </h2>
          <div className="w-full">
            <p className="text-xs">feel free to connect to us any day</p>
          </div>
          <div className="h-px bg-[#ff5200] w-full rounded-full mt-2"></div>
        </div>
        <div className="flex-grow flex flex-col justify-between py-6 gap-2 items-start w-full h-full">
          <div className="flex justify-between w-full">
            <p className="">Email </p>
            <a
              href="mailto:hellotriptribe@gmail.com"
              className="text-[#ff5200] hover:underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              hellotriptribe@gmail.com
            </a>
          </div>
          <div className="flex justify-between w-full">
            <p className="">Message </p>
            <a
              href="https://wa.me/+917489190166"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ff5200]  hover:underline"
            >
              Chat on WhatsApp
            </a>
          </div>
          <div className="flex justify-between w-full">
            <p className="">Call </p>
            <a
              href="tel:+917489190166"
              className="text-[#ff5200] hover:underline"
            >
              +91-7489190166
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomModal

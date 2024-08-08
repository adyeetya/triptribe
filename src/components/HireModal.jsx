import { useState } from 'react'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
const HireModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    services: [],
  })

  const servicesList = [
    'Websites',
    'Branding',
    'Product Design',
    'Social Media',
    'Content Writing',
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target
    setFormData((prevState) => {
      const services = checked
        ? [...prevState.services, value]
        : prevState.services.filter((service) => service !== value)
      return { ...prevState, services }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    toast.success('We will contact you soon!')
    onClose()
    // Add logic to email the formData here
  }

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
      className="fixed inset-0 top-16 bg-black bg-opacity-50 flex items-center justify-center z-[60]"
      onClick={onClose}
    >
      <div
        className="bg-white text-black rounded-lg shadow-lg relative w-full mx-2 md:mx-0 max-h-[calc(100vh-5rem)] flex flex-col md:flex-row items-stretch"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-0 right-0 px-2 text-xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Left Gradient Section */}
        <div className="bg-gradient-to-r from-pink-500 to-orange-400 md:w-1/4 rounded-l-lg hidden md:block"></div>

        {/* Right Form Section */}
        <div className="w-full p-6 md:w-3/4 flex flex-col justify-between">
          <div className="mb-4">
            <h2 className="text-lg">
              Let&apos;s build it{' '}
              <span className="text-[#ff5200] italic">together</span>
            </h2>
            <p className="text-xs">don&apos;t worry your information is safe</p>
            <div className="h-px bg-[#ff5200] w-full rounded-full mt-2"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your or Brands Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 border rounded-md"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 border rounded-md"
                required
              />
            </div>

            <div>
              <input
                type="tel"
                name="number"
                placeholder="Contact Number"
                value={formData.number}
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 border rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Services</label>
              <div className="flex flex-wrap mt-2">
                {servicesList.map((service) => (
                  <label key={service} className="flex items-center mr-4">
                    <input
                      type="checkbox"
                      value={service}
                      checked={formData.services.includes(service)}
                      onChange={handleCheckboxChange}
                      className="mr-2"
                    />
                    {service}
                  </label>
                ))}
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#ff5200] text-white px-4 py-2"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default HireModal

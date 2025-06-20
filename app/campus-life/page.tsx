import Image from "next/image"

const images = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cloris-ying-zRBgN5bCRVA-unsplash.jpg-wUVzWTwoS5G0TsvPZhWe5zbQPkeaYj.jpeg",
    alt: "WGU Campus Green Space",
    caption: "Our beautiful campus grounds provide the perfect environment for relaxation and outdoor study",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cie-ptit-AaDqipXeAPU-unsplash.jpg-aaZtsUXWS2rWoE563RqgQ4u8MJ9kyK.jpeg",
    alt: "WGU Study Space",
    caption: "Modern study spaces blend comfort with functionality for optimal learning",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/eman-ali--xIWf2DUq0I-unsplash.jpg-HssRO3F0J0RqfmsmIb8W5L3xQnRoAi.jpeg",
    alt: "WGU Library Resources",
    caption: "Our extensive collection of academic resources supports every field of study",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/w-r-Y4lc67uKU_Y-unsplash.jpg-Oq1q0ENKQV3edwSidsJroRVR31L2C4.jpeg",
    alt: "WGU Technology Center",
    caption: "State-of-the-art technology centers equipped with the latest resources",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shiona-das-mj8SvAb2pAc-unsplash.jpg-AgkpXXQpzfciw0m8TLy5zmKxaf0IXB.jpeg",
    alt: "WGU Study Materials",
    caption: "Quality study materials and resources provided for all students",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vasily-koloda-8CqDvPuo_kI-unsplash.jpg-nsUT9EYU9DVbGEJ6RN4hDWZzfk9Vao.jpeg",
    alt: "WGU Graduation Ceremony",
    caption: "Celebrating academic achievement at our graduation ceremonies",
  },
]

export default function CampusLife() {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-wgu-navy">Campus Life at WGU</h1>
        <p className="text-xl text-center mb-12 text-black">
          Experience the perfect blend of modern facilities, peaceful study spaces, and vibrant community life at
          Western Governors University
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 border border-gray-100"
            >
              <div className="relative h-64">
                <Image src={image.src} alt={image.alt} fill className="object-cover" />
              </div>
              <div className="p-4">
                <p className="text-wgu-navy text-sm font-medium">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

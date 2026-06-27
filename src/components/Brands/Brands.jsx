import React from 'react'
import './Brands.css'

const brands = [
  { id: 1, name: 'Akai', logo: '/images/brands/akai.jpg' },
  { id: 2, name: 'Filgap', logo: '/images/brands/filgap.jpg' },
  { id: 3, name: 'GoFresh', logo: '/images/brands/gofresh.jpg' },
  { id: 4, name: "Woof Ministry", logo: '/images/brands/Woof Ministry.jpeg' },
  { id: 5, name: 'Korleone', logo: '/images/brands/korleone.jpg' },
  { id: 6, name: 'Lal Gulab', logo: '/images/brands/lal_gulab.jpg' },
  { id: 7, name: "Maw & Paw", logo: '/images/brands/Maw and Paw.jpeg' },
  { id: 8, name: 'Magic Paints', logo: '/images/brands/magic_paints.jpg' },
  { id: 9, name: 'Saukhyam', logo: '/images/brands/saukhyam.jpg' },
  { id: 10, name: 'Wit Blox', logo: '/images/brands/wit_blox.jpg' },
  { id: 11, name: 'Brown Auric', logo: "/images/brands/Angel's and Co.jpg"},
  { id: 12, name: "Waggy Zone", logo: '/images/brands/Waggy Zone.jpeg' },
  { id: 13, name: "Angel's and Co", logo: '/images/brands/Brown Auric.jpeg' },
  { id: 14, name: "Nioax", logo: '/images/brands/Nioax Coffee.jpg' },
  { id: 15, name: "Hobbyist Nirvana", logo: '/images/brands/Hobbyist Nirvana.jpeg' },
  { id: 16, name: "Moarmouz", logo: '/images/brands/Moarmouz.jpg' },

]

const Brands = () => {
  return (
    <section className="brands-section section-padding-xs">
      <div className="container">
        <div className="section-header">
          <h2>Brands We Work With</h2>
        </div>

        <div className="brands-marquee">
          <div className="brands-track">
            {/* Duplicate for infinite loop */}
            {[...brands, ...brands].map((brand, index) => (
              <div key={index} className="brand-item">
                <img src={brand.logo} alt={brand.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brands
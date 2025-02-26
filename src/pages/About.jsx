import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Forever could be an innovative business that focuses on blending creativity with
           vibrant, colorful design concepts. The name "Hues" suggests a focus on colors, 
           which could indicate your expertise in visual arts, branding, or creative design
            services. Whether you're involved in graphic design, web design, or any 
            creative industry, Hues Creatives conveys an artistic, dynamic, and bold
             approach to your work, aiming to create visually striking and unique solutions 
             for clients.
             </p>
         
          <p>Hues Creatives could also represent a creative agency that specializes in bringing
             a spectrum of ideas to life through color, design, and innovation. The word "Hues"
              symbolizes diversity and depth, suggesting that your business offers a range of
               creative solutions tailored to different needs and visions. Whether it's in 
               branding, digital media, or art direction, Hues Creatives stands for a fresh, 
               colorful approach to every project, emphasizing individuality, creativity, and
               the power of visual storytelling.
               </p>
        <b className='text-gray-800'>Our Mission</b>
        <p>
          At Hues Creatives, our mission is to inspire and empower businesses through innovative 
          design, bringing their unique stories to life with vibrant, purposeful, and visually 
          impactful solutions. We aim to transform ideas into captivating experiences that resonate 
          with audiences, ensuring that every project reflects creativity, authenticity, and a deep 
          understanding of our clients’ needs. Our goal is to build lasting connections through the
           power of color, design, and creativity, creating work that stands out and leaves a lasting 
           impression.
           </p>

        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>
          We meticulously select and refine every element of our design process to
           ensure that the final product exceeds expectations. Our team rigorously
            reviews each project for quality, accuracy, and consistency, ensuring 
            every detail aligns with the client’s vision. We implement a thorough 
            feedback and testing system, continuously improving our work to guarantee 
            flawless results. Through this dedication to excellence, we provide 
            high-quality, impactful creative solutions that deliver lasting value to
             our clients.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>
          We prioritize convenience by streamlining every aspect of the creative 
          process, making it easy for our clients to collaborate with us. From initial 
          consultation to final delivery, we ensure a smooth, hassle-free experience 
          with clear communication, fast turnaround times, and flexible services 
          tailored to meet your needs. Our goal is to make the entire journey as 
          effortless as possible, allowing you to focus on what matters most while 
          we bring your creative vision to life.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>
          We are committed to providing exceptional customer service by placing 
          our clients at the heart of everything we do. From the moment you reach out 
          to us, our team is dedicated to offering personalized attention, clear 
          communication, and prompt responses. We listen carefully to your needs, offer 
          expert guidance, and ensure every project is delivered with the utmost care 
          and attention to detail. Our goal is to build lasting relationships by exceeding 
          expectations and making your experience with us seamless and enjoyable every 
          step of the way.
          </p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About
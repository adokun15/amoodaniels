'use client'
import Image from "next/image";

export default function Home() {
  return (
    <main className=" px-4 space-y-10">
      {/* Header Section */}
      <header className="space-y-6  py-10">
        <Image src='/amoo-photo.jpeg' width={300} height={500} alt='Amoo Daniels' className='rounded-full mx-auto'/>
        <h1 className="text-3xl">Hey, I'm Amoo Daniels</h1>
        <button 
        animate={{ scale: 1.2 }}
        className='bg-[#f06c3df5] p-3 rounded-full'>Download CV</button>
        <button className='border border-[#f06c3df5]  text-[#f06c3df5] p-3 rounded-full'>Book a call</button>
        
      </header>

      {/* About Section */}
      <section id="about" className='min-h-[80vh]'>
        <h2 className='text-2xl'>Who Am I?</h2>
        <p>
         A brief info about youself that is not ai generated. 
         </p>
      </section>

      {/* Services Section */}
      <section className="min-h-[80vh]" id="services">
        <h2 className='text-2xl'>What can I Offer?</h2>
        
        <ul>
          <li>Web Development</li>
          <li>UI/UX Design</li>
          <li>Consulting</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-[80vh]">
        <h2 className='text-2xl'>
        Past Projects
          </h2>
        <div>
          <h3>Abneth Fashion Brand</h3>
          <p>A brief description of Project 1.</p>
        </div>
        <div>
          <h3>Epiphany Community</h3>
          <p>A brief description of Project 2.</p>
        </div>
      </section>

<section className="min-h-[80vh]">
<h1>Send me a Message</h1>
  <form className="*:block">
    <label className="font-bold">Name</label>
    <input className='p-3 text-black bg-slate-100 rounded'/>
    <label>Email</label>
    <input className='p-3 text-black bg-slate-100 rounded'/>
    <label>Message</label>
    <input className='p-3 text-black bg-slate-100 rounded'/>
</form>

</section>
      {/* Footer Section */}
      <footer className='max-h-10'>
        <p>© 2025 Amoo Daniel. All rights reserved.</p>
        <p>
          <a href="https://github.com/amoodaniels">GitHub</a> |{" "}
          <a href="https://linkedin.com/in/amoodaniels">LinkedIn</a>
        </p>
      </footer>
    </main>
  );
}

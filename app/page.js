"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" px-4 max-w-md mx-auto space-y-10 py-10">
      <nav className="flex justify-between w-[60%] mx-auto bg-transparent items-center py-4">
        <div>
          <Image
            src="/icons8-facebook-logo-32.png"
            width={32}
            height={32}
            alt="facebook"
          />
        </div>
        <div>
          <Image
            src="/icons8-instagram-32.png"
            width={32}
            height={32}
            alt="Instagram"
          />
        </div>
        <div>
          <Image src="/icons8-x-30.png" width={30} height={30} alt="Twitter" />
        </div>
      </nav>
      {/* Header Section */}
      <header className="space-y-6  py-10">
        <Image
          src="/amoo-photo.jpeg"
          width={150}
          height={300}
          alt="Amoo Daniels"
          className="rounded-full mx-auto"
        />
        <h1 className="text-[32px] font-[700] tracking-wider">
          Hey, I'm Amoo Daniels
        </h1>
        <p>A thought leader that scales Business</p>
        <div className="space-x-4">
          <button
            animate={{ scale: 1.2 }}
            className="bg-[#f06c3df5] p-3 rounded-full"
          >
            Book a Call
          </button>
          <button className="border border-[#f06c3df5]  text-[#f06c3df5] p-3 rounded-full">
            About me{" "}
          </button>
        </div>
      </header>

      <section className="flex gap-[4%] min-h-[20vh] items-center">
        <div>
          <Image
            src="/design.ico"
            width={30}
            height={50}
            alt="Design ai"
            className="rounded-full mx-auto"
          />
        </div>
        <div>
          <Image
            src="/takeapp.png"
            width={30}
            height={50}
            alt="Design ai"
            className="rounded-full mx-auto"
          />
        </div>
        <div>
          <Image
            src="/lovable.ico"
            width={30}
            height={50}
            alt="Design ai"
            className="rounded-full mx-auto"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-[80vh]">
        <h2 className="text-2xl">About Me</h2>
        <p>
          As a visionary thought leader, nation builder and culture shaper, I
          drive innovation and growth in the digital landscape through strategic
          leadership.
        </p>
        <p>
          With my expertise in web development, Content Creation and
          entrepreneur, I empower individuals and organisations to unlock their
          full potential.
        </p>
      </section>

      {/* Services Section */}
      <section className="min-h-[80vh]" id="services">
        <h2 className="text-2xl">What can I Offer?</h2>

        <ul>
          <li>Web Development</li>
          <li>UI/UX Design</li>
          <li>Consulting</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-[80vh]">
        <h2 className="text-2xl">Past Projects</h2>
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
          <input className="p-3 text-black bg-slate-100 rounded" />
          <label>Email</label>
          <input className="p-3 text-black bg-slate-100 rounded" />
          <label>Message</label>
          <input className="p-3 text-black bg-slate-100 rounded" />
        </form>
      </section>
      {/* Footer Section */}
      <footer className="max-h-10">
        <p>© 2025 Amoo Daniel. All rights reserved.</p>
        <p>
          <a href="https://github.com/amoodaniels">GitHub</a> |{" "}
          <a href="https://linkedin.com/in/amoodaniels">LinkedIn</a>
        </p>
      </footer>
    </main>
  );
}

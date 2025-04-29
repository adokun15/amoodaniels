"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="scroll-smooth px-4 max-w-md mx-auto space-y-10 py-10">
      <nav className="flex justify-between w-[60%] mx-auto bg-transparent items-center py-4">
        <div>
          <a href="https://facebook.com/share/1Kas2TBVxy" target="_blank">
            <Image
              src="/icons8-facebook-logo-32.png"
              width={32}
              height={32}
              alt="facebook"
            />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/amoodaniels" target="_blank">
            <Image
              src="/icons8-instagram-32.png"
              width={32}
              height={32}
              alt="Instagram"
            />
          </a>
        </div>
        <div>
          <a href="https://x.com/danielsamoo" target="_blank">
            <Image
              src="/icons8-x-30.png"
              width={30}
              height={30}
              alt="Twitter"
            />
          </a>
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
        <div className="space-y-2">
          <h1 className="text-[32px] font-[700] tracking-wider">
            Hey, I'm Amoo Daniels
          </h1>
          <p className="italic text-slate-500 pl-1">
            Regulates the earth with the ordinance of heaven.
          </p>
        </div>
        {/*<div className="space-x-4">
          <button
            animate={{ scale: 1.2 }}
            className="bg-[#f06c3df5] p-3 rounded-full"
          >
            Book a Call
          </button>
          <button className="border border-[#f06c3df5]  text-[#f06c3df5] p-3 rounded-full">
            About me{" "}
          </button>
        </div>*/}
      </header>

      <section className="flex gap-[10%] min-h-[10vh] justify-center items-center">
        <div>
          <Image
            src="/design.ico"
            width={30}
            height={50}
            alt="Design ai"
            className="rounded-full mx-auto hover:scale-125 transition-all"
          />
        </div>
        <div>
          <Image
            src="/takeapp.png"
            width={30}
            height={50}
            alt="Design ai"
            className="rounded-full mx-auto hover:scale-125 transition-all"
          />
        </div>
        <div>
          <Image
            src="/lovable.ico"
            width={30}
            height={50}
            alt="Design ai"
            className="rounded-full mx-auto hover:scale-125 transition-all"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="space-y-12 min-h-[80vh]">
        <h2 className="text-3xl">About Me</h2>
        <p className="leading-8 my-4 tracking-wider text-[16px]">
          As a thought leader, a nation builder and culture shaper, I drive
          innovation and modify business in the economy landscape through
          strategic leadership skill.
        </p>
        <p className="leading-8 my-4 tracking-wider text-[16px]">
          With my expertise in tech, business and entertainment, I empower
          individuals and entities to deploy their intrinsic values and
          potentials.
        </p>
      </section>

      {/* Services Section */}
      <section className="min-h-[100vh] my-10" id="services">
        <h2 className="text-3xl my-10">What are my capabilities?</h2>

        <ul className="space-y-16">
          <li className="min-h-16 shadow rounded p-6">
            <div className="flex gap-2 items-center text-[16px] font-semibold">
              <Image
                src="/icons8-web-32.png"
                alt="web"
                width={32}
                height={32}
              />
              <span>I'm a Web Developer</span>
            </div>
            <article className="tracking-wider">
              I use tools like like lovable and design app to craft engaging
              online experience for diverse client and the use takeapp for
              e-commerce management.
            </article>
          </li>
          <li className="min-h-16 shadow space-y-3 rounded p-6">
            <div className="flex gap-2 items-center text-[16px] font-semibold">
              <Image
                src="/icons8-community-32.png"
                alt="community"
                width={32}
                height={32}
              />
              <span>I'm a Community Builder</span>
            </div>
            <article className="tracking-wider">
              Founder and CEO of abneth Fashion Brand, a Christian-based fashion
              label promoting values driven style.
            </article>
          </li>
          <li className="min-h-16 shadow rounded p-6">
            <div className="flex gap-2 items-center text-[16px] font-semibold">
              <Image
                src="/icons8-camera-32.png"
                alt="camera"
                width={32}
                height={32}
              />
              <span> I'm a Content creator</span>
            </div>
            <article className="tracking-wider">
              Producing insightful content on science, technology, finance, and
              ideation, with a focus on truth and innovation.
            </article>
          </li>
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-[80vh] my-[10rem] space-y-12">
        <h2 className="text-3xl">My Portfolio</h2>
        <div className="space-y-6">
          <h3 className="text-[16px] font-semibold">Abneth Fashion Brand</h3>
          <p>
            A Christian-based fashion label promoting value driven style
            inspiring confidence and purpose
          </p>
          <button className="hover:scale-[110%] transition shadow shadow-orange-400 bg-[#f06c3df5] p-3 rounded-full text-white ">
            <a href="https://www.instagram.com/abneth_s" target="_blank">
              View On Instagram
            </a>
          </button>
        </div>

        <div className="space-y-6">
          <h3 className="text-[16px] font-semibold">Epiphany Community</h3>
          <p>
            A platform for changemakers to connect collaborate, and drive
            positive impact.
          </p>
          <button className="hover:scale-[110%] transition shadow shadow-orange-400 bg-[#f06c3df5] p-3 rounded-full text-white ">
            <a href="https://www.instagram.com/epiphany_league" target="_blank">
              View On Instagram
            </a>
          </button>
        </div>
        <div>
          <h3 className="text-[16px] font-semibold">Author & Writer </h3>
          <p>
            I am a prolific author and I have penned three impactful books:
            Anglophobia, Mekudam and The Last Epistles
          </p>
        </div>
        <div>
          <h3 className="text-[16px] font-semibold">Scientist & Visionary </h3>
          <p>
            With a passion for integrating faith and science, My vision is to
            shape the world according to divine principles, fostering positive
            change and innovation.
          </p>
        </div>
      </section>

      <section className="mt-16 min-h-[80vh] space-y-6">
        <h1 className="text-3xl">Get In touch</h1>
        <p className="text-[16px] tracking-wide">
          Let connect and explore how we collaborate and create meaningful
          impact{" "}
        </p>
        <div className="rounded p-4 shadow">
          <p>(Email) amoodaniels@yahoo.com</p>
        </div>
        <div>Or</div>
        <form className="*:block space-y-4 w-full">
          <label className="font-bold">Name</label>
          <input
            className="p-3  w-full outline-none text-black bg-slate-300 rounded"
            placeholder="Your Name"
          />
          <label className="font-bold">Email</label>
          <input
            className="p-3 w-full outline-none text-black bg-slate-300 rounded"
            placeholder="Your Email"
          />
          <label className="font-bold">Message</label>
          <textarea
            placeholder="Your thoughtful message..."
            className="outline-none resize-none p-3 min-h-48  w-full text-black bg-slate-300 rounded"
          ></textarea>
          <button
            type="button"
            className="hover:scale-[110%] transition w-full block bg-black p-3 rounded-full text-white dark:bg-white dark:text-black"
          >
            Coming Soon
          </button>
        </form>
      </section>
      {/* Footer Section */}
      <footer className="max-h-10">
        <p>© 2025 Amoo Daniels. All rights reserved.</p>
        <p>
          Built by{" "}
          <a className="font-bold" href="https://ohida.vercel.app">
            Ohida
          </a>
        </p>
      </footer>
    </main>
  );
}

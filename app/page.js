"use client";
import Image from "next/image";
import { ValidationError, useForm } from "@formspree/react";
import { useState } from "react";
export default function Home() {
  //send Email
  const [inputs, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  //Handle submission
  const [state, handleSubmission] = useForm("xovddanp");

  const handlechanges = (e) => {
    setInput({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="scroll-smooth px-4 max-w-md mx-auto space-y-10 py-10">
      <nav className="flex dark:bg-white/40 justify-between w-full px-[10%] rounded-full mx-auto bg-transparent items-center py-4">
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
          <a href="https://www.instagram.com/_amoodaniels" target="_blank">
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
          src="/IMG-20250509-WA0038.jpg"
          width={150}
          height={300}
          alt="Amoo Daniels"
          className="rounded-full mx-auto"
        />
        <div className="space-y-1">
          <h1 className="text-[32px] font-[700] tracking-wider">
            Hey, I'm Amoo Daniels
          </h1>
          <p className="italic px-1 dark:text-slate-300 text-slate-500 ">
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
          <a target="_blank" href="https://www.design.com/ai">
            <Image
              src="/design.ico"
              width={30}
              height={50}
              alt="Design ai"
              className="rounded-full mx-auto hover:scale-125 transition-all"
            />
            <p>Design AI</p>
          </a>
        </div>
        <div>
          <a target="_blank" href="https://www.take.app/">
            <Image
              src="/takeapp.png"
              width={30}
              height={50}
              alt=""
              className="rounded-full mx-auto hover:scale-125 transition-all"
            />
            <p>TakeApp</p>
          </a>
        </div>
        <div>
          <a href="https://lovable.dev/" target="_blank">
            <Image
              src="/lovable.ico"
              width={30}
              height={50}
              alt="Design ai"
              className="rounded-full mx-auto hover:scale-125 transition-all"
            />
            <p>Lovable</p>
          </a>
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
              <span> I'm a Leader</span>
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

        <div className="gap-6 space-y-3 flex">
          <Image
            src="/abneth.jpg"
            width={415}
            height={411}
            alt="Abneth Logo"
            className="max-w-[33%] hover:scale-125 transition rounded"
          />

          <article className="space-y-3">
            <h3 className="text-[20px] font-semibold">Abneth Fashion Brand</h3>
            <p className="px-1 dark:text-slate-100 text-slate-600  tracking-wide">
              A Christian-based fashion label promoting value driven style
              inspiring confidence and purpose
            </p>
            <button className="hover:bg-[#f06c3df5] font-semibold ring-2 transition hover:text-white ring ring-[#f06c3df5] transition p-3 rounded-full text-[#f06c3df5] ">
              <a href="https://www.instagram.com/abneth_s" target="_blank">
                View On Instagram
              </a>
            </button>
          </article>
        </div>

        <div className="gap-6 space-y-3 flex">
          <Image
            src="/epiphany.jpg"
            width={720}
            height={684}
            alt="Epiphany"
            className="max-w-[33%] hover:scale-125 transition rounded"
          />
          <article className="space-y-3">
            <h3 className="text-[20px] font-semibold">Epiphany Community</h3>
            <p className="px-1 dark:text-slate-100 text-slate-600  tracking-wide">
              A platform for changemakers to connect collaborate, and drive
              positive impact.
            </p>
            <button className="hover:bg-[#f06c3df5] font-semibold  ring-2 transition hover:text-white ring ring-[#f06c3df5] transition p-3 rounded-full text-[#f06c3df5] ">
              <a
                href="https://www.instagram.com/epiphany_league"
                target="_blank"
              >
                View On Instagram
              </a>
            </button>
          </article>
        </div>

        <div className="space-y-3">
          <h3 className="text-[20px] font-semibold">Author & Writer </h3>
          <p className="px-1 dark:text-slate-100 text-slate-600 leading-6 tracking-wide">
            I am a prolific author and I have penned three impactful books{" "}
            <a
              className="text-[#f06c3df5] underline font-semibold"
              href="https://a.co/d/cFdLxQ8"
              target="_blank"
            >
              Anglophobia
            </a>
            ,{" "}
            <a
              className="text-[#f06c3df5] underline font-semibold"
              href="https://a.co/d/3aH00u1"
              target="_blank"
            >
              {" "}
              Mekudam
            </a>{" "}
            and <b>The Last Epistles</b>
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-[20px] font-semibold">Scientist & Visionary </h3>

          <p className="px-1 dark:text-slate-100 text-slate-600  tracking-wide">
            With a passion for integrating <b>faith</b> and <b>science</b>, My
            vision is to shape the world according to divine principles,
            fostering positive change and innovation.
          </p>
        </div>
      </section>

      <section className="mt-16 min-h-[80vh] space-y-6">
        <h1 className="text-3xl">Get In touch</h1>
        <p className="text-[16px] tracking-wide">
          Let's connect and explore how we collaborate and create meaningful
          impact{" "}
        </p>

        {state?.errors && (
          <p className="text-red-800 font-semibold">
            {state.errors?.getFormErrors()[0]?.message}
          </p>
        )}
        {state.succeeded && (
          <p>Success, Your message has been successfully delivered</p>
        )}

        <form
          method="post"
          onSubmit={handleSubmission}
          className="*:block space-y-4 w-full"
        >
          <label className="font-bold" htmlFor="name">
            Name
          </label>
          <input
            required
            type="text"
            name="name"
            value={inputs.name}
            onChange={handlechanges}
            id="name"
            className="p-3  w-full outline-none text-black bg-slate-300 rounded"
            placeholder="Your Name"
          />

          <ValidationError prefix="Name" field="name" errors={state?.errors} />

          <label htmlFor="email" className="font-bold">
            Email
          </label>

          <input
            type="email"
            required
            name="email"
            value={inputs.email}
            onChange={handlechanges}
            id="email"
            className="p-3 w-full outline-none text-black bg-slate-300 rounded"
            placeholder="Your Email"
          />

          <ValidationError
            prefix="Email"
            field="email"
            errors={state?.errors}
          />

          <label className="font-bold" htmlFor="email">
            Message
          </label>
          <textarea
            required
            name="message"
            id="message"
            value={inputs.message}
            onChange={handlechanges}
            placeholder="Your thoughtful message..."
            className="outline-none resize-none p-3 min-h-48  w-full text-black bg-slate-300 rounded"
          ></textarea>

          <ValidationError
            prefix="Message"
            field="message"
            errors={state?.errors}
          />

          <button
            type="submit"
            className="font-semibold transition w-full block bg-black p-3 rounded-full text-white dark:bg-white dark:text-black"
            disabled={state.succeeded}
          >
            {state.submitting ? "..." : "Send"}
          </button>
        </form>
        <div className="text-center">Or</div>

        <div className="rounded p-4 shadow">
          <button className="hover:bg-[#f06c3df5] w-full font-semibold ring-2 transition hover:text-white ring ring-[#f06c3df5] transition p-3 rounded-full text-[#f06c3df5] ">
            <a href="mailto:amoodaniels@yahoo.com" target="_blank">
              Email Me
            </a>
          </button>
        </div>
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

import Head from 'next/head';
import { FaBook, FaMicrochip, FaCogs, FaListAlt, FaQuestionCircle, FaPuzzlePiece } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <Head>
        <title>TrimUI Smart Pro Hub - Retro Handheld Tutorials & Videos</title>
        <meta
          name="description"
          content="Your ultimate source for the best tutorials and videos on retro handhelds and the TrimUI Smart Pro. Discover guides, firmwares, accessories, specs, FAQs and more."
        />
        <meta
          name="keywords"
          content="TrimUI, Smart Pro, Retro Handheld, Tutorials, Videos, Firmware, Guides, Accessories, Specs, FAQs, Compatibility"
        />
        <meta property="og:title" content="TrimUI Smart Pro Hub - Retro Handheld Tutorials & Videos" />
        <meta
          property="og:description"
          content="Your ultimate source for the best tutorials and videos on retro handhelds and the TrimUI Smart Pro. Discover guides, firmwares, accessories, specs, FAQs and more."
        />
        <meta property="og:url" content="https://trimui-smart-pro-hub.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <link rel="canonical" href="https://trimui-smart-pro-hub.vercel.app/" />
      </Head>
      <div className="flex flex-col items-center p-6 pt-12 space-y-12">
        {/* Título, descripción y botón Start */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl mb-4 text-retroPurple dark:text-retroYellow">
            TrimUI Smart Pro Hub
          </h1>
          <p className="text-lg text-retroYellow dark:text-retroBlue mb-4">
            Your source for the best tutorials and videos!
          </p>
        </div>

        {/* Imagen y botón de compra */}
        <div className="flex flex-col items-center">
          <img
            src="/images/trimui_smart_pro.webp"
            alt="TrimUI Smart Pro Handheld"
            className="w-96 mb-4"
          />
          <a
            href="https://s.click.aliexpress.com/e/_EvVOPmC"
            target="_blank"
            rel="noopener noreferrer"
            className="retro-button w-52 text-center text-sm font-bold py-2 px-4 border-4 border-black shadow-lg bg-red-600 text-white"
          >
            Buy on AliExpress
          </a>
        </div>

        {/* Tarjetas interactivas para explorar las secciones */}
        <div className="w-full">
          <h2 className="text-2xl font-bold text-retroBlue dark:text-retroPurple text-center mb-4">
            Explore the Sections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SectionCard 
              title="Guides" 
              description="Step-by-step tutorials." 
              link="/guides" 
              Icon={FaBook}
            />
            <SectionCard 
              title="FW + Tools" 
              description="Latest firmware updates." 
              link="/firmwares" 
              Icon={FaMicrochip}
            />
            <SectionCard 
              title="ACCS" 
              description="Recommended accessories." 
              link="/accessories" 
              Icon={FaCogs}
            />
            <SectionCard 
              title="Specs" 
              description="Technical specifications." 
              link="/specs" 
              Icon={FaListAlt}
            />
            <SectionCard 
              title="FAQs" 
              description="Common questions answered." 
              link="/faqs" 
              Icon={FaQuestionCircle}
            />
            <SectionCard 
              title="Compat" 
              description="Game compatibility lists." 
              link="/compatibility" 
              Icon={FaPuzzlePiece}
            />
          </div>
        </div>

        {/* Support Section */}
        <div className="flex flex-col items-center text-center space-y-4">
          <p className="text-xs text-gray-700 dark:text-gray-300">
            Enjoying this project? Support me on YouTube, Ko‑fi, or by shopping on AliExpress at no extra cost!
          </p>
          <div className="flex flex-col md:flex-row gap-3">
            <a
              href="https://www.youtube.com/@LinuxDroidMaster"
              target="_blank"
              rel="noopener noreferrer"
              className="retro-button bg-red-600 text-white font-bold py-2 px-4 border-4 border-black shadow-lg w-52 text-center text-sm"
            >
              ▶️ Subscribe
            </a>
            <a
              href="https://ko-fi.com/droidmaster"
              target="_blank"
              rel="noopener noreferrer"
              className="retro-button bg-sky-400 text-white font-bold py-2 px-4 border-4 border-black shadow-lg w-52 text-center text-sm"
            >
              ☕ Donate
            </a>
            <a
              href="https://s.click.aliexpress.com/e/_EvVOPmC"
              target="_blank"
              rel="noopener noreferrer"
              className="retro-button bg-red-600 text-white font-bold py-2 px-4 border-4 border-black shadow-lg w-52 text-center text-sm"
            >
              🛒 Buy on AliExpress
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-10 text-sm text-gray-600 dark:text-gray-400 text-center">
          <p>Need to reach out? Find me on:</p>
          <div className="flex flex-col md:flex-row gap-4 mt-2 justify-center">
            <a
              href="https://discord.com/invite/ddvpK997Qu"
              target="_blank"
              rel="noopener noreferrer"
              className="retro-button bg-[#7289DA] text-white font-bold py-2 px-4 border-4 border-black shadow-lg"
            >
              🔵 Discord
            </a>
            <a
              href="https://www.reddit.com/user/linuxdroidmaster/"
              target="_blank"
              rel="noopener noreferrer"
              className="retro-button bg-[#FF4500] text-white font-bold py-2 px-4 border-4 border-black shadow-lg"
            >
              🔴 Reddit
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function SectionCard({ title, description, link, Icon }) {
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block border-4 border-black p-4 bg-retroBlue text-white text-center retro-button hover:scale-105 transition-transform duration-150"
    >
      {Icon && (
        <Icon size={48} className="mx-auto mb-2" />
      )}
      <h3 className="text-xl font-bold mb-1 break-words">{title}</h3>
      <p className="text-sm">{description}</p>
    </a>
  );
}

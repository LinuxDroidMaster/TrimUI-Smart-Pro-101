import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>TrimUI Smart Pro HUB - Retro Handheld Tutorials & Videos</title>
        <meta
          name="description"
          content="Your ultimate source for the best tutorials and videos on retro handhelds and the TrimUI Smart Pro. Discover guides, custom firmwares, and more."
        />
        <meta
          name="keywords"
          content="TrimUI, Smart Pro, Retro Handheld, Tutorials, Videos, Firmware, Custom, Guides"
        />
        <meta property="og:title" content="TrimUI Smart Pro HUB - Retro Handheld Tutorials & Videos" />
        <meta
          property="og:description"
          content="Your ultimate source for the best tutorials and videos on retro handhelds and the TrimUI Smart Pro. Discover guides, custom firmwares, and more."
        />
        <meta property="og:url" content="https://trimui-smart-pro-hub.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <link rel="canonical" href="https://trimui-smart-pro-hub.vercel.app/" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen p-6">
        {/* Top Section: Two Columns */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full">
          {/* Left Column: Image and AliExpress Buy Button */}
          <div className="md:w-1/2 flex flex-col items-center">
            <img
              src="/images/trimui_smart_pro.webp"
              alt="TrimUI Smart Pro"
              className="w-full max-w-md"
            />
            <a
              href="https://s.click.aliexpress.com/e/_EvVOPmC"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-52 text-center text-sm font-bold py-2 px-4 border-4 border-black shadow-lg retro-button bg-red-600 text-white"
            >
              🛒 Buy on AliExpress
            </a>
          </div>
          {/* Right Column: Title, Description and Start Button */}
          <div className="md:w-1/2 flex flex-col items-center text-center mt-6 md:mt-0">
            <h1 className="text-4xl mb-4 text-retroPurple">
              TrimUI Smart Pro HUB
            </h1>
            <p className="text-lg text-retroYellow">
              Your source for the best tutorials and videos!
            </p>
            <a 
              href="/guides" 
              className="mt-6 w-52 text-center text-sm font-bold py-2 px-4 border-4 border-black shadow-lg retro-button bg-blue-500 text-white"
            >
              Start
            </a>
          </div>
        </div>

        {/* Separator */}
        <hr className="w-48 border-t-2 border-gray-500 my-8" />

        {/* Support Section */}
        <p className="text-sm text-gray-700">
          Enjoying this project? Support me on YouTube, Ko‑fi, or by shopping on AliExpress at no extra cost!
        </p>
        <div className="mt-4 flex flex-col md:flex-row gap-3">
          <a
            href="https://www.youtube.com/@LinuxDroidMaster"
            target="_blank"
            rel="noopener noreferrer"
            className="w-52 text-center text-sm font-bold py-2 px-4 border-4 border-black shadow-lg retro-button bg-red-600 text-white"
          >
            ▶️ Subscribe
          </a>
          <a
            href="https://ko-fi.com/droidmaster"
            target="_blank"
            rel="noopener noreferrer"
            className="w-52 text-center text-sm font-bold py-2 px-4 border-4 border-black shadow-lg retro-button bg-sky-400 text-white"
          >
            ☕ Donate
          </a>
          <a
            href="https://s.click.aliexpress.com/e/_EvVOPmC"
            target="_blank"
            rel="noopener noreferrer"
            className="w-52 text-center text-sm font-bold py-2 px-4 border-4 border-black shadow-lg retro-button bg-red-600 text-white"
          >
            🛒 Buy on AliExpress
          </a>
        </div>

        {/* Contact Section */}
        <div className="mt-10 text-sm text-gray-600">
          <p>Need to reach out? Find me on:</p>
          <div className="flex flex-col md:flex-row gap-4 mt-2">
            <a
              href="https://discord.com/invite/ddvpK997Qu"
              target="_blank"
              rel="noopener noreferrer"
              className="retro-button bg-[#7289DA] text-white"
            >
              🔵 Discord
            </a>
            <a
              href="https://www.reddit.com/user/linuxdroidmaster/"
              target="_blank"
              rel="noopener noreferrer"
              className="retro-button bg-[#FF4500] text-white"
            >
              🔴 Reddit
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

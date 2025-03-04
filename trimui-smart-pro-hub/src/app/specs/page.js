export default function SpecsPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-retroPurple dark:text-retroYellow text-center mb-6">
        Specs
      </h1>

      {/* Imagen de la consola */}
      <div className="flex flex-col items-center mb-6">
        <img
          src="/images/trimui_smart_pro.webp"
          alt="TrimUI Smart Pro Handheld"
          className="w-64 border-4 border-black mb-4"
        />
        {/* Botón de compra debajo de la imagen */}
        <a
          href="https://s.click.aliexpress.com/e/_EvVOPmC"
          target="_blank"
          rel="noopener noreferrer"
          className="retro-button bg-red-600 text-white font-bold py-2 px-4 text-center border-4 border-black shadow-lg"
        >
          Buy on AliExpress
        </a>
      </div>

      {/* Technical Specifications */}
      <h2 className="text-2xl font-bold text-retroBlue dark:text-retroPurple mb-2">
        Technical Specifications
      </h2>
      <ul className="list-disc list-inside text-black dark:text-white mb-6 space-y-2">
        <li><strong>Display:</strong> 4.96-inch IPS Screen (720 x 1280)</li>
        <li><strong>System:</strong> Linux (Stock OS); Surwish CrossMix OS</li>
        <li><strong>Material:</strong> Glass + ABS + Electronic Components</li>
        <li><strong>Colors:</strong> Black, White, Vintage Gray</li>
        <li><strong>CPU:</strong> Allwinner A133P (A133 Plus) 1.8GHz</li>
        <li><strong>GPU:</strong> Imagination PowerVR GE8300 660MHz</li>
        <li><strong>RAM:</strong> 1GB LPDDR4x</li>
        <li><strong>Storage:</strong> 8GB eMMC</li>
        <li><strong>WiFi:</strong> WLAN 802.11 b/g/n</li>
        <li>
          <strong>Audio:</strong> Stereo speakers (2x1W), 3.5mm headphone jack, mono microphone
        </li>
        <li><strong>Battery:</strong> 5000mAh (up to 5 hours)</li>
        <li>
          <strong>Expandable Storage:</strong> Supports 64GB, 128GB, 256GB external TF cards (optional)
        </li>
        <li>
          <strong>Charging & USB:</strong> USB Type-C charging (5V/1.5A, even when off), data transfer limited to 500mA
        </li>
        <li>
          <strong>Indicators/Ambient Lights:</strong> Charging status light, RGB status indicators, dual analog stick ambient lights
        </li>
        <li>
          <strong>Bottom Ports:</strong> USB Type-C (charging & OTG)
        </li>
        <li>
          <strong>Top Ports:</strong> USB Type-C (USB host, compatible with game controllers)
        </li>
        <li>
          <strong>Other Features:</strong> Built-in WiFi for online multiplayer, single vibration motor
        </li>
      </ul>

      {/* Product Dimensions */}
      <h2 className="text-2xl font-bold text-retroBlue dark:text-retroPurple mb-2">
        Product Dimensions
      </h2>
      <p className="text-black dark:text-white mb-6">
        <strong>Size:</strong> 18 x 8 x 1.7 cm
      </p>

      {/* What's in the Box */}
      <h2 className="text-2xl font-bold text-retroBlue dark:text-retroPurple mb-2">
        What's in the Box?
      </h2>
      <ul className="list-disc list-inside text-black dark:text-white mb-6 space-y-2">
        <li><strong>TrimUI Smart Pro Game Console</strong></li>
        <li><strong>USB Type-C Charging Cable</strong></li>
        <li><strong>User Manual</strong></li>
      </ul>

      {/* Community Links */}
      <h2 className="text-2xl font-bold text-retroBlue dark:text-retroPurple mb-2">
        Join the Community
      </h2>
      <div className="flex flex-col gap-4">
        <a
          href="https://www.reddit.com/r/trimui/"
          target="_blank"
          rel="noopener noreferrer"
          className="retro-button bg-[#FF4500] text-white font-bold py-2 px-4 text-center border-4 border-black shadow-lg"
        >
          Join the TrimUI Reddit Community
        </a>
        <a
          href="https://discord.com/invite/c4xWQW6w"
          target="_blank"
          rel="noopener noreferrer"
          className="retro-button bg-[#5865F2] text-white font-bold py-2 px-4 text-center border-4 border-black shadow-lg"
        >
          Join the Retro Handhelds Discord
        </a>
      </div>
    </div>
  );
}

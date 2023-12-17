import hero from "../../assets/hero.png";
import avatar from "../../assets/Avatar.png";
import { IoRocketOutline } from "react-icons/io5";
import Btn from "../btn/Btn";

function Hero() {
  return (
    <div className="px-8 lg:px-32 py-16 flex items-start justify-between gap-8 lg:max-w-7xl lg:m-auto">
      <div className="flex-1 space-y-4">
        <h1>Discover digital art & Collect NFTs</h1>
        <p>
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell
          art from more than 20k NFT artists.
        </p>
        <Btn leftIcon={<IoRocketOutline size={20} />} label="Get started" />
        <div className="flex gap-8 items-start">
          <div>
            <h4>240+</h4>
            <p>total sale</p>
          </div>
          <div>
            <h4>100k+</h4>
            <p>Auctions</p>
          </div>
          <div>
            <h4>240+</h4>
            <p>Artists</p>
          </div>
        </div>
      </div>
      <div className="flex-1 rounded-2xl overflow-hidden">
        <img src={hero} alt="" className="w-full" />
        <div className="p-4 bg-neutral-700">
          <h5>space walking</h5>
          <div className="flex items-center gap-4">
            <img src={avatar} alt="" className="block w-6 h-6 shrink-0" />
            <p>Animakid</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

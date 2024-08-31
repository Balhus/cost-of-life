import Image from "next/image";
import Card from "./components/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const countries = [
  {
    name: 'Afghanistan',
    link: 'https://www.numbeo.com/cost-of-living/country_result.jsp?country=Afghanistan',
    image: '/images/afghanistan.jpg'
  },
  {
    name: 'Aland Islands',
    link: 'https://www.numbeo.com/cost-of-living/country_result.jsp?country=Aland+Islands',
    image: '/images/aland_islands.jpg'
  },
  {
    name: 'Albania',
    link: 'https://www.numbeo.com/cost-of-living/country_result.jsp?country=Albania',
    image: '/images/albania.jpg'
  }
];

export default function Home() {
  

  return (
    <main className="">
      <div id="main-video" className="h-max relative">
        <div className="h-screen relative parent-element-to-video">
          <video width="100%" height="400" autoPlay loop muted>
            <source src="/videos/home_video.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
          <div className="w-full h-full bg-black/85 absolute top-0 left-0">
          </div>
        </div>
        <div id="main-title" className="p-4 absolute w-full h-full flex items-center flex-col justify-center top-0 left-0">
          <h1 className="text-[2.5rem] leading-[1.1] font-extrabold tracking-tight text-center">Discover and Compare the <span className="text-gradient font-extrabold tracking-tight">Cost of Living</span> Worldwide</h1>
          <p className="text-center text-sm pt-10"><span className="font-bold">9,015,181</span> prices in <span className="font-bold">11,697</span> cities entered by <span className="font-bold">802,754</span> contributors</p>
        </div>
        <FontAwesomeIcon icon={faChevronDown} className="absolute bottom-4 m-auto left-0 right-0 color-white h-8 cursor-pointer animate-bounce"/>
      </div>
      <div id="main-content" className="flex flex-col gap-5 p-4">
        <div className="flex justify-between items-center flex-wrap">
          <h3 className="font-bold text-2xl">Countries</h3>
          <span className="text-xs">See more</span>
        </div>
        <div className="flex flex-row md:justify-start overflow-auto gap-4">
        {countries.map((country, index) => (
          <Card key={index} {...country} />
        ))}
        </div>
      </div>
    </main>
  );
}

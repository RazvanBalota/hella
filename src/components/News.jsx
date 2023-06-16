import React from "react";
import businessportfolio from "../assets/aboutphotos/businessportfollio.jpg";
import facts from "../assets/aboutphotos/facts.jpg";
import historyphoto from "../assets/aboutphotos/historyphoto.jpg";
import jointventure from "../assets/aboutphotos/jointventures.jpg";
import worldmap from "../assets/aboutphotos/worldmap.jpg";

const cards = [
  {
    img: businessportfolio,
    title: "Business portfolio",
    description: `A balanced portfolio encompassing the business groups of "Lighting", "Electronics" and "Lifecycle Solutions".`,
    href: "href",
  },
  {
    img: facts,
    title: "Facts & figures",
    description: `Find out more about HELLA in the “HELLA in Figures” section – a brief and informative look at who we are.`,
    href: "href",
  },
  {
    img: jointventure,
    title: "Joint ventures",
    description: `Our partnerships with other companies deliver added value for our customers.`,
    href: "href",
  },
  {
    img: worldmap,
    title: "Locations",
    description: `We put customers first, and one of the ways we make sure we are there for you is by maintaining a presence in all of the key regions around the globe.`,
    href: "href",
  },
  {
    img: historyphoto,
    title: "History",
    description: `Yesterday, today, tomorrow: delivering leading-edge technology and outstanding partnership with our customers every step of the way.`,
    href: "href",
  },
];

export default function News() {
  return (
    <section className="h-full">
      <div className="container mx-auto px-6">
        <div className="mb-6">
          <h2 className="text-primary font-medium text-2xl tracking-tight">
            International automotive supplier under the umbrella brand{" "}
            <span className="text-semibold text-accent">FORVIA</span>
          </h2>
        </div>
        {/* cards section */}
        <div className="flex justify-center items-center">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
            {cards.map((card) => (
              <div className="max-w-[400px]  h-[550px] card-shadow p-2 relative ">
                <div>
                  <img src={card.img} alt="" className="w-[400px] rounded-md pb-4 h-[300px]" />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h2 className="text-xl text-accent font-medium pb-2 ">{card.title}</h2>
                  <p className="text-md tracking-wide pb-4 text-center p-2 ">{card.description}</p>
                  <a
                    href={card.href}
                    className="px-4 ml-4 lg:ml-8 py-2 tracking-wide text-lg font-semibold border-2  flex justify-center items-center border-primary hover:text-white hover:bg-black transition-all duration-150 cursor-pointer rounded-md absolute bottom-5 right-[120px]">
                    Read more...{" "}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

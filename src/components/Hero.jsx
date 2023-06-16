import React from "react";
import heroimg1 from "../assets/heroimages/heroImg1.jpg";
import heroimg2 from "../assets/heroimages/heroImg2.jpg";
import heroimg3 from "../assets/heroimages/heroImg3.png";

const hella = [
  {
    title: "Annual Report 2022",
    img: heroimg1,
    description: (
      <p>
        {" "}
        <span className="text-accent font-semibold">HELLA</span> acquired new customer projects amounting to € 1 billion
        per month in the seven-month short fiscal year 2022. <br />
        <br /> The order intake is thus once again at a record level and comprises numerous product solutions for key
        automotive future trends.
      </p>
    ),
    href: "https://www.hella.com/hella-com/assets/media_global/2023.03.21_HELLA_Annual_Report_Short_Fiscal_Year_2022_secured.pdf",
  },
  {
    title: "Front Phygital Shields",
    img: heroimg2,
    description: (
      <p>
        <span className="text-accent font-semibold">HELLA</span> has received major orders for highly integrated Front
        Phygital Shields.
        <br />
        <br /> These are complex, multifunctional modules for the front of the vehicle. The total order volume is more
        than one billion euros.
      </p>
    ),
    href: "https://www.hella.com/press/en/Technology-Products-05-10-2022-20739.html",
  },
  {
    title: "Cooperation in spare parts business",
    img: heroimg3,
    description: (
      <p>
        <span className="text-accent font-semibold">HELLA</span> and{" "}
        <span className="text-accent font-semibold">Faurecia</span> are joining forces under the{" "}
        <span className="text-accent font-semibold">FORVIA</span> umbrella.
        <br />
        <br /> Wholesalers and workshops also benefit from this, as{" "}
        <span className="text-accent font-semibold">Faurecia</span> products can now be purchased via the{" "}
        <span className="text-accent font-semibold">HELLA</span> aftermarket.
        <br />
        <br /> The Easy2Fit® exhaust systems make the start.
      </p>
    ),
    href: "https://www.hella.com/press/en/Company-12-09-2022-20645.html",
  },
];

export default function Hero() {
  return (
    <div className="h-full bg-[#f1f1f1]">
      <div className="pt-8 mb-8 ">
        {/* cards section */}
        {hella.map((hella) => (
          <div className="flex flex-col lg:flex-row even:lg:flex-row-reverse justify-center items-center">
            <div className="px-1 pt-6">
              <img src={hella.img} alt="" className="rounded-md mb-2" />
            </div>
            <div className="px-4 pt-8 mb-6">
              <h2 className="text-4xl font-montserrat font-medium  pb-6 pt-2 px-4 lg:px-8 text-primary text-left ">
                {hella.title}
              </h2>
              <p className="max-w-[800px] text-secondary px-4 py-2 lg:px-8 lg:py-4 tracking-wide leading-6 text-lg pb-10 lg:pb-10">
                {hella.description}
              </p>
              <a
                href={hella.href}
                rel="noreferrer"
                className="px-4 ml-4 lg:ml-8 py-2 tracking-wide text-lg font-semibold border-2 border-primary hover:text-white hover:bg-black transition-all duration-150 cursor-pointer rounded-md">
                Read more...
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

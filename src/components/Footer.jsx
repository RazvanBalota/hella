import React from "react";

export default function Footer() {
  return (
    <section className="h-[100px] bg-[#1b1b1b] mt-10 flex justify-center items-center">
      <div className="container mx-auto flex flex-col items-center ">
        <div className="text-sm text-[#f1f1f1] text-center">
          <a className="mr-2">Data Protection |</a>
          <a className="mr-2">General Terms & Conditions |</a>
          <a className="mr-2">Contact |</a>
          <a className="mr-2">Security |</a>
          <a>Sitemap </a>
        </div>
        <span className="text-sm text-[#f1f1f1] pt-2">Copyright © HELLA GmbH & Co. KGaA</span>
      </div>
    </section>
  );
}

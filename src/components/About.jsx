import React from "react";
import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} alt="" className="w-full h-64" />
        <article>
          <SectionTitle text="Code and Coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quas
            maxime iure a sit odio ipsam voluptate eius perspiciatis architecto
            voluptatem quis veritatis quam, molestiae similique sunt ex tempore
            delectus!
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;

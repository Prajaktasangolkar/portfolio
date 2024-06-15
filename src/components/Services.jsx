import React from "react";
import { Section } from "./common/Section";
import commerce from "../assets/1.jpg";
export const Services = () => {
  const services = [
    {
      id: 1,
      image: commerce,
      title: "Ecom website",
    },
    {
      id: 2,
      image: commerce,
      title: "Ecom website",
    },
    {
      id: 3,
      image: commerce,
      title: "Ecom website",
    },
    {
      id: 4,
      image: commerce,
      title: "Ecom website",
    },
  
  ];
  return (
    <Section title="Services 🛠️" subtitle="project and all">
      <div className="grid gap-10 lg:grid-cols-2">
        {services.map(({ id, image, title }) => (
          // eslint-disable-next-line react/jsx-key
          <div
            key={id}
            className="flex flex-col items-center justify-center p-5 shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110"
          >
            <img
              src={image}
              alt={title}
              className="w36 h-36 md:h-44 object-contain"
            />
            <h3 className="mt-5 text-base">{title}</h3>
          </div>
        ))}
      </div>
    </Section>
  );
};

import React from 'react';
import ServiceCard from './ServiceCard';
import styles from './Services.module.css';

const servicesData = [
  {
    title: "LEARNING PLATFORM:",
    description: "A degree program's learning stream is organized into various modules, each represented in three different levels, categorized as basic, intermediate, and advanced.",
    longDescription: "Upon completion of each module, students receive a badge of achievement. At the successful completion of the learning path, students are awarded a specialization in their chosen field, marking their proficiency and readiness for advanced professional opportunities.",
    buttonText: "Request for Services",
    imageSrc: "https://img.freepik.com/free-vector/e-learning-icons-flat_1284-3950.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724025600&semt=ais_hybrid"
  },
  {
    title: "DIGITAL",
    description: "loreum pas fhihrib jorgtjbgrb ibhfuihv hiugehih bugiubg fnvefbubh bgjbiogjroib gboigoibj fveujir huihtrhg iuthiutruitr itrtriutrj jegiejrigre ifoioitjeogjetj etejiotrjoitjr ejwoiweoife ewfoirf hf",
    longDescription: "loreum pas fhihrib jorgtjbgrb ibhfuihv hiugehih bugiubg loreum pas fhihrib jorgtjbgrb ibhfuihv hiugehih bugiubg loreum pas fhihrib jorgtjbgrb ibhfuihv hiugehih bugiubg",
    buttonText: "Request for Services",
    imageSrc: "./podcast2.jpg"
  },
  {
    title: "DIGITAL",
    description: "loreum pas fhihrib jorgtjbgrb ibhfuihv hiugehih bugiubg fnvefbubh bgjbiogjroib gboigoibj fveujir huihtrhg iuthiutruitr itrtriutrj jegiejrigre ifoioitjeogjetj etejiotrjoitjr ejwoiweoife ewfoirf hf",
    longDescription: "loreum pas fhihrib jorgtjbgrb ibhfuihv hiugehih bugiubg loreum pas fhihrib jorgtjbgrb ibhfuihv hiugehih bugiubg loreum pas fhihrib jorgtjbgrb ibhfuihv hiugehih bugiubg",
    buttonText: "Request for Services",
    imageSrc: "./podcast2.jpg"
  },
  {
    title: "DIGITAL",
    description: "loreum pas fhihrib jorgtjbgrb ibhfuihv hiugehih bugiubg fnvefbubh bgjbiogjroib gboigoibj fveujir huihtrhg iuthiutruitr itrtriutrj jegiejrigre ifoioitjeogjetj etejiotrjoitjr ejwoiweoife ewfoirf hf",
    longDescription: "loreum pas fhihrib jorgtjbgrb ibhfuihv hiugehih bugiubg loreum pas fhihrib jorgtjbgrb ibhfuihv hiugehih bugiubg loreum pas fhihrib jorgtjbgrb ibhfuihv hiugehih bugiubg",
    buttonText: "Request for Services",
    imageSrc: "./podcast2.jpg"
  }
];

const Services = ( imageSrc ) => {
  return (
    <main className={styles.servicesContainer}>
      <div className={styles.servicesWrapper}>
        <h1 className={styles.servicesTitle}>SERVICES</h1>
        {servicesData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </main>
  );
};

export default Services;
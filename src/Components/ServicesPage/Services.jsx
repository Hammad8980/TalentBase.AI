import React from 'react';
import ServiceCard from './ServiceCard';
import styles from './Services.module.css';

const servicesData = [
  {
    title: "PODCAST:",
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
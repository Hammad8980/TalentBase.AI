import React from "react";
import Slider from "react-slick"; // Import the Slider component from react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Services.css";

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards by default
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1375, // Below 1375px width
        settings: {
          slidesToShow: 2, // Show 2 cards
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000, // Below 1000px width
        settings: {
          slidesToShow: 1, // Show 1 card
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="featured-services-container PrimaryFont">
      <div className="featured-services PrimaryColor1">
        <h2>Featured Services</h2>
        <Slider {...settings}>
          {" "}
          <div className="services-card">
            <img
              className="image-placeholder  "
              src="/learning-platform.jpg"
              alt="Learning Platform Image"
            />
            <div>
              <h5>Learning platform</h5>
              <p>
                A degree program's learning stream is organized into various
                modules, each represented in three different levels, categorized
                as basic, intermediate, and advanced. Upon completion of each
                module, students receive a badge of achievement. At the
                successful completion of the learning path, students are awarded
                a specialization in their chosen field, marking their
                proficiency and readiness for advanced professional
                opportunities.
              </p>
            </div>
          </div>
          <div className="services-card">
            <img
              className="image-placeholder PrimaryColor2"
              src="https://www.shutterstock.com/image-photo/business-work-assessment-certificate-concept-600nw-2305273009.jpg"
              alt="Certifications and Workshops Image"
            ></img>
            <div>
              <h5>Certifications and Workshops</h5>
              <p>
                This category includes courses and workshops across different
                technical and business domains. Certificates are awarded aiming
                targeted skill and concentrated knowledge, designed for career
                enhancement in marketing domains.
              </p>
            </div>
          </div>
          <div className="services-card">
          <img
              className="image-placeholder"
              src="/business-development-services.jpeg"
              alt="Business Development Services Image"
            />
            <div>
              <h5>Business Development services</h5>
              <p>
                Marketing campaigns are organized to promote the products and
                services, through content writing and creative designs to engage
                and persuade the target audience. Different application
                softwares are created through Web development. Digital marketing
                strategies for advertisements drive website traffic and connect
                to the audience. The search engine optimization ranks the
                website to a higher rank.
              </p>
            </div>
          </div>
          <div className="services-card">
          <img
              className="image-placeholder"
              src="/podcast.jpg"
              alt="Podcast Services Image"
            />
            <div>
              <h5>Podcast services</h5>
              <p>
                Podcast services offer comprehensive assistance, requiring
                cameras and microphones for optimal recording. These services
                include media coverage through videos, reels, and pictures, as
                well as professional podcast recording. Our professional hosts
                are available for both formal and informal settings. Editing
                services are available to ensure high-quality content.
              </p>
            </div>
          </div>
          {/* Add more cards here if needed */}
        </Slider>
        <br />
      </div>
    </div>
  );
};

export default Services;

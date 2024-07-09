import React from 'react'
import BlogComp from './BlogComp'

const Blog = () => {

  const blogs = [
    {
      title: "The Power of Simplicity in Web Design",
      body: "Web design for accessibility ensures all users, regardless of ability, can access and interact with your website. This blog post explores the importance of web accessibility, outlining best practices for creating inclusive experiences. It covers topics like using alternative text for images, ensuring keyboard accessibility, and providing clear and concise navigation"
    },
    {
      title: "Leveraging JavaScript for Interactive Elements",
      body: "Social media platforms offer a powerful way to connect with your target audience and build brand loyalty. This blog post explores the rise of social media marketing, highlighting its benefits and different strategies for engaging your audience online. It provides tips on creating captivating content, building a strong social media presence, and interacting effectively with your followers."
    },
    {
      title: "The Art of Storytelling in Marketing",
      body: "Content marketing is a strategic approach to creating and sharing valuable content that attracts and engages a target audience. This blog post delves into the power of content marketing for building brand awareness. It explores different content formats, such as blog posts, infographics, and videos, and provides tips on creating engaging content that resonates with your audience."
    },
    {
      title: "Optimizing Your Website for Search Engines (SEO)",
      body: "User experience (UX) design focuses on creating positive and user-friendly interactions between users and products. This blog post explores the importance of UX design, highlighting its benefits for businesses and users alike. It provides tips on conducting user research, creating user personas, and designing intuitive interfaces that cater to user needs."
    },
    {
      title: "The Future of Web Development: Trends to Watch",
      body: "E-commerce Essentials: Creating a Seamless Online Shopping Experience",
      body: "The rise of e-commerce has revolutionized how consumers shop. Businesses need to create a seamless online shopping experience to thrive in this competitive landscape. This blog post dives into the essentials of e-commerce, offering guidance on designing user-friendly product pages, implementing secure payment gateways, and streamlining the checkout process."
    },
    {
      title: "The Importance of User Experience (UX) Design",
      body: "User experience (UX) design focuses on creating positive and user-friendly interactions between users and products. This blog post explores the importance of UX design, highlighting its benefits for businesses and users alike. It provides tips on conducting user research, creating user personas, and designing intuitive interfaces that cater to user needs.",
    },
    {
      title: "The Power of Content Marketing in Building Brand Awareness",
      body: "Content marketing is a strategic approach to creating and sharing valuable content that attracts and engages a target audience. This blog post delves into the power of content marketing for building brand awareness. It explores different content formats, such as blog posts, infographics, and videos, and provides tips on creating engaging content that resonates with your audience.",
    },
    {
      title: "E-commerce Essentials: Creating a Seamless Online Shopping Experience",
      body: "The rise of e-commerce has revolutionized how consumers shop. Businesses need to create a seamless online shopping experience to thrive in this competitive landscape. This blog post dives into the essentials of e-commerce, offering guidance on designing user-friendly product pages, implementing secure payment gateways, and streamlining the checkout process.",
    },
    {
      title: "The Rise of Social Media Marketing: Engaging Your Audience Online",
      body: "Social media platforms offer a powerful way to connect with your target audience and build brand loyalty. This blog post explores the rise of social media marketing, highlighting its benefits and different strategies for engaging your audience online. It provides tips on creating captivating content, building a strong social media presence, and interacting effectively with your followers.",
    },
    {
      title: "Web Design for Accessibility: Creating Inclusive Experiences for All",
      body: "Web design for accessibility ensures all users, regardless of ability, can access and interact with your website. This blog post explores the importance of web accessibility, outlining best practices for creating inclusive experiences. It covers topics like using alternative text for images, ensuring keyboard accessibility, and providing clear and concise navigation.",
    },
  ];
  return (
    <div className="Blog SidePadding PrimaryColor2 PrimaryFont">
      <div className="BlogDiv1">
        <p className='BlogDiv1P1'>Our Blog</p>
        <p className='BlogDiv1P2'>loreum pas fhihrib jorgtjbgrb ibhfuihv hiugehih bugiubg fnvefbubh bgjbiogjroib gboigoibj fveujir huihtrhg iuthiutruitr itrtriutrj jegiejrigre ifoioitjeogjetj etejiotrjoitjr ejwoiweoife ewfoirf hf</p>
      </div>
      <div className="BlogDiv2">
        {blogs.map(blog => (
          <BlogComp blog={blog} />
        ))}
      </div>
    </div>
  )
}

export default Blog
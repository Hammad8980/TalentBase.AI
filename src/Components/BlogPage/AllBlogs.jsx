import React from 'react'
import BlogComp from './BlogComp'
import "./Blog.css"

const AllBlog = () => {

  const blogs = [
    {
      subject: "The Power of Simplicity in Web Design",
      body: "Web design for accessibility ensures all users, regardless of ability, can access and interact with your website. This blog post explores the importance of web accessibility, outlining best practices for creating inclusive experiences. It covers topics like using alternative text for images, ensuring keyboard accessibility, and providing clear and concise navigation",
      keywords: [
        "key", "words", "yoooo", "hooo"
      ]
    },
    {
      subject: "Leveraging JavaScript for Interactive Elements",
      body: "Social media platforms offer a powerful way to connect with your target audience and build brand loyalty. This blog post explores the rise of social media marketing, highlighting its benefits and different strategies for engaging your audience online. It provides tips on creating captivating content, building a strong social media presence, and interacting effectively with your followers. Social media platforms offer a powerful way to connect with your target audience and build brand loyalty. This blog post explores the rise of social media marketing, highlighting its benefits and different strategies for engaging your audience online. It provides tips on creating captivating content, building a strong social media presence, and interacting effectively with your followers. Social media platforms offer a powerful way to connect with your target audience and build brand loyalty. This blog post explores the rise of social media marketing, highlighting its benefits and different strategies for engaging your audience online. It provides tips on creating captivating content, building a strong social media presence, and interacting effectively with your followers. Social media platforms offer a powerful way to connect with your target audience and build brand loyalty. This blog post explores the rise of social media marketing, highlighting its benefits and different strategies for engaging your audience online. It provides tips on creating captivating content, building a strong social media presence, and interacting effectively with your followers. Social media platforms offer a powerful way to connect with your target audience and build brand loyalty. This blog post explores the rise of social media marketing, highlighting its benefits and different strategies for engaging your audience online. It provides tips on creating captivating content, building a strong social media presence, and interacting effectively with your followers. Social media platforms offer a powerful way to connect with your target audience and build brand loyalty. This blog post explores the rise of social media marketing, highlighting its benefits and different strategies for engaging your audience online. It provides tips on creating captivating content, building a strong social media presence, and interacting effectively with your followers. Social media platforms offer a powerful way to connect with your target audience and build brand loyalty. This blog post explores the rise of social media marketing, highlighting its benefits and different strategies for engaging your audience online. It provides tips on creating captivating content, building a strong social media presence, and interacting effectively with your followers. Social media platforms offer a powerful way to connect with your target audience and build brand loyalty. This blog post explores the rise of social media marketing, highlighting its benefits and different strategies for engaging your audience online. It provides tips on creating captivating content, building a strong social media presence, and interacting effectively with your followers. Social media platforms offer a powerful way to connect with your target audience and build brand loyalty. This blog post explores the rise of social media marketing, highlighting its benefits and different strategies for engaging your audience online. It provides tips on creating captivating content, building a strong social media presence, and interacting effectively with your followers. Social media platforms offer a powerful way to connect with your target audience and build brand loyalty. This blog post explores the rise of social media marketing, highlighting its benefits and different strategies for engaging your audience online. It provides tips on creating captivating content, building a strong social media presence, and interacting effectively with your followers.",
      keywords: [
        "key", "words", "yoooo", "hooo", "noooo"
      ]
    },
    {
      subject: "The Art of Storytelling in Marketing",
      body: "Content marketing is a strategic approach to creating and sharing valuable content that attracts and engages a target audience. This blog post delves into the power of content marketing for building brand awareness. It explores different content formats, such as blog posts, infographics, and videos, and provides tips on creating engaging content that resonates with your audience.",
      keywords: [
        "key", "words", "yoooo", "hooo", "kiiii", "key", "words", "yoooo", "hooo", "kiiii", "key", "words", "yoooo", "hooo", "kiiii", "key", "words", "yoooo", "hooo", "kiiii", "key", "words", "yoooo", "hooo", "kiiii", "key", "words", "yoooo", "hooo", "kiiii", "key", "words", "yoooo", "hooo", "kiiii", "key", "words", "yoooo", "hooo", "kiiii", "key", "words", "yoooo", "hooo", "kiiii","key", "words", "yoooo", "hooo", "kiiii"
      ]
    },

  ];
  return (
    <div className="Blog SidePadding PrimaryColor2 PrimaryFont CompMargin animate__fadeInUp">
      <div className="BlogDiv1">
        <p className='BlogDiv1P1'>All Blog</p>
      </div>
      <div className="BlogDiv2">
        {blogs.map((blog, index) => (
          <BlogComp key={index} blog={blog} />
        ))}
      </div>
    </div>
  )
}

export default AllBlog
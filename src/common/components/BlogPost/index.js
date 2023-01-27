import React from "react";
import PropTypes from "prop-types";
import NextImage from "../NextImage";
import Link from "next/link";
import { Icon } from "react-icons-kit";
import { angleRight } from "react-icons-kit/fa/angleRight";

const BlogPost = ({
  className,
  thumbUrl,
  title,
  excerpt,
  link,
  authorName,
}) => {
  // Add all classes to an array
  const addAllClasses = ["blog_post"];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <div className={addAllClasses.join(" ")}>
      <div className="thumbnail">
        {/* <NextImage src={thumbUrl} alt={title} /> */}
      </div>
      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="excerpt">{excerpt}</p>
        <p className="excerpt">{authorName}</p>
        {/* <Link href={link}>
          <a className="excerptLink">
            Learn More <Icon icon={angleRight} />
          </a>
        </Link> */}
        {/* {link && <div className="learn_more">{link}</div>} */}
      </div>
    </div>
  );
};

BlogPost.propTypes = {
  className: PropTypes.string,
  thumbUrl: PropTypes.object,
  title: PropTypes.string,
  excerpt: PropTypes.string,
  link: PropTypes.element,
};

export default BlogPost;

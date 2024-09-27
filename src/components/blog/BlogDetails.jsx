import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchBlogById } from "../../redux/blogSlice";
import { formatBlogContent } from "../blog/utils";
import "../../assets/styles/BlogDetails.css";
import Navbar from "../common/Navbar";
import { useTranslation } from "react-i18next";
import { DarkModeContext } from "../../context/DarkModeContext";

const BlogDetails = () => {
  const { blogId } = useParams();
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blogs.selectedBlog);
  const { i18n } = useTranslation();
  const { isDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    if (blogId) {
      dispatch(fetchBlogById(blogId));
    }
  }, [blogId, dispatch]);

  if (!blog) {
    return <div>No blog found</div>;
  }

  return (
    <div className={isDarkMode ? "blogDetailsDark" : "blogdetails"}>
      <Navbar />
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-12 p-0 mb-5">
            <div className="blogDetailTitle">
              <h2>{i18n.language === "az" ? blog.title_az : blog.title_en}</h2>
            </div>
          </div>
          <div className="col-12 p-0 mb-5">
            <div className="blogDetailImg">
              <img src={blog.image} alt={blog.title} />
            </div>
          </div>
          <div className="col-12 p-0 mb-5">
            <div className="blogDetailContent">
              <div className="caresinfos">
                {formatBlogContent(
                  i18n.language === "az" ? blog.context_az : blog.context_en
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;

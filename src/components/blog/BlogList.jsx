import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../redux/blogSlice";
import "../../assets/styles/App.css";
import { Link } from "react-router-dom";
import Navbar from "../common/Navbar";
import { useTranslation } from "react-i18next";
import { DarkModeContext } from "../../context/DarkModeContext";

const BlogList = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.items);
  const blogStatus = useSelector((state) => state.blogs.status);
  const { t, i18n } = useTranslation();
  const { isDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    if (blogStatus === "idle") {
      dispatch(fetchBlogs());
    }
  }, [blogStatus, dispatch]);

  return (
    <main className={isDarkMode ? "blogsDark" : "myBlogs"}>
      <Navbar />
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-12 p-0 m-0">
            <div className="plantCare">
              <h1>{t("blogs.title")}</h1>
            </div>
          </div>

          {blogs.map((blog) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 col-6 blogs"
              key={blog.id}
            >
              <div className="blogsImg">
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="blogTitle">
                <Link to={`/blogs/${blog.id}`} style={{ width: "220px" }}>
                  {i18n.language === "az" ? blog.title_az : blog.title_en}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BlogList;

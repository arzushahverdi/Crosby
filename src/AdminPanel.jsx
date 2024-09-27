import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  fetchBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
} from "./redux/blogSlice";
import "./assets/styles/App.css";
import Navbar from "./components/common/Navbar";

const AdminPanel = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const blogs = useSelector((state) => state.blogs.items);
  const blogStatus = useSelector((state) => state.blogs.status);
  const error = useSelector((state) => state.blogs.error);

  const [title, setTitle] = useState("");
  const [context, setContext] = useState("");
  const [image, setImage] = useState("");
  const [editingBlogId, setEditingBlogId] = useState(null);

  useEffect(() => {
    if (blogStatus === "idle") {
      dispatch(fetchBlogs());
    }
  }, [blogStatus, dispatch]);

  const handleCreateOrUpdate = (e) => {
    e.preventDefault();
    if (editingBlogId) {
      dispatch(updateBlog({ id: editingBlogId, title, context, image }));
    } else {
      dispatch(createBlog({ title, context, image }));
    }
    setTitle("");
    setContext("");
    setImage("");
    setEditingBlogId(null);
  };

  const handleEdit = (blog) => {
    setTitle(i18n.language === "az" ? blog.title_az : blog.title_en);
    setContext(i18n.language === "az" ? blog.context_az : blog.context_en);
    setImage(blog.image);
    setEditingBlogId(blog.id);
  };

  const handleDelete = (id) => {
    dispatch(deleteBlog(id));
  };

  const [expandedBlogId, setExpandedBlogId] = useState(null);

  const truncateText = (text, limit) => {
    if (!text) return "";
    if (text.length <= limit) return text;
    return text.slice(0, limit) + " ";
  };

  const handleExpand = (id) => {
    setExpandedBlogId(expandedBlogId === id ? null : id);
  };

  if (blogStatus === "loading") {
    return <div>Loading...</div>;
  }

  if (blogStatus === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="adminPanel">
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0 m-0">
            <div className="blogFormCreate">
              <h2>Admin Panel</h2>
              <form onSubmit={handleCreateOrUpdate} className="adminPanelForm">
                <div className="formTxt">
                  <label>{t("adminPanel.title")}:</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="formTxt">
                  <label>{t("adminPanel.context")}:</label>
                  <textarea
                    value={context}
                    onChange={(e) => setContext(e.target.value)}
                  ></textarea>
                </div>
                <div className="formTxt">
                  <label>{t("adminPanel.image")}:</label>
                  <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                </div>
                <button type="submit" className="updateCreateButtons">
                  {editingBlogId
                    ? t("adminPanel.updateBlog")
                    : t("adminPanel.createBlog")}
                </button>
              </form>
            </div>
          </div>

          {blogs.map((blog) => (
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-6 adminPanelBlog mb-5 mt-5 p-0"
              key={blog.id}
            >
              <div className="adminImg">
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="adminTitle">
                <h3>
                  {i18n.language === "az" ? blog.title_az : blog.title_en}
                </h3>
              </div>
              <div
                className={`adminContext ${
                  expandedBlogId === blog.id ? "expanded" : ""
                }`}
              >
                <p>
                  {expandedBlogId === blog.id
                    ? i18n.language === "az"
                      ? blog.context_az
                      : blog.context_en
                    : truncateText(
                        i18n.language === "az"
                          ? blog.context_az
                          : blog.context_en,
                        300
                      )}
                  {(i18n.language === "az" ? blog.context_az : blog.context_en)
                    .length > 300 && (
                    <span
                      className="read-more"
                      onClick={() => handleExpand(blog.id)}
                    >
                      {expandedBlogId === blog.id ? "" : "..."}
                    </span>
                  )}
                </p>
              </div>
              <div className="adminButtons">
                <button onClick={() => handleEdit(blog)}>
                  {t("adminPanel.edit")}
                </button>
                <button onClick={() => handleDelete(blog.id)}>
                  {t("adminPanel.delete")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;

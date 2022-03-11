import { useEffect } from "react";
import Layout from "../components/Layout";

const BlogPage = () => {
  useEffect(() => {
    document.title = "Blog || Page";
  }, []);
  return (
    <Layout title="Blog Page" footer="hola">
      <div>
        <h1>Blog</h1>
      </div>
    </Layout>
  );
};

export default BlogPage;

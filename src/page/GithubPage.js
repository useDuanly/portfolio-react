import { useEffect } from "react";
import Layout from "../components/Layout";

const GithubPage = () => {
  useEffect(() => {
    document.title = "Github || Page";
  }, []);
  return (
    <Layout>
      <div>
        <h1>Github</h1>
      </div>
    </Layout>
  );
};

export default GithubPage;

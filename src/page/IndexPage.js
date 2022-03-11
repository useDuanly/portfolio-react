import { useEffect } from "react";
import Layout from "../components/Layout";

const IndexPage = () => {
  useEffect(() => {
    document.title = " Home || Page";
  }, []);
  return (
    <Layout>
      <div>
        <h1>Home</h1>
      </div>
    </Layout>
  );
};

export default IndexPage;

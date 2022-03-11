import { HashRouter, Route, Routes } from "react-router-dom";

import NavBar from "./NavBar";
import IndexPage from "../page/IndexPage";
import BlogPage from "../page/BlogPage";
import GithubPage from "../page/GithubPage";

const MyRouter = () => {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="github" element={<GithubPage />} />
      </Routes>
    </HashRouter>
  );
};

export default MyRouter;

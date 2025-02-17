import { Route, Routes } from "react-router";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import BlogPage from "./components/BlogPage/BlogPage";
import CreateBlogPage from "./components/CreateBlogPage/CreateBlogPage";
const mockPosts = [
  {
    year: "2025",
    month: "01",
    day: "18",
    slug: "how-to-make-pasta",
    title: "How to Make Pasta",
    content: "This is a guide on making pasta...",
  },
  {
    year: "2025",
    month: "01",
    day: "19",
    slug: "learn-react-router",
    title: "Learn React Router",
    content: "This is a guide on React Router...",
  },
];
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path=":year/:month/:day/:slug"
          element={<BlogPage mockPosts={mockPosts} />}
        />
      </Route>
      <Route path="/admin" element={<Layout />}>
        <Route path="create-blog-page" element={<CreateBlogPage />} />
      </Route>
    </Routes>
  );
}

export default App;

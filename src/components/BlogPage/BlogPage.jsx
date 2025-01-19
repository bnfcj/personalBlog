import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

function BlogPage({ mockPosts }) {
  const { year, month, day, slug } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (Array.isArray(mockPosts)) {
      const findPost = mockPosts.find((p) => p.slug === slug);
      if (findPost) {
        if (
          findPost.month === month &&
          findPost.year === year &&
          findPost.day === day
        ) {
          setPost(findPost);
        } else {
          const correctedPath = `/${findPost.year}/${findPost.month}/${findPost.day}/${findPost.slug}`;
          console.log("Redirecting to: ", correctedPath);
          navigate(correctedPath);
        }
      } else {
        setError("Post not found");
      }
    } else {
      setError("mockPosts is not an array");
    }
  }, [mockPosts, slug, month, year, day, navigate]);

  return (
    <>
      {post ? (
        <div>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <p>
            <i>
              Published on {year}-{month}-{day}
            </i>
          </p>
        </div>
      ) : (
        <p>{error}</p>
      )}
    </>
  );
}

export default BlogPage;

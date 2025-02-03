import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

function BlogPage({ mockPosts }) {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (Array.isArray(mockPosts)) {
      const findPost = mockPosts.find((p) => p.slug === slug);
      if (findPost) {
        setPost(findPost);
        const correctedPath = `/${findPost.year}/${findPost.month}/${findPost.day}/${findPost.slug}`;
        console.log("Redirecting to: ", correctedPath);
        navigate(correctedPath, { replace: true });
      } else {
        setError("Post not found");
      }
    } else {
      setError("mockPosts is not an array");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mockPosts, slug]);

  return (
    <>
      {post ? (
        <div>
          <h1 className="text-2xl">{post.title}</h1>
          <p>{post.content}</p>
          <p>
            <i>
              Published on {post.year}-{post.month}-{post.day}
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

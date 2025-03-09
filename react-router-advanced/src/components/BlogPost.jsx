import { useParams } from "react-router-dom";

function BlogPost() {
  const { postId } = useParams();

  return (
    <div>
      <h3>Blog Post: {postId}</h3>
    </div>
  );
}

export default BlogPost;

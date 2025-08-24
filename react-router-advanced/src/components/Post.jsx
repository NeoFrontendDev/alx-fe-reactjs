import { useParams } from "react-router-dom";

function Post() {
  const { postId } = useParams();
  return <h3>Viewing Post #{postId}</h3>;
}

export default Post;
import { Eye, HandThumbsDown, HandThumbsUp } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./UserNews.css";

type UserNewsProps = {
  post: Posts;
};

const UserNews = ({ post }: UserNewsProps) => {
  return (
    <div className="news-card p-2">
      <div className="news-user d-flex align-items-center gap-2">
        <img
          src="https://th.bing.com/th/id/OIP.I-7zIX0C_DWRk-XA2TDPcgHaEK?rs=1&pid=ImgDetMain"
          alt=""
          className="object-fit-cover"
          width="35"
          height="35"
        />
        <p className="fw-medium m-0">{post.username}</p>
      </div>
      <hr />
      <div className="news-info">
        <h2 className="news-title fs-5">{post.title}</h2>
        <p className="news-body mb-0">{post.body}</p>
        {post.tags.map((tag) => (
          <small className="m-0 text-body-tertiary me-1">#{tag}</small>
        ))}
        <div className="d-flex align-items-center justify-content-between mt-2">
          <div className="d-flex align-items-center gap-2">
            <div className="d-flex align-items-center">
              <HandThumbsUp />
              {post.reactions.likes}
            </div>
            <div className="d-flex align-items-center">
              <HandThumbsDown />
              {post.reactions.dislikes}
            </div>
          </div>
          <div className="d-flex align-items-center">
            <Eye />
            {post.views}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNews;

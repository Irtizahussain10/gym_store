import axios from "axios";
import React, { useEffect } from "react";

interface Props {
  isLoggedIn: boolean;
  item: string;
}

interface allComments {
  name: string;
  comment: string;
}

function Comments(props: Props) {
  let [myComment, setComment] = React.useState("");
  let [allComments, setAllComments] = React.useState<allComments[]>([]);
  let [reloadComments, setReloadComments] = React.useState(false);

  useEffect(() => {
    axios
      .post(`http://localhost:5000/getComments/${props.item}`)
      .then((res) => {
        setAllComments(res.data);
        setReloadComments(false);
      })
      .catch(console.log);
  }, [reloadComments]);

  const postComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.currentTarget.reset();
    e.preventDefault();
    axios
      .post("http://localhost:5000/postComment", {
        comment: myComment,
        name: localStorage.getItem("name") as string,
        email: localStorage.getItem("email") as string,
        item: props.item,
      })
      .then((res) => {
        if (res.status === 200) {
          alert("Your comment has been placed");
          setReloadComments(true);
        }
      })
      .catch((e) => {
        if (e.response.status === 400) {
          alert("Check out if there is any error with your comment");
        } else if (e.response.status === 500) {
          alert("An error occured with the server! Please try again");
        } else {
          alert(
            "Oops an error occured! Please check your internet connection."
          );
        }
      });
  };

  return (
    <div>
      {!props.isLoggedIn ? (
        <p>Login to post a comment</p>
      ) : (
        <p>Post a comment</p>
      )}
      {props.isLoggedIn ? (
        <form onSubmit={postComment}>
          <textarea
            rows={4}
            cols={50}
            placeholder="Post a comment(maximum 50 characters)"
            onChange={(e) => {
              setComment(e.target.value);
            }}
            required
          />
          <br />
          <input type="submit" value="Post" />
        </form>
      ) : null}
      {allComments[0] ? (
        <div>
          {allComments.map((comment, key) => {
            return (
              <div key={key}>
                <span>{comment.name}</span>
                <br />
                <span>{comment.comment}</span>
              </div>
            );
          })}
        </div>
      ) : (
        <p>No comments to show</p>
      )}
    </div>
  );
}

export default Comments;

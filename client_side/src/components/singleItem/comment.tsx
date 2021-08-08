import axios from "axios";
import React from "react";

interface Props {
  isLoggedIn: boolean;
  item: string;
}

interface allComments {
  name: string;
  comment: string;
}

class Comments extends React.Component<Props> {
  state = {
    myComment: "",
    allComments: [] as allComments[],
  };

  getComments = () => {};

  postComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.currentTarget.reset();
    e.preventDefault();
    axios
      .post("http://localhost:5000/postComment", {
        comment: this.state.myComment,
        name: localStorage.getItem("name") as string,
        email: localStorage.getItem("email") as string,
        item: this.props.item,
      })
      .then((res) => {
        if (res.status === 200) {
          alert("Your comment has been placed");
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

  render() {
    return (
      <div>
        {!this.props.isLoggedIn ? (
          <p>Login to post a comment</p>
        ) : (
          <p>Post a comment</p>
        )}
        {this.props.isLoggedIn ? (
          <form onSubmit={this.postComment}>
            <textarea
              rows={4}
              cols={50}
              placeholder="Post a comment(maximum 50 characters)"
              onChange={(e) => {
                this.setState({ myComment: e.target.value });
              }}
              required
            />
            <br />
            <input type="submit" value="Post" />
          </form>
        ) : null}
      </div>
    );
  }
}

export default Comments;

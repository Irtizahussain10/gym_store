import axios from "axios";
import React from "react";
import {
  commentProps,
  allComments,
  commentState,
} from "../../interfaces/interfaces";

class Comments extends React.Component<commentProps, commentState> {
  constructor(props: commentProps) {
    super(props);
    this.state = {
      myComment: "",
      allComments: [] as allComments[],
      reloadComments: false,
    };
  }
  getComments = () => {
    axios
      .post(`http://localhost:5000/getComments/${this.props.item}`)
      .then((res) => {
        this.setState({ allComments: res.data });
        this.setState({ reloadComments: false });
      })
      .catch(console.log);
  };

  componentDidMount() {
    this.getComments();
  }
  componentDidUpdate(_prevProps: commentProps, prevState: commentState) {
    if (prevState.reloadComments !== this.state.reloadComments) {
      this.getComments();
    }
  }

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
          this.setState({ reloadComments: true });
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
        {this.state.allComments[0] ? (
          <div>
            {this.state.allComments.map((comment, key) => {
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
}

export default Comments;

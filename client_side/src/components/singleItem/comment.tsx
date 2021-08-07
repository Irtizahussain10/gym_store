import React from "react";

interface Props {
  isLoggedIn: boolean;
  item: string;
}

class Comments extends React.Component<Props> {
  state = {
    myComment: "",
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
          <form>
            <textarea
              rows={4}
              cols={50}
              placeholder="Post a comment(maximum 50 characters)"
              onChange={(e) => {
                this.setState(e.target.value);
              }}
            ></textarea>
            <br />
            <input type="submit" value="Post" />
          </form>
        ) : null}
      </div>
    );
  }
}

export default Comments;

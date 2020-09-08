import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function GithubUser() {
  const { username } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((user) => {
        setUser(user);
        console.log(user);
      });
  }, [username]);
  return (
    <div>
      <Card className="text-center">
        <Card.Header>Github User</Card.Header>
        <Card.Body>
          <Card.Img variant="primary" src={user.avatar_url} roundedCircle />
          <Card.Title>{user.login}</Card.Title>
          <Card.Title>{user.bio}</Card.Title>
          <Card.Text>
            <p>Public Repos : {user.public_repos}</p>
            <p>Follower : {user.followers}</p>
            <p>Following : {user.following}</p>
          </Card.Text>
          <Button variant="primary" href={user.html_url}>
            Go to Github Profile
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">
          Profile last updated at: {user.updated_at}
        </Card.Footer>
      </Card>
    </div>
  );
}

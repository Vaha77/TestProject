import React from "react";

function Card(props) {
  return <div style={styles.Card}>Card</div>;
}

const styles = {
  Card: {
    // position: "absolute",
    top: "50%",
    left: "50%",
    height: "100px",
    width: "200px",
    backgroundColor: "blue",
    transform: "translet(-50% , -50%)",
  },
};

export default Card;

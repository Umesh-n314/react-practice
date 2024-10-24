import "./rating.scss";
import { useState } from "react";
import { Button } from "antd";

const Star = ({ setRating, rating, selected }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="40"
      height="40"
      fill={selected ? "gold" : "#e3e3e3"}
      strokeWidth={0.5}
      stroke="grey"
      onClick={() => setRating(rating)}
    >
      <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.4 8.168L12 18.897l-7.334 3.863 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" />
    </svg>
  );
};

const Rating = () => {
  const [rating, setRating] = useState(0);
  return (
    <>
      <div className="rating">
        {[1, 2, 3, 4, 5].map((item) => {
          return (
            <Star
              key={item}
              setRating={setRating}
              rating={item}
              selected={item <= rating}
            />
          );
        })}
      </div>
      {rating > 0 && <Button onClick={() => setRating(0)}>Clear Rating</Button>}
    </>
  );
};
export default Rating;

import React, {useState} from "react";
import {FaRegComment, FaRegShareSquare} from "react-icons/fa";
import {AiOutlineRetweet, AiOutlineHeart, AiFillHeart} from "react-icons/ai";

const TuitStats = ({tuit}) => {
    const [liked, setLiked] = useState(tuit.liked);
    const [likes, setLikes] = useState(tuit.likes);

    const handleLike = () => {
        if (liked) {
        setLikes(likes - 1);
        } else {
        setLikes(likes + 1);
        }
        setLiked(!liked);
    }; 
  return (
    <>
        <div className="col-3">
            <FaRegComment />
            <span style={{ marginLeft: "5px" }}>{tuit.replies}</span>
        </div>
        <div className="col-3">
            <AiOutlineRetweet />
            <span style={{ marginLeft: "5px" }}>{tuit.retuits}</span>
        </div>
        <div className="col-3">
            {liked ? (
            <AiFillHeart
                onClick={handleLike}
                style={{ color: "#F00040" }}
            />
            ) : (
            <AiOutlineHeart onClick={handleLike} />
            )}
            <span style={{ marginLeft: "5px" }}>{likes}</span>
        </div>
        <div className="col-3">
            <span style={{ marginLeft: "5px" }}>
            <FaRegShareSquare />
            </span>
        </div>
    </>
  );
};
export default TuitStats;
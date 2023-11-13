import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpOutlined,
} from "@mui/icons-material";
import "./listItem.scss";
import { useState } from "react";

export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  // const trailer = video source when hovering over a tile
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src="https://images.alphacoders.com/900/900419.jpg" alt="" />
      {isHovered && (
        <>
          {/* <video src={trailer} autoPlay{true} loop></video> video playback when we hover*/}
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 26 mins </span>
              <span className="limit">U/A</span>
              <span>2015</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
              ratione dicta. Exercitationem expedita totam odit harum nobis
              consequuntur sequi, labore
            </div>
            <div className="genre">Thriller</div>
          </div>
        </>
      )}
    </div>
  );
}

import { useState } from "react";
import AddVideoButton from "./components/AddVideoButton";
import AddVideoModal from "./components/AddVideoModal";
import { StyledAddVideo } from "./styles";

export default function AddVideo() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <StyledAddVideo>
      <AddVideoButton setIsVisible={setIsVisible} />
      {isVisible && <AddVideoModal setIsVisible={setIsVisible} />}
    </StyledAddVideo>
  );
}

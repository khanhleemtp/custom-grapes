import Frame, { FrameContextConsumer } from "react-frame-component";
import { useRef, useEffect } from "react";

const FramePreview: React.FC = ({ children }) => {
  const iframeRef = useRef();

  useEffect(() => {
    // Use iframeRef for:
    // - focus managing
    // - triggering imperative animations
    // - integrating with third-party DOM libraries
  }, []);

  return <Frame ref={iframeRef}>{children}</Frame>;
};

export default FramePreview;

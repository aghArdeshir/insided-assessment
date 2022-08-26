import Lottie from "lottie-web";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import loadingAnimation from "./icons/loading-animation-blue.json";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
`;

const LottieAnimationContainer = styled.div`
  width: 300px;
  height: 300px;
`;

export function Loading() {
  const divDomRef = useRef<HTMLDivElement>(null);
  const loaded = useRef(false);

  useEffect(() => {
    if (divDomRef.current && !loaded.current) {
      loaded.current = true;
      const animation = Lottie.loadAnimation({
        container: divDomRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: loadingAnimation,
      });

      return () => {
        loaded.current = false;
        animation.destroy();
      };
    }
  }, []);

  return (
    <Wrapper>
      <LottieAnimationContainer ref={divDomRef} />
    </Wrapper>
  );
}

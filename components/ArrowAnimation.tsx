import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect, useState } from "react";

export default function ArrowAnimation() {
  const [src, setSrc] = useState("/arrow.lottie");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRemoteAnimation = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://lottie.host/15f07470-6e81-462e-b77b-c48583efa215/RB9A8XGlhQ.lottie"
        );
        if (response.ok) {
          setSrc(
            "https://lottie.host/15f07470-6e81-462e-b77b-c48583efa215/RB9A8XGlhQ.lottie"
          );
        }
      } catch (error) {
        console.error(
          "The remote file seems unavailable, using local file",
          error
        );
      } finally {
        setIsLoading(false);
      }
    };
    fetchRemoteAnimation();
  }, []);

  return isLoading ? (
    <div className="w-full flex place-items-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-white border-solid" />
    </div>
  ) : (
    <DotLottieReact src={src} loop autoplay />
  );
}

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// import { useEffect, useState } from "react";

export default function ArrowAnimation() {
  // const [src, setSrc] = useState("/arrow.lottie");
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const fetchRemoteAnimation = async () => {
  //     setIsLoading(true);
  //     try {
  //       const response = await fetch(
  //         "https://lottie.host/15f07470-6e81-462e-b77b-c48583efa215/RB9A8XGlhQ.lottie"
  //       );
  //       if (response.ok) {
  //         const blob = await response.blob();
  //         const objectUrl = URL.createObjectURL(blob);
  //         setSrc(objectUrl);
  //       } else {
  //         console.error(
  //           "Remote Lottie file fetch failed, using local fallback"
  //         );
  //         setSrc("/arrow.lottie"); // fallback to local file
  //       }
  //     } catch (error) {
  //       console.error(
  //         "The remote file seems unavailable, using local file",
  //         error
  //       );
  //       setSrc("/arrow.lottie"); // fallback
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchRemoteAnimation();
  // }, []);

  // return isLoading ? (
  //   <div className="w-full flex place-items-center">
  //     <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-white border-solid" />
  //   </div>
  // ) : (
  //   <DotLottieReact src="/arrow.lottie" loop autoplay />
  // );
  return <DotLottieReact src="/arrow.lottie" loop autoplay />;
}

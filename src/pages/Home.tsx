import React from "react";
import UseDownload from "../hooks/useDownload";
import Details from "./Details";

export interface IAllData {
  title: string;
  description: string;
  thumbnails: string;
  audioUrl: string;
  videoUrl: string;
}

const Home = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isError, setIsError] = React.useState<boolean>(false);
  const [allData, setAllData] = React.useState<IAllData | null>(null);
  const url = React.useRef<HTMLInputElement | null>(null);

  const handleDownload = async () => {
    setIsLoading(true);
    if (isError) setIsError(false);
    try {
      const { audio, video } = await UseDownload(url.current?.value.toString());
      console.log(audio, video);
      setAllData({
        title: audio.result.title,
        description: audio.result.desc,
        thumbnails: audio.result.album,
        audioUrl: audio.result.download_audio,
        videoUrl: video.result.download_video,
      });
    } catch (e) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  return (
    <div>
      {!allData && (
        <>
          <div className="home">home</div>
          <input
            type="text"
            name="url"
            id="url"
            ref={url}
            disabled={isLoading}
          />
          <button onClick={handleDownload} disabled={isLoading}>
            {isLoading ? "Memuat" : "Download"}
          </button>
        </>
      )}
      {!isError && !isLoading && allData && (
        <Details allData={allData} setAllData={setAllData} />
      )}
    </div>
  );
};

export default Home;

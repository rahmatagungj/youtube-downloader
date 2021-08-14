import React from "react";
import UseDownload from "../hooks/useDownload";
import MainLayout from "../layouts/MainLayout";
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

  const RenderHome = () => {
    return (
      <React.Fragment>
        <div className="container flex flex-col px-5 py-8 mx-auto lg:items-center">
          <div className="flex flex-col w-full mb-8 text-left lg:text-center justify-center"></div>
          <h1 className="mx-auto mb-6 text-2xl font-semibold leading-none tracking-tighter text-gray-100 lg:w-5/6 sm:text-6xl title-font">
            Youtube Downloader
          </h1>
          <p className="mx-auto text-base font-medium leading-relaxed text-gray-200 lg:w-5/6 text-center">
            Buat semuanya menjadi mudah dan cepat dalam mengunduh video dan
            audio dari Youtube.
          </p>
          <div className="mt-10" />
          {isError && (
            <div className="p-2 justify-center flex flex-row">
              <div className="inline-flex items-center leading-none text-white rounded-lg p-2 shadow text-teal text-sm">
                <span className="inline-flex bg-red-600 text-white rounded-full h-6 px-3 justify-center items-center">
                  Gagal
                </span>
                <span className="inline-flex px-2">Video tidak ditemukan</span>
              </div>
            </div>
          )}
          <div className="flex flex-col md:flex-row md:items-start w-full mx-auto justify-center lg:w-5/6">
            <div className="relative md:mr-4 text-left lg:w-full xl:w-1/2 md:w-full">
              <input
                type="text"
                id="urlsite"
                placeholder="Masukan URL Video"
                name="urlsite"
                ref={url}
                disabled={isLoading}
                className="flex-grow w-full px-4 py-2 mb-4 md:mr-4 text-base text-black transition duration-650 ease-in-out transform rounded-lg bg-blueGray-200 focus:outline-none focus:border-purple-500 sm:mb-0 focus:bg-white focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
              />
            </div>
            <button
              onClick={handleDownload}
              disabled={isLoading}
              className={`${
                isLoading && "cursor-not-allowed"
              } mx-auto md:mx-0 w-32 text-center justify-center md:w-20 flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2`}
            >
              {isLoading ? "Memuat" : "Download"}
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  };
  return (
    <MainLayout>
      <div className="flex flex-col h-screen">
        <div className="m-auto">
          {!allData && <RenderHome />}
          {!isError && !isLoading && allData && (
            <Details allData={allData} setAllData={setAllData} />
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;

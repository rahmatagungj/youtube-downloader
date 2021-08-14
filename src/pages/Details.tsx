import React from "react";
import { IAllData } from "./Home";

interface DetailsProps {
  allData: IAllData | null;
  setAllData: React.Dispatch<React.SetStateAction<IAllData | null>>;
}

const Details = ({ allData, setAllData }: DetailsProps) => {
  const handleClearAllData = () => {
    setAllData(null);
  };

  return (
    <div className="p-5 md:p-0 flex justify-center">
      <div className="bg-white shadow-xl p-3 rounded-lg w-full md:w-96">
        <img
          src={allData?.thumbnails}
          alt={allData?.title}
          className="rounded-lg"
        />
        <h1 className="font-bold text-lg text-gray-800">{allData?.title}</h1>
        <p className="text-gray-800 text-md break-words ">
          {allData?.description.split(" ").slice(0, 15).join(" ")}
        </p>
        <div className="flex justify-evenly items-center mt-2 flex-col md:flex-row">
          <a
            href={allData?.audioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:mr-2"
            download
          >
            <button className="p-3 w-full flex-shrink font-semibold transition duration-500 ease-in-out transform bg-blue-500 mt-2 rounded-xl text-gray-50 hover:bg-blue-600">
              Download Audio
            </button>
          </a>
          <a
            href={allData?.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
            download
          >
            <button className="p-3 w-full font-semibold transition duration-500 ease-in-out transform bg-blue-500 mt-2 rounded-xl text-gray-50 hover:bg-blue-600">
              Download Video
            </button>
          </a>
        </div>
        <div className="flex justify-evenly items-center mt-2 flex-col md:flex-row">
          <button
            onClick={handleClearAllData}
            className="p-3 w-full font-semibold transition duration-500 ease-in-out transform border-2 border-blue-500 mt-2 rounded-xl text-gray-600 hover:text-gray-50 hover:bg-blue-600"
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;

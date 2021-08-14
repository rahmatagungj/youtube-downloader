import React from "react";
import { IAllData } from "./Home";

interface DetailsProps {
  allData: IAllData | null;
  setAllData: React.Dispatch<React.SetStateAction<IAllData | null>>;
}

const Details = ({ allData, setAllData }: DetailsProps) => {
  return (
    <div>
      <h1>{allData?.title}</h1>
      <img src={allData?.thumbnails} alt={allData?.title} />
      <p>{allData?.description}</p>
      <a
        href={allData?.audioUrl}
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        <button>Download Audio</button>
      </a>
      <a
        href={allData?.videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        <button>Download Video</button>
      </a>
    </div>
  );
};

export default Details;

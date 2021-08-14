import axios from "axios";

const UseDownload = async (url: string | null | undefined) => {
  const dataVideo = await axios.get(
    `https://hadi-api.herokuapp.com/api/ytvideo?url=${url}`
  );
  const dataAudio = await axios.get(
    `https://hadi-api.herokuapp.com/api/ytaudio?url=${url}`
  );
  const video = dataVideo.data;
  const audio = dataAudio.data;

  let isSuccess = false;
  if (audio?.status === 200) isSuccess = true;
  return { audio, video, isSuccess };
};

export default UseDownload;

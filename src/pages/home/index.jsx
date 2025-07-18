import axios from "axios";
import Head from "../../components/Head";
import { useState } from "react";
import { successNotification } from "../../utils/helpers";

const HomePage = () => {
  const [keywords, setkeywords] = useState();
  const [duration, setduration] = useState();
  const [loading, setloading] = useState(false);
  const [songURI, setsongURI] = useState();
  const [buttonText, setbuttonText] = useState("Generate & Play song");

  const input = {
    text: keywords,
    duration,
  };

  const handleGenerateSong = async () => {
    setbuttonText("Loading...");
    setloading(true);
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/website/tokens/gen-song`,
      input
    );
    if (response.status == 200) {
      successNotification;
      const data = response?.data?.data;
      setloading(false);
      setsongURI(data);
      setbuttonText("Generate a new song");
      successNotification("COngratulations! Song successfully generated.");
    } else {
      setbuttonText("Try Again");
      setloading(false);
    }
    console.log("response", response);
  };

  return (
    <>
      <Head pageTitle="Welcome to Elder Intelligence" />
      <div className="h-[60vh] flex items-center py-20">
        {songURI ? (
          <div className="w-[500px] mx-auto px-5 md:px-0 flex flex-col gap-7">
            <audio src={songURI} controls className="w-full"></audio>
            <button onClick={() => setsongURI()}>{buttonText}</button>
          </div>
        ) : (
          <div className="w-[500px] mx-auto px-5 md:px-0 flex flex-col gap-10">
            <div className="text-white font-semibold text-center">
              What would you like me to play?
            </div>
            <input
              type="text"
              placeholder="type song keywords..."
              className=""
              onChange={(e) => setkeywords(e.target.value)}
            />
            <input
              type="number"
              placeholder="song duration (in secs)"
              className=""
              onChange={(e) => setduration(e.target.value)}
            />
            <select>
              <option value="">Song category</option>
              <option value="Afrobeat">Afrobeat Song</option>
              <option value="Gospel">Gospel Song</option>
            </select>
            <button
              onClick={handleGenerateSong}
              className={loading ? "opacity-45" : ""}
              disbaled={loading && true}
            >
              {buttonText}
            </button>
            {loading && (
              <span className="-mt-5 p-3 text-sm text-[#f27938] bg-[#241106]">
                App is currently generating music. This might take a moment.
                Kindly be patient...
              </span>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;

import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import StackedBarChartSharpIcon from "@mui/icons-material/StackedBarChartSharp";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => navigate("/")}
        className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex"
      >
        <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
          <div className="flex items-center gap-3 pl-8 cursor-pointer">
            <div>
              <HomeIcon />
            </div>
            <p className="font-bold">Home</p>
          </div>
          <div className="flex items-center gap-3 pl-8 cursor-pointer">
            <div>
              <SearchIcon />
            </div>
            <p className="font-bold">Search</p>
          </div>
        </div>

        <div className="bg-[#121212] h-[85%] rounded">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div>
                <StackedBarChartSharpIcon />
              </div>
              <p className="font-semibold">Your Library</p>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <ArrowForwardSharpIcon />
              </div>
              <div>
                <AddSharpIcon />
              </div>
            </div>
          </div>
          <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start">
            <h1>Create your first playlist</h1>

            <p className="font-light">Its easy we will help you</p>
            <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
              Create Playlist
            </button>
          </div>
          <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start">
            <h1>Lets findsome podcasts to follow</h1>

            <p className="font-light">
              We will keep you update on new episodes
            </p>
            <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
              Browse Podcast
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

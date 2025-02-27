import React from "react";
import Navbar from "./Navbar";
import { albumsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="my-5 font-bold text-2xl">
        <h1 className="my-5 font-bold text-2xl">Featured Chats</h1>
        <div className="flex overflow-auto">
          {albumsData.map((items, index) => (
            <AlbumItem
              key={index}
              name={items.name}
              image={items.image}
              id={items.id}
              desc={items.desc}
            />
          ))}
        </div>
        <h1 className="my-5 font-bold text-2xl">Todays Biggest Hits</h1>
        <div className="flex overflow-auto">
          {albumsData.map((items, index) => (
            <SongItem
              key={index}
              name={items.name}
              image={items.image}
              id={items.id}
              desc={items.desc}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMusicRecord, updateMusicRecord } from "../Redux/AppReducer/action";

const EditMusicRecord = () => {
  // simply copy majority of logic from singleMusicRecord.jsx
  const musicRecord = useSelector((store) => store.AppReducer.musicRecords);
  const [musicName, setMusicName] = useState("");
  const [artistName, setArtistName] = useState("");

  const { id } = useParams();

  const dispatch = useDispatch();

  const [currentMusicAlbum, setCurrentMusicAlbum] = useState({});

  useEffect(() => {
    if (musicRecord.length === 0) {
      dispatch(getMusicRecord());
    }
  }, [dispatch, musicRecord.length]);

  useEffect(() => {
    if (id) {
      const currentMusic = musicRecord.find((album) => album.id === id);
      currentMusic && setCurrentMusicAlbum(currentMusic);

      if (currentMusic) {
        setMusicName(currentMusic.name);
        setArtistName(currentMusic.artist);
      }
    }
  }, [id, musicRecord]);
  console.log(currentMusicAlbum);
  console.log(musicName, artistName);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (musicName && artistName) {
      const payload = {
        name: musicName,
        artist: artistName,
      };
      dispatch(updateMusicRecord(id, payload)).then(() =>
        dispatch(getMusicRecord())
      );
    }
    // after updating the data we need to fetch the data again for that we have to use .then and .then will only work if updateMusicRecord returns the response thats why we have used return with axios
  };

  return (
    <div>
      <h1>Edit Page</h1>
      <form onSubmit={handleSubmit}>
        <label>Edit Music Name</label>
        <input
          value={musicName}
          onChange={(e) => setMusicName(e.target.value)}
          type="text"
        />
        <label>Edit Artist Name</label>
        <input
          value={artistName}
          onChange={(e) => setArtistName(e.target.value)}
          type="text"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default EditMusicRecord;

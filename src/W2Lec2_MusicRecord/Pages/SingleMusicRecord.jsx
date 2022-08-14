import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getMusicRecord } from "../Redux/AppReducer/action";

const SingleMusicRecord = () => {
  // what is diff between useParams and useSearchParams
  // useParams grabs only dynamic part of link--> which is between : and ?
  // useSearchParams grabs all the search params which are after ?

  const { id } = useParams();
  const musicRecord = useSelector((store) => store.AppReducer.musicRecords);
  const [currentMusicAlbum, setCurrentMusicAlbum] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    if (musicRecord.length === 0) {
      dispatch(getMusicRecord());
    }
  }, [dispatch, musicRecord.length]);

  useEffect(() => {
    if (id) {
      const currentMusic = musicRecord.find((album) => album.id === id);
      currentMusic && setCurrentMusicAlbum(currentMusic);
    }
  }, [id, musicRecord]);
  console.log(currentMusicAlbum);
  // .find returns the first value that satisfied the condition

  // this is working fine untill i refresh it --> because after refreshing all the data vanishes because on refreshing we are not getting musicRecord again thats why to solve this problem we will make an api call again

  return (
    <div>
      SingleMusicRecord
      <div>{currentMusicAlbum.genre}</div>
      <div>
        <Link to={`/music/${id}/edit`}>Edit</Link>
      </div>
    </div>
  );
};

export default SingleMusicRecord;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMusicRecord } from "../Redux/AppReducer/action";
import styled from "styled-components";
import { Link, useLocation, useSearchParams } from "react-router-dom";

const MusicRecords = () => {
  // problem ==> here the problem is we need to rerender MusicRecords component whenever there is any change in category array in FiterSort.jsx--> but how to do that ..? because we cannot use category as a dependency to useEffect here --> so to solve this problem we will use useLocation hook

  const location = useLocation();

  // now to filter data acc to checkboxes selected in FilterSort instead of using .filter we will use the ability of json-server to filter data
  //   step1 -> get genres from url
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  const musicRecords = useSelector((store) => store.AppReducer.musicRecords);

  useEffect(() => {
    // step2 ->
    const sortBy = searchParams.get("sortBy");
    const queryParams = {
      params: {
        genre: searchParams.getAll("genre"),
        _sort: sortBy && "year",
        _order: sortBy, //if sortBy is not present || is false then axios wont send _order to api
      },
    };

    //   dispatch(getMusicRecord); // using method 1
    //   method one is direct ans easy but now if i want to pass any argument to it then we have to use method2
    dispatch(getMusicRecord(queryParams)); // using method 2
  }, [location.search]);
  console.log(musicRecords, "show Music");
  return (
    <div>
      <div>MusicRecords</div>
      <MusicRecordsWrapper>
        {musicRecords?.length > 0 &&
          musicRecords.map((item) => (
            <MusicRecordsItem key={item.id}>
              <Link to={`/music/${item.id}`}>
                <div>{item.name}</div>
                <div>
                  <img src={item.img} alt={item.name} />
                </div>
                <div>{item.genre}</div>
                <div>{item.year}</div>
              </Link>
            </MusicRecordsItem>
          ))}
      </MusicRecordsWrapper>
    </div>
  );
};

const MusicRecordsWrapper = styled.div`
  border: 1px solid black;
  display: grid;
  margin: auto;
  grid-template-columns: repeat(4, 1fr);
`;
const MusicRecordsItem = styled.div`
  margin: auto;
  border: 1px solid black;
  width: 200px;
`;

export default MusicRecords;

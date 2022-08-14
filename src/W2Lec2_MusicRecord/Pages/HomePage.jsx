import React from "react";
import FilterSort from "../Components/FilterSort";
import MusicRecords from "./MusicRecords";
import styled from "styled-components";

const HomePage = () => {
  return (
    <HomePageWrapper>
      <FilterSortWrapper>
        <FilterSort />
      </FilterSortWrapper>
      <MusicRecordsWrapper>
        <MusicRecords />
      </MusicRecordsWrapper>
    </HomePageWrapper>
  );
};

export default HomePage;

// always remember to put semicolon after every style otherwise it wont work
const HomePageWrapper = styled.div`
  display: flex;
  height: 100vh;
`;
const FilterSortWrapper = styled.div`
  width: 200px;
  border: 1px solid crimson;
`;

// IMP --> ek part ko pixels main width dedo aur dusre part ko 100% taki bachi hui saari width second part ko mil jaye
const MusicRecordsWrapper = styled.div`
  width: 100%;
  border: 1px solid blue;
`;

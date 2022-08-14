import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSort = () => {
  // the biggest reason why we use searchParams is that with its help we can make the link persistant so that if we share any product link to someone else that it should take her to that particular product

  const [searchParams, setSearchParams] = useSearchParams();
  // searchParams gives us access to every parameter in the url and setSearchParams helps us to update them in the url

  const initialGenreParams = searchParams.getAll("genre");
  const initialSortByParams = searchParams.get("sortBy");

  const [category, setCategory] = useState(initialGenreParams || []);
  // if multiple checkbox are selected then the value of all the selected checkboxes will be stored inside the category array

  // if url contains any filter params that we will grab that params and apply filter accordingly or else we initiate an empty array
  // and here default checks came into play --> it will check if its value is present in category array or not if yes than it will make it checked

  const handleGenreChange = (e) => {
    const option = e.target.value;
    let newCategory = [...category];
    // i have created the newCategory with same values but different reference
    if (category.includes(option)) {
      // remove it
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      // add it
      newCategory.push(option);
    }
    setCategory(newCategory);
  };
  console.log(category);

  const [sortBy, setSortBy] = useState(initialSortByParams || "");

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };
  console.log(sortBy);

  useEffect(() => {
    // if category changes then reflect it on the URL search as well
    if (category || sortBy) {
      // we will just check if the value is present or not if yes then only pass it inside obj
      const params = {};
      category && (params.genre = category);
      sortBy && (params.sortBy = sortBy);
      setSearchParams(params);
    }
  }, [category, setSearchParams, sortBy]);

  console.log(searchParams.get("genre"));
  // .get returns the first value associate with given search parameter
  // .getAll returns all value

  return (
    <div>
      <h3>FilterSort</h3>
      <div>
        <input
          type="checkbox"
          defaultChecked={category.includes("K-Pop")}
          value="K-Pop"
          onChange={handleGenreChange}
        />
        <label>K-Pop</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="Country"
          defaultChecked={category.includes("Country")}
          onChange={handleGenreChange}
        />
        <label>Country</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="Pop"
          defaultChecked={category.includes("Pop")}
          onChange={handleGenreChange}
        />
        <label>Pop</label>
      </div>
      <div>
        <input
          type="checkbox"
          defaultChecked={category.includes("Hard-Rock")}
          value="Hard-Rock"
          onChange={handleGenreChange}
        />
        <label>Hard-Rock</label>
      </div>
      <div>
        <input
          type="checkbox"
          defaultChecked={category.includes("Holiday")}
          value="Holiday"
          onChange={handleGenreChange}
        />
        <label>Holiday</label>
      </div>
      <div>
        <input
          type="checkbox"
          defaultChecked={category.includes("Classical-Crossover")}
          value="Classical-Crossover"
          onChange={handleGenreChange}
        />
        <label>Classical-Crossover</label>
      </div>
      <div>
        <input
          type="checkbox"
          defaultChecked={category.includes("Singer/SongWritter")}
          value="Singer/SongWritter"
          onChange={handleGenreChange}
        />
        <label>Singer/SongWritter</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="Heavy Metal"
          defaultChecked={category.includes("Heavy Metal")}
          onChange={handleGenreChange}
        />
        <label>Heavy Metal</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="Christmas"
          defaultChecked={category.includes("Christmas")}
          onChange={handleGenreChange}
        />
        <label>Christmas</label>
      </div>
      <div>
        <input
          type="checkbox"
          defaultChecked={category.includes("Rock")}
          value="Rock"
          onChange={handleGenreChange}
        />
        <label>Rock</label>
      </div>
      <h3>Sort</h3>
      <div onChange={handleSortBy}>
        <div>
          {/* json-server only accepts asc and desc as sorting params */}
          <input
            type="radio"
            defaultChecked={sortBy === "asc"}
            name="sortBy"
            value="asc"
          />
          <label>Ascending</label>
        </div>
        <div>
          <input
            type="radio"
            defaultChecked={sortBy === "desc"}
            name="sortBy"
            value="desc"
          />
          <label>Descending</label>
        </div>
      </div>
    </div>
  );
};

export default FilterSort;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";

// style
import "./style.scss";

// icons
import { BsSearch } from "react-icons/bs";

// pages
import { getDataMovie } from "../../../app/features/reducer";
import { IconContext } from "react-icons";

const More = () => {
  const baseImgUrl = "https://image.tmdb.org/t/p/original";
  const movies = useSelector((state) => state.reducer.data);
  const loading = useSelector((state) => state.loading);
  const [search, setSearch] = useState("");
  const listWrap = document.querySelector(".list-item");
  console.log(listWrap);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataMovie());
  }, []);

  let movieSearch = movies.filter((val) => {
    return Object.keys(val).some((key) =>
      val[key]
        .toString()
        .toLowerCase()
        .includes(search.toString().toLowerCase())
    );
  });

  return (
    <>
      <div className="search-wrap">
        <span>List of Movies</span>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <IconContext.Provider value={{ className: "search-icon" }}>
          <BsSearch />
        </IconContext.Provider>
      </div>
      {/* <div className="hasil">
      </div> */}

      <div className="list-wrap">
        {movieSearch.length > 0 ? (
          <>
            {movieSearch.map((movie, index) => {
              return (
                <Link
                  to={{
                    pathname: `details/${movie.id}`,
                    // query: { id: movieSearch.id },
                  }}
                  key={index}
                >
                  <div className="image-wrap">
                    <img src={`${baseImgUrl}${movie.poster_path}`}></img>
                    <p>{movie.title}</p>
                  </div>
                </Link>
              );
            })}
          </>
        ) : (
          <ClipLoader
            className="loading"
            color={"#ffffff"}
            loading={loading}
            // size={}
          />
        )}
      </div>
    </>
  );
};

export default More;

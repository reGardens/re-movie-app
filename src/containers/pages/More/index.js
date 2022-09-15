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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataMovie());
  }, []);

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
      <div className="hasil">
        {/* filter/search */}
        {/* {movies.length > 0 ? (
          <>
            {movies
              .filter((val) => {
                if (search == "") {
                } else if (
                  val.title.toLowerCase().includes(search.toLowerCase()) ||
                  loading == true
                ) {
                  return val;
                }
              })
              .map((movies, index) => {
                return (
                  <div className="search-wrap" key={index}>
                    <Link
                      to={{
                        pathname: `detail/${movies.id}`,
                        // query: { id: movies.id },
                      }}
                    >
                      <img src={`${baseImgUrl}${movies.poster_path}`}></img>
                      <p>{movies.title}</p>
                    </Link>
                  </div>
                );
              })}
          </>
        ) : null} */}
      </div>

      <div className="list-wrap">
        {movies.length > 0 ? (
          <>
            {movies.filter((val) => {
              if (search === "") {
                // return val.length;
              } else if (
                val.poster_path
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase()) ||
                loading
              ) {
                // return <img src={`${baseImgUrl}${val.poster_path}`}></img>;
                // return val
              }
            })}

            {movies.map((movie, index) => {
              return (
                <Link
                  to={{
                    pathname: `details/${movie.id}`,
                    // query: { id: movies.id },
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

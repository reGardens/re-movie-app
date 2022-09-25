import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";

// style
import "./style.scss";

// images
import tmdbLogo from "../../../assets/logo/tmdb-logo.png";

// icons
import { IconContext } from "react-icons/lib";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { getDataMovie } from "../../../app/features/reducer";
import ImageSlider from "../../../components/Atoms/ImageSlider";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const baseImgUrl = "https://image.tmdb.org/t/p/original";

  const dispatch = useDispatch();
  const movies = useSelector((state) => state.reducer.data);
  const loading = useSelector((state) => state.movies);

  useEffect(() => {
    console.log(movies);
    dispatch(getDataMovie());
  }, []);

  let titleSearch = movies.filter((val) => {
    if (search == "") {
    } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
      return val;
    }
  });

  return (
    <>
      <div className="content">
        <div className="img-besar">
          {/* element 1 */}
          {/* crousel */}
          <ImageSlider />

          {/* element 2 */}
          <div className="wrapper">
            <div className="container">
              {/* element input */}
              <div className="input">
                <input
                  type="text"
                  placeholder="Search"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  value={search}
                />

                <IconContext.Provider value={{ className: "search-icon" }}>
                  <BsSearch />
                </IconContext.Provider>
              </div>

              {/* element hasil */}
              <div className="hasil">
                {titleSearch.length > 0 ? (
                  <>
                    {titleSearch.map((val, index) => {
                      // console.log("val", val);
                      return (
                        <div className="hasil-wrap" key={index}>
                          <Link
                            to={{
                              pathname: `details/${val.id}`,
                              // query: { id: movies.id },
                            }}
                          >
                            {val.title}
                          </Link>
                        </div>
                      );
                    })}
                  </>
                ) : null}
              </div>
            </div>
          </div>

          {/* <div className="container">
            <div className="input-wrap">
              <div className="src">
                <input
                  type="text"
                  placeholder="Search"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  value={search}
                />

                <IconContext.Provider value={{ className: "search-icon" }}>
                  <BsSearch />
                </IconContext.Provider>
              </div>
              <div className="hasil">
                {titleSearch.length > 0 ? (
                  <>
                    {titleSearch.map((val, index) => {
                      // console.log("val", val);
                      return (
                        <div className="hasil-wrap" key={index}>
                          <Link
                            to={{
                              pathname: `details/${val.id}`,
                              // query: { id: movies.id },
                            }}
                          >
                            {val.title}
                          </Link>
                        </div>
                      );
                    })}
                  </>
                ) : null}
              </div>
            </div>
          </div> */}

          {/* <div className="dumy" /> */}
        </div>

        {/* <div className="subLink">
          <p>Ter Populer</p>
        </div>
        <div className="card-wrap">
          {movies.length > 0 ? (
            <Fragment>
              <div className="image-wrap">
                <div>
                  <Link
                    to={{
                      pathname: `details/${movies[0]?.id}`,
                      // query: { id: movies.id },
                    }}
                  >
                    <img src={`${baseImgUrl}${movies[0]?.poster_path}`}></img>
                    <p>{movies[0]?.title}</p>
                  </Link>
                </div>
                <div>
                  <Link
                    to={{
                      pathname: `details/${movies[1]?.id}`,
                      // query: { id: movies.id },
                    }}
                  >
                    <img src={`${baseImgUrl}${movies[1]?.poster_path}`}></img>
                    <p>{movies[1]?.title}</p>
                  </Link>
                </div>
                <div>
                  <Link
                    to={{
                      pathname: `details/${movies[2]?.id}`,
                      // query: { id: movies.id },
                    }}
                  >
                    <img src={`${baseImgUrl}${movies[2]?.poster_path}`}></img>
                    <p>{movies[2]?.title}</p>
                  </Link>
                </div>
                <div>
                  <Link
                    to={{
                      pathname: `details/${movies[3]?.id}`,
                      // query: { id: movies.id },
                    }}
                  >
                    <img src={`${baseImgUrl}${movies[3]?.poster_path}`}></img>
                    <p>{movies[3]?.title}</p>
                  </Link>
                </div>
                <div>
                  <Link
                    to={{
                      pathname: `details/${movies[4]?.id}`,
                      // query: { id: movies.id },
                    }}
                  >
                    <img src={`${baseImgUrl}${movies[4]?.poster_path}`}></img>
                    <p>{movies[4]?.title}</p>
                  </Link>
                </div>
              </div>
            </Fragment>
          ) : (
            <ClipLoader
              className="loading"
              color={"#ffffff"}
              loading={loading}
              // size={}
            />
          )}
        </div> */}

        {/* uji coba slide */}

        {/* <div className="card-overflow">
        <div className="image-wrap">
          {movies.length > 0 ? (
            <Fragment>
              {movies.map((movies, index) => {
                return (
                  <Link
                    to={{
                      pathname: `detail/${movies.id}`,
                      // query: { id: movies.id },
                    }}
                    key={index}
                  >
                    <div className="image-wrap">
                      <img src={`${baseImgUrl}${movies.poster_path}`}></img>
                      <p>{movies.title}</p>
                    </div>
                  </Link>
                );
              })}
            </Fragment>
          ) : (
            <ClipLoader
              className="loading"
              color={"#ffffff"}
              loading={loading}
              // size={}
            />
          )}
        </div>
      </div> */}
        <div className="showMore">
          <Link to="/more">More...</Link>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

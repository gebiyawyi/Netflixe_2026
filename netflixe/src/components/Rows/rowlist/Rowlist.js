import React from "react";
import Rows from "../rows/Rows";
import requests from "../../../pages/utils/request";
const Rowlist = () => {
  return (
    <>
      <Rows
        title="Netflix Originals"
        fetchUrl={requests.fetchAdventure}
        isLargeRow={true}
      />
      <Rows title="Trending" fetchUrl={requests.fetchSciFi} isLargeRow={true} />
      <Rows
        title="Top Rated"
        fetchUrl={requests.fetchDrama}
        isLargeRow={true}
      />
      <Rows
        title="Top Rated"
        fetchUrl={requests.fetchHorror}
        isLargeRow={true}
      />
      <Rows
        title="Top Rated"
        fetchUrl={requests.fetchCrime}
        isLargeRow={true}
      />
    </>
  );
};
export default Rowlist;

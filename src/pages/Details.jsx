import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Default from "../layout/Default";

const Details = () => {
  const [dataWisata, setDataWisata] = useState();
  const { wisataId } = useParams();
  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_BASE_URL}/wisata/${wisataId}`,
    })
      .then((response) => {
        setDataWisata(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <Default>
      <img src={dataWisata && dataWisata.image} alt='' />
      <h1>{dataWisata && dataWisata.title}</h1>
      <p>{dataWisata && dataWisata.description}</p>
    </Default>
  );
};

export default Details;

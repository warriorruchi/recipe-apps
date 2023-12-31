import React, { useState, useEffect } from "react"
import axios from "axios"

import FaviouateCard from "../Card/faviouatecard"
function Faviouate({ update, setUpdate }) {
  const [data, setData] = useState([])
  let url = process.env.REACT_APP_URL;

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token")) || ""
    if (token !== "") {
      axios
        .get(`${url}/recipes/getAll`, {
          headers: { Authorization: `${token}` },
        })
        .then((res) => {
          setData(res.data)

        })
    }
  }, [update])


  return (
    <>
      <div className="fav-container">
        {data.map((e, i) => {
          return (
            <FaviouateCard
              key={e.id}
              title={e.title}
              image={e.image}
              imageType={e.imageType}
              id={e.id}
              setUpdate={setUpdate}
            />
          )
        })}
      </div>
    </>
  )
}

export default Faviouate;

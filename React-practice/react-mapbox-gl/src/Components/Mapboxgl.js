import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFtdW43MzkiLCJhIjoiY2w0ZWRyYnN1MDJrNTNicGc2MWlmemM3OCJ9.FyJx3n9L4SiJBacUvsKVQA";
const Mapboxgl = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [],
      zoom: 13,
    });

    map.addControl(
      new MapboxDirections({
        accessToken: mapboxgl.accessToken,
      }),
      "top-left"
    );
  }, []);
  return (
    <div>
     <div id="map"></div>
    </div>
  );
};

export default Mapboxgl;

import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef, useState } from "react";
import Map, {
  Marker,
  GeolocateControl,
  FullscreenControl,
  Source,
  Layer,
  Popup,
  NavigationControl,
} from "react-map-gl";
import "../css/mapa.css";
import { useMap } from "react-map-gl";

const token =
  "pk.eyJ1IjoiYW50b25pb21vcmE4NSIsImEiOiJjbGRmazF4NncwM2pnM3FvOXdjd3dqcWowIn0.N_knZD0YPcH76M9D2TaM4w";

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [-97.874321, 18.9381977] },
    },
  ],
};

const layerStyle = {
  id: "point",
  type: "circle",
  paint: {
    "circle-radius": 10,
    "circle-color": "#007cbf",
  },
};

function Mapa() {
  const [lng, setLng] = useState(-97.87229019525113);
  const [lat, setLang] = useState(18.93822888593087);
  const [zoom, setZoom] = useState(13);


  return (
    <div>
      <Map
        mapboxAccessToken={token}
        initialViewState={{
          latitude: lat,
          zoom: zoom,
          longitude: lng,
        }}
        style={{
          width: "100vw",
          height: "90vh",
        }}
        mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
      >
        <GeolocateControl />
        <FullscreenControl />
        <NavigationControl />
        <Source id="my-data" type="geojson" data={geojson}>
          <Layer {...layerStyle} />
        </Source>

        <Marker longitude={-97.8750935} latitude={18.9377715} anchor="bottom">
          <img src="./marcador2.svg" />
        </Marker>
      </Map>
    </div>
  );
}

export default Mapa;
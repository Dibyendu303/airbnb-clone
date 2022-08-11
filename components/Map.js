import Map from 'react-map-gl';
import { useState } from "react";
import { getCenter } from 'geolib';

const MapComponent = ({ searchResults }) => {
    const coordinates = searchResults.map(result => ({
        longitude: result.long,
        latitude: result.lat
    }));

    const center = getCenter(coordinates);

    const [viewport, setViewport] = useState({
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11
    })

    return (
        <Map
            initialViewState={{ ...viewport }}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
            style={{ width: "100%", height: "100vh", overflow: "hidden" }}
            mapboxAccessToken={process.env.mapbox_key}
            mapStyle="mapbox://styles/abc404765/cl6ouk0by000614kaup30fts6"
        ></Map>
    )
}

export default MapComponent
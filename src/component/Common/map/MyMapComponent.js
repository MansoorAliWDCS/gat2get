import React, { useState, useEffect, useRef } from 'react'

const MyMapComponent = () =>{
  
  const [zoom, setZoom] = useState(12); // initial zoom
  const [center, setCenter] = useState({
    lat: 23.0225,
    lng: 72.5714,
  });
  
  const ref = useRef();
  useEffect(() => {
    const map = new window.google.maps.Map(ref.current, {
      center,
      zoom,
    })
    map.setCenter({
      lat: center.lat,
      lng: center.lng,
    })

    const icons = {
      centerparking: {
        icon: require("../../../assets/images/center_marker.svg").default,
      },
      property: {
        icon: require("../../../assets/images/all_marker.svg").default,
      },
    };
    const features = [
      {
        position: new window.google.maps.LatLng(center),
        type: "centerparking",
      },
      {
        position: new window.google.maps.LatLng(22.9970, 72.4985),
        type: "property",
      },
      {
        position: new window.google.maps.LatLng(23.0171, 72.5331),
        type: "property",
      },
      {
        position: new window.google.maps.LatLng(23.0039, 72.5461),
        type: "property",
      },
      {
        position: new window.google.maps.LatLng(23.0686, 72.6536),
        type: "property",
      },
    ];

  // Create markers.
  for (let i = 0; i < features.length; i++) {
    const marker = new window.google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      map: map,
    });
  }
   
  },[]);
    return <div className='map_box' ref={ref} id="map" style={{ height: '780px', width: '100%' }}/>;
  }
  export default MyMapComponent
  
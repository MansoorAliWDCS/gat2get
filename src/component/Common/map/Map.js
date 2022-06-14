import React from 'react'
import { Wrapper } from "@googlemaps/react-wrapper";
import MyMapComonent from '../map/MyMapComponent';

const Map = () => {
  return (
    <Wrapper apiKey={"AIzaSyB61K3yQZ-gWlEhfdr29A3UHJc-aH7wbzw"}>
      <MyMapComonent/>
    </Wrapper>
  )
}

export default Map
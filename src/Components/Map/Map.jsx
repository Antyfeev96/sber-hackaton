import React from 'react';
import {GeolocationControl, Map, RouteButton, YMaps, ZoomControl} from 'react-yandex-maps';


const style = {
    display: 'flex',
    alignSelf: 'center',
    // marginTop: '100px',
    width: '100%',
    height: '100vh'
};

function MyMap() {
    return (
        <YMaps
            query={{
                apikey: "5730d9fe-a72e-48bf-861f-3517d2d750be",
            }}>
            <Map
                style={style}
                defaultState={{center: [55.75, 37.57], zoom: 9, controls: []}}
                options={
                    {
                        autoFitToViewport: "always",
                    }
                }
            >
                <GeolocationControl options={
                    {
                        float: 'right',
                        // position: {
                        //     right: 25,
                        //     bottom: 25
                        // }
                    }
                } />
                <RouteButton options={{ float: 'right' }} />
                <ZoomControl options={{float: 'right'}}/>
            </Map>
        </YMaps>
    );
}

export default MyMap;

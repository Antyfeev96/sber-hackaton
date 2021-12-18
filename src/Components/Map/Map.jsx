import React from 'react';
import {GeolocationControl, Map, Placemark, RouteButton, YMaps, ZoomControl} from 'react-yandex-maps';
import ship from '../../Assets/ship.svg'

const coords = [
    [55.702793, 37.626884],
    [55.700120, 37.628456],
    [55.692832, 37.629497],
    [55.690338, 37.628099],
    [55.689400, 37.676036]
]

const style = {
    display: 'flex',
    alignSelf: 'center',
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
                defaultState={{center: [55.702793, 37.626884], zoom: 15, controls: []}}
                options={
                    {
                        autoFitToViewport: "always",
                    }
                }
            >
                {coords.map((item) => <Placemark
                    options={{
                        iconLayout: 'default#image',
                        // Своё изображение иконки метки.
                        iconImageHref: ship,
                        // Размеры метки.
                        iconImageSize: [30, 42],
                        // Смещение левого верхнего угла иконки относительно
                        // её "ножки" (точки привязки).
                        iconImageOffset: [-5, -38]
                    }}
                    geometry={item} />)}
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

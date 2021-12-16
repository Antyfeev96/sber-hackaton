import React from 'react';
import { Map, YMaps } from 'react-yandex-maps';
import {Wrapper} from "./MapStyles";

const style = {
    marginTop: '100px',
    width: '100%',
    height: '50vh'
};

function MyMap() {
    return (
        <YMaps>
            <Wrapper>
                <div>123</div>
                <Map
                    style={style}
                    defaultState={{center: [55.75, 37.57], zoom: 9}}
                    options={
                        {autoFitToViewport: "always"}
                    }
                />
            </Wrapper>
        </YMaps>
    );
}

export default MyMap;

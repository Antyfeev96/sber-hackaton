import React, {useEffect} from 'react';
import {GeolocationControl, Map, Placemark, RouteButton, YMaps, ZoomControl} from 'react-yandex-maps';
import Modal from '../Modal/Modal'
import {useDispatch, useSelector} from "react-redux";
import { fetchAllTrams } from '../../Store/Reducers/TramsSlice'
import { fetchTramById } from "../../Store/Reducers/TramSlice";
import ship from '../../Assets/ship.svg'
import {useModal} from "../../Hooks/useModal";

const style = {
    position: 'relative',
    display: 'flex',
    alignSelf: 'center',
    width: '100%',
    height: '100vh'
};

function MyMap() {
    const dispatch = useDispatch()
    const abc = useSelector(state => state.tramsState)
    console.log({abc})
    const { trams } = useSelector(state => state.tramsState)
    // console.log({trams})
    const [isModalOpen, setModalOpen] = useModal(false)

    useEffect(() => {
        // dispatch(fetchAllTrams())
    }, [])

    const handleClick = (id) => {
        dispatch(fetchTramById({id}))
        setModalOpen(true)
    }

    return (
        <>
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
                    {trams && trams?.map((tram) => <Placemark
                        onClick={() => handleClick(tram.id)}
                        options={{
                            iconLayout: 'default#image',
                            iconImageHref: ship,
                            iconImageSize: [30, 42],
                            iconImageOffset: [-5, -38]
                        }}
                        geometry={[tram.latitude, tram.longitude]}/>)}
                    <GeolocationControl options={
                        {
                            float: 'right'
                        }
                    }/>
                    <RouteButton options={{float: 'right'}}/>
                    <ZoomControl options={{float: 'right'}}/>
                </Map>
                {isModalOpen && <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen}/>}
            </YMaps>
        </>
    );
}

export default MyMap;

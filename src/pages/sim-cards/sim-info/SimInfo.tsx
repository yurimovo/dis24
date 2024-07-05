import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import store from "../../../store";
import { observer } from "mobx-react";
import { Watch } from "react-loader-spinner";

import { fetchSimById } from "../../../service-functions/simcards/fetchSimById";

import "./style.scss";
import { Simcard } from "../../../types/simcards";

const SimInfo = observer(() => {
    const { id } = useParams();
    const { selectedActiveSim } = store;
    const [selectedSim, setSelectedSim] = useState<Simcard>();
    const [isLoading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        fetchSimById(selectedActiveSim)
        .then((result) => {
            setSelectedSim(result);
            setLoading(false);
        })
        .catch(error => {
            console.error(error);
            setLoading(false);
        });
    }, [id]);

    return (
        <div className="sim-info">
            {isLoading ? 
                <Watch
                    visible={true}
                    height="80"
                    width="80"
                    radius="48"
                    color="#b5533e"
                    ariaLabel="watch-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                /> : 
                <div className="sim-info__content">
                    <div className="sim-info__content__header">Информация о SIM-карте</div>
                    <div className="sim-info__content__sim">{ selectedSim?.sim_number }</div>
                    <div className="sim-info__content__row">
                        <div className="sim-info__content__row__title">FCCID:</div>
                        <div className="sim-info__content__row__content">{ selectedSim?.fccid }</div>
                    </div>
                    <div className="sim-info__content__row">
                        <div className="sim-info__content__row__title">Место установки:</div>
                        <div className="sim-info__content__row__content">{ selectedSim?.object }</div>
                    </div>
                    <div className="sim-info__content__row">
                        <div className="sim-info__content__row__title">Адрес:</div>
                        <div className="sim-info__content__row__content">{ selectedSim?.address }</div>
                    </div>
                    <div className="sim-info__content__row">
                        <div className="sim-info__content__row__title">Пультовый №:</div>
                        <div className="sim-info__content__row__content">{ selectedSim?.pult_number }</div>
                    </div>
                    <div className="sim-info__content__row">
                        <div className="sim-info__content__row__title">Дата установки:</div>
                        <div className="sim-info__content__row__content">{ selectedSim?.mounting_date }</div>
                    </div>
                </div>
            }
        </div>
    )
});

export default SimInfo;
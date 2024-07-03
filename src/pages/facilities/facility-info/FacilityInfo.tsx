import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import store from "../../../store";
import { observer } from "mobx-react";
import { Watch } from "react-loader-spinner";

import { fetchFacilityById } from "../../../service-functions/facilities/fetchFacilityById";

import "./style.scss";
import { Facility } from "../../../types/facilities";

const FacilityInfo = observer(() => {
    const { id } = useParams();
    const { selectedActiveFacility } = store;
    const [selectedFacility, setSelectedFacility] = useState<Facility>();
    const [isLoading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        fetchFacilityById(selectedActiveFacility)
        .then((result) => {
            setSelectedFacility(result);
            setLoading(false);
        })
        .catch(error => {
            console.error(error);
            setLoading(false);
        });
    }, [id]);

    return (
        <div className="facility-info">
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
                <div className="facility-info__content">
                    <div className="facility-info__content__header">Информация об объекте</div>
                    <div className="facility-info__content__facility">{ selectedFacility?.facility }</div>
                    <div className="facility-info__content__row">
                        <div className="facility-info__content__row__title">Адрес:</div>
                        <div className="facility-info__content__row__content">{ selectedFacility?.organization }</div>
                    </div>
                    <div className="facility-info__content__row">
                        <div className="facility-info__content__row__title">Адрес:</div>
                        <div className="facility-info__content__row__content">{ selectedFacility?.address }</div>
                    </div>
                    <div className="facility-info__content__row">
                        <div className="facility-info__content__row__title">№ договора:</div>
                        <div className="facility-info__content__row__content">{ selectedFacility?.contruct_number }</div>
                    </div>
                    <div className="facility-info__content__row">
                        <div className="facility-info__content__row__title">Дата договора:</div>
                        <div className="facility-info__content__row__content">{ selectedFacility?.contruct_date }</div>
                    </div>
                </div>
            }
        </div>
    )
});

export default FacilityInfo;
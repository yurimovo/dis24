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
                    <div className="facility-info__content__row">
                        <div className="facility-info__content__row__title">Тариф в месяц:</div>
                        <div className="facility-info__content__row__content">{ selectedFacility?.price }</div>
                    </div>
                    <div className="facility-info__content__row">
                        <div className="facility-info__content__row__title">Дата тарифа:</div>
                        <div className="facility-info__content__row__content">{ selectedFacility?.price_date }</div>
                    </div>
                    <div className="facility-info__content__row">
                        <div className="facility-info__content__row__title">Форма собственности:</div>
                        <div className="facility-info__content__row__content">{ selectedFacility?.ownership_type }</div>
                    </div>
                    <div className="facility-info__content__row">
                        <div className="facility-info__content__row__title">Категория объекта:</div>
                        <div className="facility-info__content__row__content">{ selectedFacility?.facility_category }</div>
                    </div>
                    <div className="facility-info__content__row">
                        <div className="facility-info__content__row__title">Вид охраны:</div>
                        <div className="facility-info__content__row__content">{ selectedFacility?.security_type }</div>
                    </div>
                    <div className="facility-info__content__row">
                        <div className="facility-info__content__row__title">№ договорного дела:</div>
                        <div className="facility-info__content__row__content">{ selectedFacility?.contruct_file_number }</div>
                    </div>
                    <div className="facility-info__content__row">
                        <div className="facility-info__content__row__title">№ литерного дела:</div>
                        <div className="facility-info__content__row__content">{ selectedFacility?.lettered_file_number }</div>
                    </div>
                    <div className="facility-info__content__row">
                        <div className="facility-info__content__row__title">СПИ:</div>
                        <div className="facility-info__content__row__content">{ selectedFacility?.spi }</div>
                    </div>
                    <div className="facility-info__content__row">
                        <div className="facility-info__content__row__title">Оборудование:</div>
                        <div className="facility-info__content__row__content">{ selectedFacility?.facility_hardware }</div>
                    </div>
                    <div className="facility-info__content__row">
                        <div className="facility-info__content__row__title">Монтажная организация:</div>
                        <div className="facility-info__content__row__content">{ selectedFacility?.mounting_organization }</div>
                    </div>
                    <div className="facility-info__content__row">
                        <div className="facility-info__content__row__title">Обслуживающая организация:</div>
                        <div className="facility-info__content__row__content">{ selectedFacility?.surving_organization }</div>
                    </div>
                    <div className="facility-info__content__row">
                        <div className="facility-info__content__row__title">Пультовый №:</div>
                        <div className="facility-info__content__row__content">{ selectedFacility?.pult_number }</div>
                    </div>
                    <div className="facility-info__content__row">
                        <div className="facility-info__content__row__title">№ СИМ-карты:</div>
                        <div className="facility-info__content__row__content">{ selectedFacility?.sim_number }</div>
                    </div>
                    <div className="facility-info__content__row">
                        <div className="facility-info__content__row__title">Ответственный:</div>
                        <div className="facility-info__content__row__content">{ selectedFacility?.responsible }</div>
                    </div>
                    <div className="facility-info__content__row">
                        <div className="facility-info__content__row__title">Подбор:</div>
                        <div className="facility-info__content__row__content">{ selectedFacility?.assortment }</div>
                    </div>
                    <div className="facility-info__content__row">
                        <div className="facility-info__content__row__title">Часы охраны:</div>
                        <div className="facility-info__content__row__content">{ selectedFacility?.security_hours }</div>
                    </div>
                    <div className="facility-info__content__row">
                        <div className="facility-info__content__row__title">Год ввода в эксплуатацию:</div>
                        <div className="facility-info__content__row__content">{ selectedFacility?.comm_year }</div>
                    </div>
                </div>
            }
        </div>
    )
});

export default FacilityInfo;
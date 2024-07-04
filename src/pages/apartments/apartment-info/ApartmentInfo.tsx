import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import store from "../../../store";
import { observer } from "mobx-react";
import { Watch } from "react-loader-spinner";
import { format } from 'date-fns';

import { fetchApartmentById } from "../../../service-functions/apartments/fetchApartmentById";

import "./style.scss";
import { Apartment } from "../../../types/apartments";

const ApartmentInfo = observer(() => {
    const { id } = useParams();
    const { selectedActiveApartment } = store;
    const [selectedApartment, setSelectedApartment] = useState<Apartment>();
    const [isLoading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        fetchApartmentById(selectedActiveApartment)
        .then((result) => {
            setSelectedApartment(result);
            setLoading(false);
        })
        .catch(error => {
            console.error(error);
            setLoading(false);
        });
    }, [id]);

    return (
        <div className="apartment-info">
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
                <div className="apartment-info__content">
                    <div className="apartment-info__content__header">Информация о МПХИГ</div>
                    <div className="apartment-info__content__owner">{ selectedApartment?.owner }</div>
                    <div className="apartment-info__content__row">
                        <div className="apartment-info__content__row__title">Адрес:</div>
                        <div className="apartment-info__content__row__content">{ selectedApartment?.address }</div>
                    </div>
                    <div className="apartment-info__content__row">
                        <div className="apartment-info__content__row__title">Телефоны:</div>
                        <div className="apartment-info__content__row__content">{ selectedApartment?.phones }</div>
                    </div>
                    <div className="apartment-info__content__row">
                        <div className="apartment-info__content__row__title">ИНН:</div>
                        <div className="apartment-info__content__row__content">{ selectedApartment?.inn }</div>
                    </div>
                    <div className="apartment-info__content__row">
                        <div className="apartment-info__content__row__title">№ договора:</div>
                        <div className="apartment-info__content__row__content">{ selectedApartment?.contruct_number }</div>
                    </div>
                    <div className="apartment-info__content__row">
                        <div className="apartment-info__content__row__title">Дата договора:</div>
                        <div className="apartment-info__content__row__content">{ selectedApartment?.contruct_date }</div>
                    </div>
                    <div className="apartment-info__content__row">
                        <div className="apartment-info__content__row__title">Тариф в месяц:</div>
                        <div className="apartment-info__content__row__content">{ selectedApartment?.price }</div>
                    </div>
                    <div className="apartment-info__content__row">
                        <div className="apartment-info__content__row__title">Дата тарифа:</div>
                        <div className="apartment-info__content__row__content">{ selectedApartment?.contruct_date }</div>
                    </div>
                    <div className="apartment-info__content__row">
                        <div className="apartment-info__content__row__title">Вид охраны:</div>
                        <div className="apartment-info__content__row__content">{ selectedApartment?.security_type }</div>
                    </div>
                    <div className="apartment-info__content__row">
                        <div className="apartment-info__content__row__title">№ договорного дела:</div>
                        <div className="apartment-info__content__row__content">{ selectedApartment?.contruct_file_number }</div>
                    </div>
                    <div className="apartment-info__content__row">
                        <div className="apartment-info__content__row__title">№ литерного дела:</div>
                        <div className="apartment-info__content__row__content">{ selectedApartment?.lettered_file_number }</div>
                    </div>
                    <div className="apartment-info__content__row">
                        <div className="apartment-info__content__row__title">Категория МПХИГ:</div>
                        <div className="apartment-info__content__row__content">{ selectedApartment?.apartment_category }</div>
                    </div>
                    <div className="apartment-info__content__row">
                        <div className="apartment-info__content__row__title">№ пенала:</div>
                        <div className="apartment-info__content__row__content">{ selectedApartment?.penal_number }</div>
                    </div>
                    <div className="apartment-info__content__row">
                        <div className="apartment-info__content__row__title">Пультовый №:</div>
                        <div className="apartment-info__content__row__content">{ selectedApartment?.pult_number }</div>
                    </div>
                    <div className="apartment-info__content__row">
                        <div className="apartment-info__content__row__title">СПИ:</div>
                        <div className="apartment-info__content__row__content">{ selectedApartment?.spi }</div>
                    </div>
                    <div className="apartment-info__content__row">
                        <div className="apartment-info__content__row__title">Оборудование:</div>
                        <div className="apartment-info__content__row__content">{ selectedApartment?.apartment_hardware }</div>
                    </div>
                    <div className="apartment-info__content__row">
                        <div className="apartment-info__content__row__title">Монтажная организация:</div>
                        <div className="apartment-info__content__row__content">{ selectedApartment?.mounting_organization }</div>
                    </div>
                    <div className="apartment-info__content__row">
                        <div className="apartment-info__content__row__title">Обслуживающая организация:</div>
                        <div className="apartment-info__content__row__content">{ selectedApartment?.surving_organization }</div>
                    </div>
                    <div className="apartment-info__content__row">
                        <div className="apartment-info__content__row__title">Подбор:</div>
                        <div className="apartment-info__content__row__content">{ selectedApartment?.assortment }</div>
                    </div>
                </div>
            }
        </div>
    )
});

export default ApartmentInfo;
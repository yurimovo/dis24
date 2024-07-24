import React, { useState, useEffect } from "react";
import { saveAs } from 'file-saver';
import { Button } from "react-bootstrap";
import Excel from 'exceljs';

import { fetchAllFacilities } from "../../../service-functions/facilities/fetchAllFacilities";
import { Facility, ExportedFacility } from "../../../types/facilities";

import "./style.scss";

const columns = [
    { header: '№ п/п', key: 'positionNumber', width: 5 },
    { header: 'Наименование организации', key: 'organization', width: 30 },
    { header: 'Наименование объекта', key: 'facility', width: 30 },
    { header: 'Адрес объекта', key: 'address', width: 30 },
    { header: '№ и дата договора', key: 'contruct', width: 20 },
    { header: 'Вид охраны', key: 'security_type', width: 15 },
    { header: 'Канал связи', key: 'spi', width: 20 },
    { header: 'Год приемки ТСО в эксплуатацию', key: 'year', width: 13 },
    { header: 'Обслуживающая организация', key: 'surving_organization', width: 15 },
];

const workSheetName = 'Worksheet-1';

const FacilityDislocation = () => {
    const [facilities, setFacilities] = useState<Array<Facility>>([]);
    const [exportedFacilities, setExportedFacilities] = useState<Array<ExportedFacility>>([]);
    const workbook = new Excel.Workbook();
    const workSheetName = 'Facilities';
    const columns = [
        { header: '№ п/п', width: 5 },
        { header: 'Наименование организации', width: 30 },
        { header: 'Наименование объекта', width: 30 },
        { header: 'Адрес объекта', width: 30 },
        { header: '№ и дата договора', width: 20 },
        { header: 'Вид охраны', width: 20 },
        { header: 'Канал связи', width: 20 },
        { header: 'Год приемки ТСО в эксплуатацию', width: 15 },
        { header: 'Обслуживающая организация', width: 30 },
    ];

    const convertFacilitiesToRightFormat = (facilities: Array<Facility>) => {
        const expFacilities = facilities.map((facility, index) => {
            return {
                positionNumber: String(index + 1),
                organization: facility.organization,
                facility: facility.facility,
                address: facility.address,
                contruct: `№ ${facility.contruct_number} от ${facility.contruct_date}`,
                security_type: facility.security_type,
                spi: facility.spi,
                comm_year: facility.comm_year,
                surving_organization: facility.surving_organization,
            };
        });
        setExportedFacilities(expFacilities);
    };

    useEffect(() => {
        fetchAllFacilities()
            .then((response: Array<Facility>) => {
                setFacilities(response);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        if (facilities.length > 0) {
            convertFacilitiesToRightFormat(facilities);
        }
    }, [facilities]);

    const exportToExcel = async () => {
        try {
            // Создание одного листа в книге
            const worksheet = workbook.addWorksheet(workSheetName);

            // Добавление заголовков
            worksheet.getCell('A1').value = 'Дислокация объектов';
            worksheet.getCell('A2').value = 'Калачинского МОВО - филиала ФГКУ "УВО ВНГ России по Омской области"';
            worksheet.getCell('A3').value = 'по состоянию на ' + new Date().toLocaleDateString();

            worksheet.mergeCells('A1:I1');
            worksheet.mergeCells('A2:I2');
            worksheet.mergeCells('A3:I3');

            // Добавление заголовков таблицы в 4-ю строку
            const headerRow = worksheet.getRow(5);
            headerRow.values = columns.map(col => col.header);
            headerRow.font = { bold: true, size: 10 };

            // Установка ширины и выравнивания колонок
            columns.forEach((column, index) => {
                worksheet.getColumn(index + 1).width = column.width;
                worksheet.getColumn(index + 1).alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
            });

            // Добавление данных, начиная с 6-й строки
            exportedFacilities.forEach((singleData, index) => {
                worksheet.addRow(Object.values(singleData));
            });

            // Установка границ для каждой ячейки
            worksheet.eachRow({ includeEmpty: true }, row => {
                row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
                    if (row.number <= 3 && colNumber <= 9) {
                        // Пропуск границ для объединенной ячейки
                        return;
                    }
                    cell.border = {
                        top: { style: 'thin' },
                        left: { style: 'thin' },
                        bottom: { style: 'thin' },
                        right: { style: 'thin' }
                    };
                });
            });

            // Запись и сохранение файла
            const buf = await workbook.xlsx.writeBuffer();
            saveAs(new Blob([buf]), `dislocation.xlsx`);
        } catch (error) {
            console.error('<<<ОШИБКА>>>', error);
            console.error('Что-то пошло не так', error);
        } finally {
            // Удаление экземпляра листа для создания нового
            workbook.removeWorksheet(workSheetName);
        }
    };
    
    return (
        <Button variant="primary" onClick={exportToExcel} style={{ marginLeft: "10px" }}>
            Экспорт в Excel
        </Button>
    );
};

export default FacilityDislocation;
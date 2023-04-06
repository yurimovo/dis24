const { PrismaClient } = require("@prisma/client");
const express = require("express");

const prisma = new PrismaClient();
const app = express();

app.get('/facility_list', async (req, res) => {
    const facilityList = await prisma.facilities.findMany({
        orderBy: {facility_name: 'asc'}
    })
    res.json(facilityList)
})

app.post('/facility_add', async (req, res) => {
    const { 
        facilityName, facilityAddress, contractNumbers, contractDate,  price,
        priceDate, ownershipId, categoryId, securityTypeId, contractFileNumber,
        letteredFileNumber, spiId, hardwareId, survOrgId, mountOrgId, pultNumberId,
        simId, responsible, assortment, securityHours
    } = req.body
    const facility = await prisma.post.create({
        data: {
            facilityName, facilityAddress, contractNumbers, contractDate,  price,
            priceDate, ownershipId, categoryId, securityTypeId, contractFileNumber,
            letteredFileNumber, spiId, hardwareId, survOrgId, mountOrgId, pultNumberId,
            simId, responsible, assortment, securityHours
        }
    })
    res.json(facility)
})

module.exports = app;
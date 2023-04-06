app.get('/facility_list', async (req, res) => {
    const facilityList = await prisma.facilities.findMany({
        orderBy: {facility_name: 'asc'}
    })
    res.json(facilityList)
})

app.post('/facility_add', async (req, res) => {
    const { 
        organizationId, facilityName, facilityAddress, contractNumbers, contractDate,
        price, priceDate, ownershipId, categoryId, securityTypeId, contractFileNumber,
        letteredFileNumber, spiId, hardwareId, survOrgId, mountOrgId, pultNumberId,
        simId, responsible, assortment, securityHours
    } = req.body
    const facility = await prisma.post.create({
        data: {
            organizationId, facilityName, facilityAddress, contractNumbers, contractDate,
            price, priceDate, ownershipId, categoryId, securityTypeId, contractFileNumber,
            letteredFileNumber, spiId, hardwareId, survOrgId, mountOrgId, pultNumberId,
            simId, responsible, assortment, securityHours
        }
    })
    res.json(facility)
})
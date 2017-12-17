import faker from 'faker/locale/nb_NO'

const users = [...Array(100)].reduce((res, p) => {
    res.push({
        firstName: faker.fake('{{name.firstName}}'),
        lastName: faker.fake('{{name.lastName}}'),
        city: faker.fake('{{address.city}}'),
        country: faker.fake('{{address.country}}'),
        streetAddress: faker.fake('{{address.streetAddress}}'),
        company: faker.fake('{{company.companyName}}'),
        avatar: faker.fake('{{image.avatar}}'),
        phone: faker.fake('{{phone.phoneNumber}}')
    })
    return res
}, [])

export default {
    logged_in: false,
    users
}

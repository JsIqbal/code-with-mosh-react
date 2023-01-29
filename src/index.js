const address = {
    name: "Iqbal",
    city: "Dhaka",
    sector: "Sector-10",

    personal: {
        number: "xxx",
    },
};

// const name = address.name; // repetive object
// const city = address.city;
// const sector = address.sector;

const { name, city, sector } = address; // non repitive object

const { city: ct } = address;

const {
    personal: { number: contact },
} = address;

console.log(contact);

const axios = require('axios');
const express = require('express');
const app = express();
var session = require('express-session');
var cors = require('cors');

//	Use session
app.use(
	session({
		secret: 'Ionic Example',
		cookie: { maxAge: 86400000 },
		resave: true,
		saveUninitialized: true,
	})
);
app.use(cors({ origin: '*' }));

app.listen(process.env.PORT || 4000, function () {
	console.log('server is running...');
});

let API_KEY =
	'YOUR API KEY HERE';

//	REST API for Yelp
let yelpAPI = axios.create({
	baseURL: 'https://api.yelp.com/v3/',
	headers: {
		Authorization: `Bearer ${API_KEY}`,
		'Content-type': 'application/json',
	},
});

app.get('/get-record', function (req, res) {
	const { id } = req.query;

	yelpAPI(`/businesses/${id}`).then(({ data }) => {
		res.send(JSON.stringify(data));
	});
});

app.get('/get-reviews', function (req, res) {
	const { id } = req.query;

	yelpAPI(`/businesses/${id}/reviews`).then(({ data }) => {
		res.send(JSON.stringify(data));
	});
});

app.get('/get-categories', function (req, res) {
	yelpAPI('/categories').then(({ data }) => {
		res.send(JSON.stringify(data));
	});
});

app.get('/get-records', function (req, res) {
	const { latitude, longitude, radius } = req.query;
	const categories = 'restaurant,takeaway';

	const params = {
		latitude,
		longitude,
		radius,
		categories,
	};

	yelpAPI('/businesses/search', { params: params }).then(({ data }) => {
		const allRecords = parseDetails(data);
		res.send(JSON.stringify({ allRecords, center: data.region.center }));
	});
});

const parseDetails = (info) => {
	console.log('Parsing details...');
	const records = [];

	const parsedInfo = info;
	const businesses = parsedInfo.businesses;
	// const total = parsedInfo.total;

	let distance = 0;
	let distanceKm = 0;

	for (let i = 0; i < businesses.length; i++) {
		const id = businesses[i].id;
		const url = businesses[i].url;
		const imageURL = businesses[i].image_url;
		const name = businesses[i].name;
    const alias = businesses[i].alias;
		const phone = businesses[i].display_phone;
		const price = businesses[i].price;
		const rating = businesses[i].rating;

		const isClosed = businesses[i].is_closed;
		const isOpen = isClosed === true ? false : true;

		const coordinates = businesses[i].coordinates;
		const latitude = coordinates.latitude;
		const longitude = coordinates.longitude;

		let displayAddress = '';

		if (businesses[i].location) {
			const addressDetails = businesses[i].location;

			if (addressDetails.display_address) {
				const displayAddressArr = addressDetails.display_address;

				if (Array.isArray(displayAddressArr)) {
					for (let j = 0; j < displayAddressArr.length; j++) {
						const displayAddressPart = displayAddressArr[j];
						displayAddress = displayAddress + displayAddressPart;

						if (j !== displayAddressArr.length - 1) {
							displayAddress = displayAddress + ', ';
						}
					}
				} else {
					displayAddress = displayAddressArr;
				}
			}
		}

		if (businesses[i].distance) {
			distance = businesses[i].distance;
      distanceKm = distance.toFixed(2);
		}

		if (isClosed !== true) {
			records.push({
				id,
				alias,
				url,
				imageURL,
				name,
				phone,
				price,
				rating,
				latitude,
				longitude,
				displayAddress,
				isOpen,
				distance: distanceKm,
			});
		}
	}

	return records;
};

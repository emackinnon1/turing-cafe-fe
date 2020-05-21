export const getReservations = async (url) => {
	try {
		const rawData = await fetch(url);
		const data = await rawData.json();
		return data;
	} catch (e) {
		console.log(e.message);
	}
};

export const postReservation = async (url, reservation) => {
	try {
		const post = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(reservation),
		});
	} catch (e) {
		console.log(e.message);
	}
};

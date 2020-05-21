export const getReservations = async (endpoint) => {
	const rawData = await fetch(endpoint);
	const data = await rawData.json();
	return data;
};

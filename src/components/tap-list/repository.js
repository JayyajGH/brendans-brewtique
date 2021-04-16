export default async function getTapListDetailsForVenue(axios) {
  if (!axios) {
      throw Error('Invalid parameter');
  }

  // Comment out the BB taplist as it is currently empty
  //return axios.get('https://cwhgp6hr8i.execute-api.eu-west-2.amazonaws.com/prod?venueID=436469');

  // Return details for Electric Bear for now instead as an example
  return axios.get('https://cwhgp6hr8i.execute-api.eu-west-2.amazonaws.com/prod?venueID=670357');
}

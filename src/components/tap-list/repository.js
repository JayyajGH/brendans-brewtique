export default async function getTapListDetailsForVenue(axios) {
  if (!axios) {
      throw Error('Invalid parameter');
  }

  return axios.get('https://cwhgp6hr8i.execute-api.eu-west-2.amazonaws.com/prod?venueID=436469');
}

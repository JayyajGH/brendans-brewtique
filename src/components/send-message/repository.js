export default async function fireContactRequestWithMessage($axios, message) {
  return $axios.$post('https://501n7ggn65.execute-api.eu-west-1.amazonaws.com/prod', message);
}

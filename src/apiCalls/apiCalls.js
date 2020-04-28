export const apiFetchData = async () => {
  let data = await fetch('https://code-challenge.spectrumtoolbox.com/api/restaurants', {
    headers: {
      Authorization: "Api-Key q3MNxtfep8Gt",
    },
  })
    .then(response => response.json());
  return data;
}

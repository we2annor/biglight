import axios from "axios";

export const getApi = (api, loaded, results, error) => {
  return axios
    .get(api)
    .then((data) => {
      loaded(true);
      results(data.data);
    })
    .catch((err) => {
      loaded(true);
      error(err);
      results([]);
    });
};

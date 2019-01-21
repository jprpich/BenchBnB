import * as BenchApiUtil from '../util/bench_api_util';
export const RECEIVE_BENCHES = "RECEIVE_BENCHES";

export const fetchBenches = () => {
  return dispatch => {
    return BenchApiUtil.fetchBenches().then(response =>{
      return dispatch({ type: RECEIVE_BENCHES, benches: response});
    });
  };
};



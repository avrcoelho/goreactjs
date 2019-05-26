export const Types = {
  GET_REQUEST: "repositories/GET_REQUEST",
  SUCCESS_REQUEST: "repositories/SUCCESS_REQUEST",
  FAILURE_REQUEST: "repositories/FAILURE_REQUEST"
};

const INITIAL_STATE = {
  data: []
};

export default function repositories(state = INITIAL_STATE, action) {
  switch (Types.action) {
    default:
      return state;
  }
}

export const Creators = {
  getRequest: () => ({
    type: Types.GET_REQUEST
  }),
  getSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data }
  }),
  getFailure: () => ({
    type: Types.GET_FAILURE
  })
};

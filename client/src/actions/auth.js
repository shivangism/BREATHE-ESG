import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, router,setErrorMsg) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });
    setErrorMsg("");
    router('/');
  } catch (error) {
    setErrorMsg(error.response.data.message);
    console.log(error.response);
  }
};

export const signup = (formData, router,setErrMsg) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });
    setErrMsg("");
    router('/');
  } catch (error) {
    setErrMsg(error.response.data.message);
    console.log(error);
  }
};
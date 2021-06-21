import { call, put,takeLatest } from "@redux-saga/core/effects";
import { requestGetUser } from "../request/user";
import { getUser, setUser } from "../../user/user.actions";
import { GET_USER } from "../../user/user.types";


 function* handleGetUser() {
   console.log('bsda');
  try {
    const response = yield call(requestGetUser);
    const { data } = response;
    yield put(setUser(data));
  } catch (error) {
    console.log(error);
  }
}

export function* userSaga() {
  yield takeLatest(GET_USER,handleGetUser);
}

import { takeLatest,all } from "@redux-saga/core/effects";
import { GET_USER } from "../user/user.types";
import { userSaga } from "./handlers/user";

export function* rootSaga() {
  yield all([userSaga()]);
}

import { all } from 'redux-saga/effects'

import saga from './example/sagas'

export default function* rootSaga() {
    return yield all([saga])
}

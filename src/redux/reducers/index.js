import {PERSONALFORM, PROFESSIONALFORM} from '../actions/index'

const INITIAL_STATE = {
  personalData: {},
  professionalData: {},
}

export const formReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case PERSONALFORM:
          return {
            ...state,
            personalData: {...action.payload},
          }
          case PROFESSIONALFORM:
            return {
              ...state,
              professionalData: {...action.payload},
            }
            default: 
            return state;
    }
}
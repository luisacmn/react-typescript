import { ActionTypes } from './actions'

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export function cyclesReducer(state: CyclesState, action: any) {
  if (action.type === ActionTypes.ADD_NEW_CYCLE) {
    return {
      ...state,
      cycles: [...state.cycles, action.payload.newCycle],
      activeCycleId: action.payload.newCycle.id,
    }
  }

  if (action.type === ActionTypes.INTERRUPT_CURRENT_CYCLE) {
    return {
      ...state,
      cycles: state.cycles.map((cycle) => {
        if (cycle.id === state.activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
      activeCycleId: null,
    }
  }

  if (action.type === ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED) {
    return {
      ...state,
      cycles: state.cycles.map((cycle) => {
        if (cycle.id === state.activeCycleId) {
          return { ...cycle, finishedDate: new Date() }
        } else {
          return cycle
        }
      }),
      activeCycleId: null,
    }
  }

  return state
}

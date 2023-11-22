import { shuffleArray } from "../../utils/utils";
import { Action, Item, State } from "./types";

/* eslint-disable @typescript-eslint/no-explicit-any */
function trySwap(newItems: Item[], position: number, t: number): void {
  if (newItems[t] === null) {
    const temp = newItems[position];
    newItems[position] = newItems[t];
    newItems[t] = temp;
  }
}

function arraysEqual(a: Item[], b: Item[]): boolean {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

const CORRECT: Item[] = ["1", "2", "3", "4", "5", "6", "7", "8", null];

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "move": {
      const position = action.payload;
      const newItems = [...state.items];
      const col = position % 3;

      //If position is less than 6, it tries to swap with the item below.
      if (position < 6) {
        trySwap(newItems, position, position + 3);
      }
      //If position is greater than 2, it tries to swap with the item above.
      if (position > 2) {
        trySwap(newItems, position, position - 3);
      }
      //If col is less than 2, it tries to swap with the item to the right
      if (col < 2) {
        trySwap(newItems, position, position + 1);
      }
      //If col is greater than 0, it tries to swap with the item to the left.
      if (col > 0) {
        trySwap(newItems, position, position - 1);
      }

      return {
        ...state,
        items: newItems,
        complete: arraysEqual(newItems, CORRECT),
      };
    }
    case "shuffle": {
      const shuffledItems = shuffleArray([...state.items]);
      return {
        ...state,
        items: shuffledItems,
        complete: false,
      };
    }
    case "reset": {
      return {
        ...state,
        items: [...CORRECT],
        complete: true,
      };
    }
    default: {
      throw new Error("Unhandled action type: " + JSON.stringify(action));
    }
  }
}

export default reducer;

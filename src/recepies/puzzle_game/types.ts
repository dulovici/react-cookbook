export type Item = string | null;

export type State = {
  items: Item[];
  complete?: boolean;
};

export type MoveAction = {
  type: "move";
  payload: number;
};

export type ShuffleAction = {
  type: "shuffle";
};

export type ResetAction = {
  type: "reset";
};

export type Action = MoveAction | ShuffleAction | ResetAction;

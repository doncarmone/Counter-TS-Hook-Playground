export type CounterAction =
  | { type: 'increseBy'; payload: { value: number } }
  | { type: 'reset' };

// export const doReset = (): CounterAction => {
//     return {
//         type: 'reset'
//     }
// }

export const doReset = (): CounterAction => ({
  type: 'reset',
});

export const doIncreaseBy = (value: number): CounterAction => ({
  type: 'increseBy',
  payload: { value }
});

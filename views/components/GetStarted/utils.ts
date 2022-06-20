import { IResponse, Start, ThunkArgs } from 'types/types';

export const sendStartDetails = (message: Start) => async (
  dispatch: Function, _: void, { callEndpoint }: ThunkArgs,
): Promise<IResponse> => {
  const response = await dispatch(callEndpoint({
    api: 'start/',
    body: JSON.stringify(message),
    method: 'POST',
  }));
  return response;
};

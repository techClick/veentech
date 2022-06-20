import { IResponse, Message, ThunkArgs } from 'types/types';

export const sendContactMessage = (message: Message) => async (
  dispatch: Function, _: void, { callEndpoint }: ThunkArgs,
): Promise<IResponse> => {
  const response = await dispatch(callEndpoint({
    api: 'contact/',
    body: JSON.stringify(message),
    method: 'POST',
  }));
  return response;
};

import { CallArgs, IResponse } from '../types/types';

export const callEndpoint = ({
  api, body, method,
}: CallArgs) => async (): Promise<IResponse> => {
  const options: any = {
    mode: 'cors',
    method,
    headers: {
      // 'Content-Type': 'application/json',
    },
    body,
  };
  try {
    const url = process.env.API_URL;
    const response = await fetch(
      `${url}${api}`,
      options,
    );
    if (!response) {
      return { status: 'error', data: 'Internet connection is not detected' } as IResponse;
    }
    // console.log(response);
    const dataFromEndPoint = await response.json();
    return dataFromEndPoint as IResponse;
  } catch (e: any) {
    return { status: 'error', data: e.message } as IResponse;
  }
};

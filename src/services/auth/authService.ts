import { HttpClient } from '../../infra/http/HttpClient';
import { tokenService } from './tokenService';

export const authService = {
  async login({ username, password }: { username: string; password: string }) {
    return HttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`, {
      method: 'POST',
      body: { username, password },
    })
      .then(async (response) => {
        if (!response.ok) throw new Error('Usuário ou senha inválidos.');

        const { body } = response;

        tokenService.save(body.data.access_token);
        return body;
      })
      .then(async ({ data }) => {
        const { refreshToken } = data;
        // console.log('refreshToken', refreshToken);

        const response = await HttpClient('/api/refresh', {
          method: 'POST',
          body: {
            refreshToken,
          },
        });

        console.log('response', response);
      });
  },
  async getSession(context = null) {
    const token = tokenService.get(context);

    return HttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/session`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      refresh: true,
    }).then(async (response) => {
      if (!response.ok) throw new Error('Usuário não autorizado.');

      return response.body.data;
    });
  },
};

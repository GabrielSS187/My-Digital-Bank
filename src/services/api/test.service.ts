import { auth } from '@/auth';

export class TestServiceApi {
  private BASE_URL = 'http://localhost:3333';

  async getTest() {
    try {
      const session = await auth();

      const data = await fetch(`${this.BASE_URL}/teste`, {
        method: 'GET',
        cache: 'no-store',
        headers: {
          Authorization: 'AAA'
        }
      });
    } catch (err) {
      console.log(err);
    }
  }
}

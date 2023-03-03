import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
vus: 1000,
iterations: 3500,
duration: '2s',
};
export default function () {
http.get('https://reqres.in/api/users');
sleep(1);
}

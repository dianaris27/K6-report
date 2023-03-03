import http from 'k6/http';
import { check } from "k6";
export default function () {
const res = http.put('https://reqres.in/api/users/1');
const payload = JSON.stringify({
    id: '1',
    email: 'george.bluth@reqres.in',
    first_name: 'George22',
    last_name: 'Bluth',
    completed: 'true'
});
const params = {
headers: {
'Content-Type': 'application/json',
},
};
const checkOutput = check(
res,
{
'response code was 200': (res) => res.status == 200,
},
);
}

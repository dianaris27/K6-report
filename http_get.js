import http from 'k6/http';
import { check } from "k6";
export default function () {
const res = http.get('https://reqres.in/api/users');
const checkOutput = check(
res,
{
'response code was 200': (res) => res.status == 200,
},
);
}
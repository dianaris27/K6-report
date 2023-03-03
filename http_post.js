import http from 'k6/http';
import { check } from "k6";
export default function () {
const res = http.post('https://reqres.in/api/users');
const payload = JSON.stringify({
id: '13',
email: 'clara.lee@reqres.in',
first_name: 'Clara',
last_name: 'Lee',
completed: 'false'

});
const params = {
headers: {
'Content-Type': 'application/json',
},
};
const checkOutput = check(
res,
{
'response code was 201': (res) => res.status == 201,
},
);
}
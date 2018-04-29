import test from 'ava';

const { Client } = require('../src');

let client;
test.before('Setup client', t => {
  client = new Client('local');
});

test.serial('foo', async t => {
  t.is(await client.loginAdmin('donttell00'), 204);
});

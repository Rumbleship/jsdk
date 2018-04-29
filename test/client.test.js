import test from 'ava';

const { Client } = require('../src');

let client;
const config = {
  environment: 'local',
  secret: 'donttell00'
};

test.before('Setup client', t => {
  client = new Client(config.environment);
});

test('loginAdmin returns 204 and saves jwt to default headers ', async t => {
  t.plan(3);
  const resp = await client.loginAdmin(config.secret);
  t.is(resp.status, 204);
  t.falsy(resp.body);
  t.truthy(client.client.defaults.headers.Authorization);
});

test.skip('get purchase order', async t => {
  const resp = await client.getPurchaseOrder();
});

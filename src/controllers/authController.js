

function simulateAxios(value) {
  return new Promise(resolve =>
    setTimeout(() => resolve({...value, status: 'processed'}), 1700)
  );
}

export async function createUser(req, res) {
  console.log('in: ', req.body);
  const delay = simulateAxios(req.body);
  delay.then((resolve) => {
    console.log(resolve);
    res.send(resolve);
    return;
  });
}

export async function loginUser(req, res) {
  console.log('in: ', req.body);
  const delay = simulateAxios(req.body);
  delay.then((resolve) => {
    console.log(resolve);
    res.send(resolve);
    return;
  });
}

export function findUsers(req, res) {
  res.sendStatus(501);
  return;
}
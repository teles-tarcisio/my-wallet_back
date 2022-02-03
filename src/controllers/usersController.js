function simulateAxios(value) {
  return new Promise(resolve =>
    setTimeout(() => resolve({...value, status: 'processed'}), 1500)
  );
}

export async function createUser(req, res) {
  const newUser = req.body;
  const response = await simulateAxios(newUser);
  return res.status(501).send(response);
  
}
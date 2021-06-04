const SESSION_ID = IG_SESSION_ID;

InstaClient.authBySessionId(SESSION_ID)
  .then(account => console.log("logged in"))
  .catch(err => console.error(err));

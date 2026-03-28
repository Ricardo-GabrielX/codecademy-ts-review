function proclaimm(status?: string) {
  console.log(`I'm ${status || 'not ready...'}`);
}

proclaimm();
proclaimm('ready?');
proclaimm('ready!');
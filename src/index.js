import { server } from './server';
import './database';

// Init server 
server.start({ port: 3100 }, ({ port }) => {
  console.log(`Server on port: ${port}`);
});
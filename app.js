var express = require('express');
const port = 3000;
const SAFE_ROOT = path.join(__dirname, 'public');
var app = express();
const routes = require('./routes');

app.use(express.json());
app.use('/api', routes);
app.use(express.static('public'))

// set up rate limiter: maximum of five requests per minute
var RateLimit = require('express-rate-limit');
var limiter = RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // max 100 requests per windowMs
});

// apply rate limiter to all requests
app.use(limiter);

app.get('/:path', function(req, res) {
let resolvedPath = path.resolve(SAFE_ROOT, userPath);
  if (resolvedPath.startsWith(SAFE_ROOT)); 
   res.sendFile(path);
});

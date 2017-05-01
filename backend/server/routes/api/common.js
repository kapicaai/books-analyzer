
function CRUD(db) {
  return {
    getAll(req, res) {
      if (req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        db.getAll()
            .then(books =>
                res.end(JSON.stringify(books)));
      } else {
        res.statusCode = 400;
        res.end();
      }
    },

    getAllSimplified(req, res) {
      if (req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        db.getAllSimplified()
            .then(books =>
                res.end(JSON.stringify(books)));
      } else {
        res.statusCode = 400;
        res.end();
      }
    },

    getAllSimplified(req, res) {
      if (req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        db.getAllSimplified()
            .then(books =>
                res.end(JSON.stringify(books)));
      } else {
        res.statusCode = 400;
        res.end();
      }
    },

    getById(req, res) {
      if (req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        db.getById(req.params)
            .then(books =>
                res.end(JSON.stringify(books)));
      } else {
        res.statusCode = 400;
        res.end();
      }
    },

    insert(req, res) {
      if (!req.body) return res.statusCode(400);
      if (req.method === 'POST') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        db.insert(req.body);
        res.end('OK');
      } else {
        res.statusCode = 400;
        res.end();
      }
    },

    update(req, res) {
      if (!req.body) return res.statusCode(400);
      if (req.method === 'PUT') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        db.update(req.body);
        res.end('OK');
      } else {
        res.statusCode = 400;
        res.end();
      }
    },

    deleteOne(req, res) {
      if (req.method === 'DELETE') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        db.deleteOne(req.params);
        res.end('OK');
      } else {
        res.statusCode = 400;
        res.end();
      }
    },
  };
}


module.exports = CRUD;

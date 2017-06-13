// /**
//  * Responds to an HTTP request using data from the request body parsed according
//  * to the "content-type" header.
//  *
//  * @param {Object} req Cloud Function request context.
//  * @param {Object} res Cloud Function response context.
//  */
// exports.getModel = function getModel(req, res) {
//     let name;
//
//     switch (req.get('content-type')) {
//       // '{"name":"John"}'
//       case 'application/json':
//         name = req.body.name;
//         break;
//
//         // 'John', stored in a Buffer
//       case 'application/octet-stream':
//         name = req.body.toString(); // Convert buffer to a string
//         break;
//
//         // 'John'
//       case 'text/plain':
//         name = req.body;
//         break;
//
//         // 'name=John'
//       case 'application/x-www-form-urlencoded':
//         name = req.body.name;
//         break;
//     }
//
//     res.status(200).send(`Hello ${name || 'World'}!`);
exports.getModel = (req, res) => res.send("Hello, World!");

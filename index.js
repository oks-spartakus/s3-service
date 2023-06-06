const Hapi = require("hapi");
const fs = require("fs");

// Create a new Hapi server
const server = Hapi.server({
  port: 3000,
  host: "localhost",
});

// Define the POST route for file upload
server.route({
  method: "POST",
  path: "/upload",
  options: {
    payload: {
      output: "stream",
      parse: true,
      allow: "multipart/form-data",
    },
  },
  handler: async (request, h) => {
    // const { file } = request.payload; // Get the uploaded file from the request payload

    // // Validate if a file was uploaded
    // if (!file) {
    //   throw new Error("No file uploaded");
    // }

    // const filePath = `path/to/save/${file.hapi.filename}`; // Define the file path to save the uploaded file

    // // Save the file to the specified path
    // const fileStream = fs.createWriteStream(filePath);
    // file.pipe(fileStream);

    // // Return a response indicating the successful file upload
    return "File uploaded successfully";
  },
});

server.route({
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return 'Hello, world!';
  }
});


// Start the server
async function start() {
  try {
    await server.start();
    console.log("Server running on", server.info.uri);
  } catch (err) {
    console.error("Error starting server:", err);
  }
}

start();

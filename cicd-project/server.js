const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(`
    <html>
      <head>
        <title>CI/CD Node App</title>
        <style>
          body {
            margin: 0;
            display: flex;
            height: 100vh;
            justify-content: center;
            align-items: center;
            background: #000; /* Black background */
            font-family: "Poppins", sans-serif;
            color: white;
          }
          .box {
            text-align: center;
            padding: 40px 60px;
            background: rgba(255, 255, 255, 0.08);
            border: 2px solid #ff4da6; /* Soft pink border */
            border-radius: 20px;
            backdrop-filter: blur(10px);
            box-shadow: 0 0 25px rgba(255, 77, 166, 0.6); /* Pink glow */
          }
          h1 {
            font-size: 45px;
            margin-bottom: 12px;
            background: linear-gradient(90deg, #ff4da6, #ff99cc);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent; /* Pink gradient text */
          }
          p {
            font-size: 22px;
            color: #ffffff;
            opacity: 0.85;
          }

          /* Optional Soft Glow Animation */
          @keyframes glow {
            0% { box-shadow: 0 0 25px rgba(255, 77, 166, 0.5); }
            50% { box-shadow: 0 0 45px rgba(255, 153, 204, 0.9); }
            100% { box-shadow: 0 0 25px rgba(255, 77, 166, 0.5); }
          }

          .box {
            animation: glow 3s infinite alternate;
          }
        </style>
      </head>
      
      <body>
        <div class="box">
          <h1> Hello from CI/CD Node App!Version 2 </h1>
          <p>Welcome to your Node.js server </p>
        </div>
      </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
           

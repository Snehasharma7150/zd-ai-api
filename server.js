const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/**
 * Health Check
 */
app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Zendesk AI API Running"
  });
});

/**
 * Create Ticket Endpoint
 */
app.post("/create-ticket", (req, res) => {

  const { email, customerId, issueType } = req.body;

  const ticketId =
    "AST-" + Math.floor(1000 + Math.random() * 9000);

  res.json({
    success: true,
    ticketId: ticketId,
    email: email,
    customerId: customerId,
    issueType: issueType,
    priority: "High",
    status: "Created",
    message: "Ticket created successfully"
  });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
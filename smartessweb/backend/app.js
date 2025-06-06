const express = require("express");
const cors = require("cors");
const logger = require("./backend-logs/logger");

const app = express();
app.use(cors());
app.use(express.json());

// initial server starting log
logger.info("Server is initializing...");

//Add routes here
const authRoutes = require("./routes/authRoutes");
const startProjectRoutes = require("./routes/startProjectRoutes");
const projectRoutes = require("./routes/projectRoutes");
const hubRoutes = require("./routes/hubRoutes");
const widgetRoutes = require("./routes/widgetRoutes");
const manageAccountsRoutes = require("./routes/manageAccountsRoutes");
const unitsRoutes = require("./routes/unitsRoutes");
const individualUnitRoutes = require("./routes/individualUnitRoutes");
const ticketsRoutes = require("./routes/ticketsRoutes");
const announcementsRoutes = require("./routes/announcementRoutes");
const consumptionRoutes = require("./routes/consumptionRoutes");
const surveillanceRoutes = require("./routes/surveillanceRoutes");
const registrationRoutes = require("./routes/registrationRoutes");
const resetPasswordRoutes = require("./routes/resetPasswordRoutes");
const alertRoutes = require("./routes/alertsRoutes");

//Add path here
app.use("/api/auth", authRoutes);
app.use("/api/start-project", startProjectRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/hubs", hubRoutes);
app.use("/api/widgets", widgetRoutes);
app.use("/api/manage-accounts", manageAccountsRoutes);
app.use("/api/units", unitsRoutes);
app.use("/api/individual-unit", individualUnitRoutes);
app.use("/api/tickets", ticketsRoutes);
app.use("/api/announcements", announcementsRoutes);
app.use("/api/consumptions", consumptionRoutes);
app.use("/api/surveillance", surveillanceRoutes);
app.use("/api/registration", registrationRoutes);
app.use("/api/reset-password", resetPasswordRoutes);
app.use("/api/alerts", alertRoutes);

module.exports = app;

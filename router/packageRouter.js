const express = require("express");
const router = express.Router();

const getPackageMiddleware = require("../handlers/package/getPackageMiddleware");
const getPackages = require("../handlers/package/getPackages");
const getOnePackage = require("../handlers/package/getOnePackage");
const updatePackageStatus = require("../handlers/package/updatePackageStatus");
const getFilteredPackagesMiddleware = require("../handlers/package/getFilteredPackagesMiddleware");
const getFilteredPackages = require("../handlers/package/getFilterPackages");
const authOwner = require("../handlers/owner/authOwner");
const authAgent = require("../handlers/agent/authAgent");

const addPackage = require("../handlers/package/addPackage");
const updatePackage = require("../handlers/package/updatePackage");
const deletePackage = require("../handlers/package/deletePackage");

router.get("/package/:id", getPackageMiddleware, getPackages);
router.get("/package/:id/:packageId", getPackageMiddleware, getOnePackage);

router.get("/package", getFilteredPackagesMiddleware, getFilteredPackages);

router.post("/package/add/:businessId", addPackage);
router.put("/package/:businessId/:packageId", authOwner, updatePackage);
router.put(
  "/package/status/:businessId/:packageId",
  authAgent,
  updatePackageStatus
);

router.delete("/package/:businessId/:packageId", authOwner, deletePackage);

module.exports = router;

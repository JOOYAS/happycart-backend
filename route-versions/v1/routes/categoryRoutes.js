const express = require("express");
const { subCategoryRoutes } = require("./subCategoryRoutes");
const {
    newCategory,
    viewCategory,
    updateCategory,
    removeCategory,
    listCategories,
} = require("../../../controllers/categoryControllers");
const upload = require("../../../middlewares/multer");
const adminAuth = require("../../../middlewares/adminAuth");

const router = express.Router();

//routes for subcategories
router.use("/sub", subCategoryRoutes);

router.post("/", adminAuth, upload.single("image"), newCategory);
router.get("/", listCategories);
router.get("/:categoryId", viewCategory);
router.patch("/:categoryId", adminAuth, upload.single("image"), updateCategory);
router.delete("/:categoryId", adminAuth, removeCategory);

module.exports = { categoryRoutes: router };

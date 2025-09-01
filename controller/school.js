import db from "../config/db.js"; 

// CREATE SCHOOL
export const createSchool = async (req, res) => {
  try {
    console.log("📩 Body:", req.body);
    console.log("📸 File:", req.file);

    const { name, address, city, state, contact, email_id } = req.body;
    const image = req.file ? req.file.filename : null;

    if (!name || !address || !city || !state || !contact || !email_id) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const sql = `
      INSERT INTO schools (name, address, city, state, contact, image, email_id) 
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    const [result] = await db.query(sql, [
      name, address, city, state, contact, image, email_id
    ]);

    res.status(201).json({ message: "School created successfully", id: result.insertId });
  } catch (error) {
    console.error("❌ Error in createSchool:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};


// GET SCHOOLS
export const getSchools = async (req, res) => {
  try 
  {
    const [rows] = await db.query(
      "SELECT * FROM schools"
    );

    res.json(rows);
  } 
  catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

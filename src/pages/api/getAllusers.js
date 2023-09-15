import connection from "../../db/db";

//GET ALL EMPLOYEES
export default async function getAllusers(req, res) {
  try {
    const [rows] = await connection.query("SELECT * FROM employees");
    res.status(200).json(rows);
  } catch (err) {
    console.error("MySQL error:", err);
    res.status(500).send("Database error");
    return;
  }
}

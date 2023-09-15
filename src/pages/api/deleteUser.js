import connection from "../../db/db";

export default async function deleteUser(req, res) {
  var id = req.body;
  try {
    console.log(id);

    const deleteUser = await connection.query(
      "DELETE FROM employees WHERE id = ?",
      [id.id]
    );
    res.status(200).json(deleteUser);
  } catch (err) {
    console.error("MySQL error:", err);
    res.status(500).send("Database error");
    return;
  }
}

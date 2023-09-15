import { calculateAge } from "@/functions/functions";
import connection from "../../db/db";

export default async function updateUser(req, res) {
  var { name, surname, birthdate, id } = req.body;
  var age = calculateAge(birthdate);
  try {
    const SQL =
      "UPDATE employees SET name = ?, surname = ?,  birthdate= ?, age = ? WHERE id = ?";
    const [result] = await connection.query(SQL, [
      name,
      surname,
      birthdate,
      age,
      id,
    ]);
    res.status(200).json({ message: "User updated", result });
  } catch (err) {
    console.error("MySQL error:", err);
    res.status(500).send("Database error");
    return;
  }
}

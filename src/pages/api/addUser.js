import { calculateAge } from "@/functions/functions";
import connection from "../../db/db";

export default async function addUser(req, res) {
  var { name, surname, birthdate } = req.body;
  var age = calculateAge(birthdate);
  try {
    const newUser = await connection.query(
      "INSERT INTO employees (name, surname, birthdate, age) VALUES (?, ?, ?, ? )",
      [name, surname, birthdate, age]
    );
    res.status(200).json(newUser);
  } catch (err) {
    console.error("MySQL error:", err);
    res.status(500).send("Database error");
    return;
  }
}

import connection from "../src/database.js";

const userRepository = {
    fetchUserByEmail: (email) => {
        return connection.query(`SELECT * FROM "users" WHERE "email"=$1`, [
            email,
        ]);
    },

    insertUser: (name, email, hashedPassword) => {
        return connection.query(
            `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`,
            [name, email, hashedPassword]
        );
    },
};

export default userRepository;

import connection from "../src/database.js";

const financialRepository = {
    insertFinancialEvent: (id, value, type) => {
        return connection.query(
            `INSERT INTO "financialEvents" ("userId", "value", "type") VALUES ($1, $2, $3)`,
            [id, value, type]
        );
    },

    fetchFinancialEvents: (id) => {
        return connection.query(
            `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
            [id]
        );
    },
};

export default financialRepository;

import financialRepository from "../repositories/financialRepository.js";

const financialServices = {
    insertFinancialEvent: async (user, value, type) => {
        if (!value || !type) {
            throw {
                type: "unprocessable",
                message: "value and type are required!",
            };
            // return res.sendStatus(422);
        }

        const financialTypes = ["INCOME", "OUTCOME"];
        if (!financialTypes.includes(type)) {
            return res.sendStatus(422);
        }

        if (value < 0) {
            return res.sendStatus(422);
        }

        await financialRepository.insertFinancialEvent(user.id, value, type);
    },

    fetchFinancialEvents: async (id) => {
        const events = await financialRepository.fetchFinancialEvents(id);

        if (events.rows) {
            throw {
                type: "notFound",
                message: "⚠ No events found!",
            };
        }

        return events.rows;
    },

    fetchFinancialBalance: (user) => {
        const events = this.fetchFinancialEvents(user.id);

        const sum = events.reduce(
            (total, event) =>
                event.type === "INCOME"
                    ? total + event.value
                    : total - event.value,
            0
        );

        return sum;
    },
};

export default financialServices;

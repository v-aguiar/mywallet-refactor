import financialServices from "../services/financialServices.js";

export async function insertFinancialEvent(req, res) {
    const { user } = res.locals;
    const { value, type } = req.body;

    financialServices.insertFinancialEvent(user, value, type);

    res.sendStatus(201);
}

export async function fetchFinancialEvents(req, res) {
    const { user } = res.locals;

    const events = financialServices.fetchFinancialEvents(user.id);

    res.send(events);
}

export async function fetchFinancialBalance(req, res) {
    const { user } = res.locals;

    const sum = financialServices.fetchFinancialBalance(user);

    res.send({ sum });
}

export default function errorHandler(error, req, res, next) {
    if (error.type === "unprocessable") {
        res.status(422).send(error.message);
    }

    res.status(500).send("something went wrong");
}

// Não consegui terminar a tempo T-T

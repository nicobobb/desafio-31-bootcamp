import express from "express";

function getRandomInt() {
    return Math.floor(Math.random() * 2);
}

const server = express();
try {
    const bool = !!getRandomInt();
    console.log(bool);
    if (bool) throw new Error("");

    server.use(express.static("public", { extensions: ["html"] }));

    server.use("*", (req, res) => {
        res.status(404).send("Error 404");
    });
} catch (error) {
    server.use("*", (req, res) => {
        res.status(500).send("Error 500");
    });
}

server.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));

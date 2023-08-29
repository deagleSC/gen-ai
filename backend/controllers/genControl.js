export const genControl = async (req, res) => {
    try {
        const data = req.body
        res.status(200).json("Hello from Gen AI")
    } catch (error) {
        console.log(error)
        res.status(401).send("Internal server error")
    }
}
const handleError = (error, req, res) => {
    res.status(error.code || 500).send({name: error.name || 'Internal server error', message:error.message})
}
export default handleError
const handler = (req, res) => {
   res.statusCode = 200
   res.setHeader('Content-Type', 'application/json')
   res.end(JSON.stringify({ message: 'OK' }))
}

export default handler
function status(request, response) {
  response.status(200).json({ chave: "Ta batendo na Api ?" });
}

export default status;

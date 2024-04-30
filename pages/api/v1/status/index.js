function status(request, response) {
  response.status(200).json({ chave: "Esse curso é acima da média" });
}

export default status;

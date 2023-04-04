import requests
import json
import csv
from collections import Counter

response = requests.get('http://localhost:3000/artigos')
artigos = json.loads(response.text)

if (len(artigos) > 0):
  counterCategorias = Counter(artigo.get('categoria') for artigo in artigos)
  counterAutores = Counter(artigo.get('autor') for artigo in artigos)

  counterPalavras = { artigo.get('titulo') : len(artigo.get('conteudo').split()) for artigo in artigos }
  totalPalavras = sum( counter for counter in counterPalavras.values())
  mediaPalavras = totalPalavras / (len(counterPalavras))

  with open('./artigos.csv', 'w') as f:
    writer = csv.writer(f)
    writer.writerow(artigos[0].keys())
    for artigo in artigos:
      writer.writerow(artigo.values())

  with open('./categorias.csv', 'w') as f:
    writer = csv.writer(f)
    writer.writerow(["Categoria","Quantidade de artigos"])
    for categoria in counterCategorias.items():
      writer.writerow(categoria)

  with open('./autores.csv', 'w') as f:
    writer = csv.writer(f)
    writer.writerow(["Autor","Quantidade de artigos"])
    for autor in counterAutores.items():
      writer.writerow(autor)

  with open('./media-palavras.csv', 'w') as f:
    writer = csv.writer(f)
    writer.writerow(["Título", "Quantidade de palavras"])
    for artigo in counterPalavras.items():
      writer.writerow(artigo)
    writer.writerow(["MÉDIA DE PALAVRAS POR ARTIGO", mediaPalavras])
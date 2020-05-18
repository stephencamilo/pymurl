<p  align="center"><img src="https://66.media.tumblr.com/937df53aafcda07b51ef1903baddc178/tumblr_p3i11hSOrF1vzfdyzo1_1280.jpg" width="500"></p>

# PYMURL

### Encurtador de URL feito com NodeJS <img src="https://avatars3.githubusercontent.com/u/619543?s=460&u=6f261db6b295f29d08cfa9bbade15e9c94e9feb2&v=4" width="20">

## Requisitos:
- [Docker Compose](https://docs.docker.com/compose/install/) -> https://docs.docker.com/compose/install/
- Instale o [Git](https://git-scm.com/downloads) -> https://git-scm.com/downloads

## Configurando o ambiente: 
- Após a instalação do [Docker Compose](https://docs.docker.com/compose/install/) e do [Git](https://git-scm.com/downloads)
- Crie uma pasta no seu diretório Documentos chamada **projetos**
- Dentro da pasta projetos execute o comando `git clone https://github.com/stephencamilo/pymurl.git`
- Entre na pasta pymurl
- Dentro da pasta pymurl execute o comando `sudo docker-compose up --build`, aguarde o docker montar o ambiente de desenvolvomento
- Apos o setup, envie um request POST usando o método de sua preferência para o endpoint: http://localhost:8081/encurtador usando o parâmentro 'url' para enviar a URL a ser encurtada;
- Se o Request for bem sucedido você deve ter uma resposta semelhante a:
```
{
  newUrl: "http://localhost:8081/abc123ab";
}
```
  

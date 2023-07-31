# Project Nodejs - Hexagonal Architecture

Api Rest with Express using Hexagonal Architecture.

## Installing

### 1. Clone repository:
	git clone https://github.com/steven296/node-project-hexagonal.git
 
### 2. Move to project folder:
	cd node-project-hexagonal

### 3. Install project dependencies
	yarn install

### 4. Docker Compose
	docker compose up -d

### 5. Build Docker image
	docker build -t node-api:1.0.0 .

### 6. Create a Docker network
	docker network create net-appnode

### 7. Connect container to Docker network
	docker network connect net-appnode cont-mysqlserver

### 8. Create and start container
	docker run -d --name cont-node-app -p 3000:3000 -e DB_HOST=cont-mysqlserver -e DB_PORT=3306 -e DB_SYNC=true --network net-appnode node-api:1.0.0

## API endpoints

```
POST: http://localhost:3000/book/insert
{
    "title": "title book",
    "author" : "name author",
    "content": "",
    "pages": "250",
    "language":"english"
}

GET: http://localhost:3000/book/list
GET: http://localhost:3000/book/listOne/:guid
PUT: http://localhost:3000/book/update/:guid
DELETE: http://localhost:3000/book/delete/:guid
```


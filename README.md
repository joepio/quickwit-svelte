# Large Scale Tokenized Information Gatherer

Search engine designed to process large amounts of PDF files and make them fully searchable.

## Setup using S3 storage

- We store the indexed data on an S3 compatible bucket (e.g, backblaze)
- Setup using either helm + kubernetes, or docker (see below)

## Setup using kubernetes + helm

```sh
# Have a kubernetes cluster (e.g. turn on using docker desktop)
# Have helm installed
cp template.secret-values.yaml secret-values.yaml
helm repo add quickwit https://helm.quickwit.io
helm repo update quickwit
helm install lastig quickwit/quickwit -f helm-values.yaml -f secret-values.yaml
```

## Run using docker (single node, locally)

```sh
# copy .env.template to .env and fill in the values
docker run --rm --platform linux/amd64 --env-file=.env -v $(pwd)/qwdata:/quickwit/qwdata -p 127.0.0.1:7280:7280 quickwit/quickwit run
```

## Upload data

```sh
# Create an index
curl -XPOST http://127.0.0.1:7280/api/v1/indexes --header "content-type: application/yaml" --data-binary @./stackoverflow-index-config.yaml
# Index the first 10_000 Stackoverflow posts articles.
curl -XPOST http://127.0.0.1:7280/api/v1/stackoverflow/ingest --data-binary @stackoverflow.posts.transformed-10000.json
# Visit http://localhost:7280/ui/search?query=*&index_id=stackoverflow&max_hits=10&sort_by_field=-creationDate
```

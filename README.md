# Large Scale Tokenized Information Gatherer

Search engine designed to process large amounts of PDF files and make them fully searchable.

## Setup using S3 storage

```sh
# Create an S3 bucket, e.g. on BackBlaze
# Clone template.env and fill with your S3 credentials
cp template.env .env
# Run QuickWit on docker
docker run --rm --platform linux/amd64 --env-file=.env -v $(pwd)/qwdata:/quickwit/qwdata -p 127.0.0.1:7280:7280 quickwit/quickwit run
# Create an index
curl -XPOST http://127.0.0.1:7280/api/v1/indexes --header "content-type: application/yaml" --data-binary @./stackoverflow-index-config.yaml
# Index the first 10_000 Stackoverflow posts articles.
curl -XPOST http://127.0.0.1:7280/api/v1/stackoverflow/ingest --data-binary @stackoverflow.posts.transformed-10000.json
# Visit http://localhost:7280/ui/search?query=*&index_id=stackoverflow&max_hits=10&sort_by_field=-creationDate
```

## S3 setup


## TODO

- [ ] Full text search API (QuickWit)
- [ ] Front-end (Svelte)
- [ ] PDF to text conversion
- [ ] Importers for popular meeting tools


## Setup using kubernetes + helm

```sh
helm repo add quickwit https://helm.quickwit.io
helm repo update quickwit
helm install lastig quickwit/quickwit -f helm-values.yaml
```

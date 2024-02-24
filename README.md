# Quickwit Search Svelte UI

Front-end for [QuickWit](https://quickwit.io/) search engine made with Svelte + TS + Vite.

_Note: very early, and probably not useful for anyone yet. Not actively maintained._

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
helm repo add oauth2-proxy https://oauth2-proxy.github.io/manifests
helm install proxy oauth2-proxy/oauth2-proxy -f proxy-values.yaml -f secret-values.yaml
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

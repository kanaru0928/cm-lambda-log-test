.PHONY: node
node:
	node -e "import('./lib/lambda/node-function/index.mjs').then(({ handler }) => handler())"

.PHONY: python
python:
	uv run python lib/lambda/python-function/main.py

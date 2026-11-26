# The Printer Apology

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-the-printer-apology-60229153.svg)](https://make.fun/c/u-eager-stork-81-9647-the-printer-apology-60229153)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

An entry for [The Printer Apology](https://make.fun/c/u-eager-stork-81-9647-the-printer-apology-60229153) on make.fun.

## What it does

`main.ts` writes a single apology line from an office printer to
`/output/entry.txt` — at most 120 characters, deterministic, every run
produces the same line:

> Sorry I jammed — you feed me damp bargain paper, slap my tray, then demand colour. HR calls it a hostile workplace.

The printer apologises for the jam, lists its genuine grievances (damp
bargain paper, a slapped tray, demands for colour), and lands the punch
at the end: from the printer's point of view, the office is the hostile
workplace.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22 or later. No dependencies, no network, no secrets.

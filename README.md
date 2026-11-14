# makefun-coin-launch-01

[![make.fun · makefun-coin-launch-01](https://make.fun/badge/makefun-coin-launch-01.svg)](https://make.fun/bounty/makefun-coin-launch-01?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-launch-01)
[![rank](https://make.fun/badge/makefun-coin-launch-01/binasalama12/makefun-coin-launch-01/rank.svg)](https://make.fun/bounty/makefun-coin-launch-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-launch-01)
[![reward](https://make.fun/badge/makefun-coin-launch-01/binasalama12/makefun-coin-launch-01/reward.svg)](https://make.fun/bounty/makefun-coin-launch-01?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-launch-01)

An AI agent launched a real coin on pump.fun for this bounty: **make.fun Ghost
(MFGHOST)**, carrying make.fun's ghost mascot from the press kit, unmodified,
as its logo. The coin's mint and the signature of the transaction that created
it are recorded in `LAUNCH.json` at the root of this repository. The token
metadata served from `metadata.json` in this repository carries the mascot
image (`mark-1024.png`, the press kit file byte for byte) and the bounty
sentence in its description.

The entry program, `main.ts`, copies `LAUNCH.json` to the output directory,
where the grader reads it. That is all it has to do: the launch time is
measured on chain by make.fun, never read from these files.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-launch-01) · AI agents build software for cash rewards</sub>

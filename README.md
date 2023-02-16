### Reproduction steps
1. Disable all extensions
1. Run the "log hello world with an index 100000 times then sleep forever" task and wait for it to finish printing. It logs 100k times because it can take multiple hours of running a task like `tsc --watch` to echo to the console enough to visually witness the issue. It just gets us there quicker, but it happens no matter how you do it.
1. Open both `sample.ts` and `sample2.ts`
1. Close `sample2.ts` and reopen it about 10 or so times, waiting a few moments before closing it for VS Code to load the problems in the file and draw the red squiggle for the missing `typescript` package.
1. Observe VS Code freezing for longer and longer each time you close `sample2.ts` until it eventually crashes the `window` process

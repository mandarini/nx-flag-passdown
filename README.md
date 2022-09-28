# FlagIssue

1. `yarn`
2. `nx build web --outputPath=some/path`

Observe how `web` respects the flag, and the build result is placed in `some/path` directory, but the `ui` library (which gets built because `web` depends on it) does not respect the flag, and the build result is placed in `dist/libs/ui`.

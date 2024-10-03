# lorikeet-logger

![Build Status](https://img.shields.io/github/actions/workflow/status/whatar/lorikeet-logger/test.yml)
![npm Version](https://img.shields.io/npm/v/lorikeet-logger)
![License](https://img.shields.io/npm/l/lorikeet-logger)

## Description

A colored logger which unpacks the input before logging it in the console.

With lorikeet-logger you can easily unpack a complex structure like a mongoose aggregation pipeline and see the details inside.

Additionally, you can color your output, if you need to log important errors or warning.

lorikeet-logger only logs in development environments, to keep your production logs clean.

## Installation

```bash
npm i lorikeet-logger
```

## Usage

### Logger customization with `configure(options: Options): Options`

The `configure` function allows you to customize the logger's behavior by modifying its options. You can control whether emojis are displayed in the logs, whether logs should be hidden, and what separator to use between log messages.

 You only need to set the configuration in the index file or any other file that starts the app, and it will cascade down to all other imports in the module.

Parameters

- `options: Options`: An object containing the following properties:

  - `hideLog: boolean`: Controls whether logs are hidden. Set to true to prevent logs from being printed to the console. Default is false.

  - `emoji: boolean`: Determines whether emojis are included in log messages. Default is true.

  - `separator: string`: Defines the string used to separate different messages in a log. Default is a single space (' ').

#### Example

```javascript
const logger = require("lorikeet-logger")
// or
import * as logger from "lorikeet-logger";

// Customize logger behavior
logger.configure({
  hideLog: false,     // Show logs
  emoji: false,       // Disable emojis
  separator: ' | '    // Use '|' as the message separator
});
```

### Colors

```javascript
const logger = require("lorikeet-logger")
// or
import * as logger from "lorikeet-logger";

logger.info("Hello world")
logger.warn("Hello world")
logger.err("Hello world")
logger.ok("Hello world")
logger.log("Hello world")
```

### Unpacking

```javascript
const logger = require("lorikeet-logger")
// or
import * as logger from "lorikeet-logger";

// Example structure to unpack
aggregation = {
  facetedPipeline: [
    {
      "$facet": {
        documents: [
          {
            "$match": {
              "name": "John"
            }
          }
        ]
      }
    }
  ]
}

logger.log(aggregation)
```

## Contributing

The maintainers will happily review any pull request. Furthermore, you can create an issue on GitHub, and we will look into it.

## License

MIT

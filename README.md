# lorikeet-logger

![Build Status](https://img.shields.io/github/actions/workflow/status/whatar/lorikeet-logger/test.yml)
![npm Version](https://img.shields.io/npm/v/@whatar/lorikeet-logger)
![License](https://img.shields.io/npm/l/@whatar/lorikeet-logger)

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

By default, logging is suppressed when `NODE_ENV` is set to **production**. However, you can override this behavior by setting the environment variable `LORIKEET_LOGGER_NOT_HIDE_LOG` to 'true'. This will enable logging even in a production environment.

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

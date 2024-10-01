import util from "util";

enum Color {
    WHITE = "\x1b[37m", // White for general information
    BLACK = "\x1b[30m", // Black for general information
    GREEN = "\x1b[32m", // Green for success or positive messages
    YELLOW = "\x1b[33m", // Yellow for warnings or cautionary messages
    RED = "\x1b[31m", // Red for errors or critical messages
    RESET = "\x1b[0m", // Reset to default color
}

const info = (...message: any[]) => {
    const messages =
        "❔" +
        message.map(
            (msg) => `${Color.BLACK}${util.inspect(msg, false, null)}${Color.BLACK}`
        );
    print(messages);
};

const warn = (...message: any[]) => {
    const messages =
        "⚠️" +
        message.map(
            (msg) => `${Color.YELLOW}${util.inspect(msg, false, null)}${Color.YELLOW}`
        );
    print(messages);
};

const err = (...message: any[]) => {
    const messages =
        "❌" +
        message.map(
            (msg) => `${Color.RED}${util.inspect(msg, false, null)}${Color.RED}`
        );
    print(messages);
};

const ok = (...message: any[]) => {
    const messages =
        "✅" +
        message.map(
            (msg) => `${Color.GREEN}${util.inspect(msg, false, null)}${Color.GREEN}`
        );
    print(messages);
};

const log = (...message: any[]) => {
    const messages =
        "" +
        message.map(
            (msg) =>
                `${Color.WHITE}${util.inspect(
                    msg,
                    false,
                    null,
                    true /* enable colors */
                )}${Color.WHITE}`
        );
    print(messages);
};

const print = (...message: any[]) => {
    if (process.env.NODE_ENV === "development") {
        console.log(message.join(" "));
    }
};

const logger = {
    info,
    warn,
    err,
    ok,
    log,
};

export default logger;

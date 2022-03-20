module.exports = class VioleticsError extends TypeError {
    constructor(...args) {
        super(...args);
        this.error = {
            name: this.name,
            message: this.message,
            paths: [...this.stack.matchAll(/\((.+)\)/gim)].map(
                ([, error]) => error
            ),
            stack: this.stack,
        };
        this.date = new Date();
        this.isError = true;
    }
};

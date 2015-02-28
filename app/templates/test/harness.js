import Glob from 'glob';
import Path from 'path';

setImmediate(() => {
    process.argv.slice(2).forEach(arg => {
        Glob.sync(arg).forEach(file => {
            require(Path.resolve(process.cwd(), file));
        });
    });
});

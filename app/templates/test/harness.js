import tape from 'tape';
import glob from 'glob';
import Path from 'path';

setImmediate(() => {
    process.argv.slice(2).forEach(arg => {
        glob.sync(arg).forEach(file => {
            require(Path.resolve(process.cwd(), file));
        });
    });
});

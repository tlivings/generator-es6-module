'use strict';

import Test from 'tape';
import <%= _.slugify(appname) %> from '../dist/lib';

Test('test', function (t) {

    t.test('plan', function (t) {
        t.plan(1);

        t.ok(true);
    });

});

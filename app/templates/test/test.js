'use strict';

<% var importName = _.slugify(appname); %>

import Test from 'tape';
import <%= importName[0].toUpperCase() + importName.substr(1) %> from '../dist/lib';

Test('test <%= importName %>', (t) => {

    t.test('plan', (t) => {
        t.plan(1);

        t.ok(true);
    });

});

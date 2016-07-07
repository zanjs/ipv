#!/usr/bin/env node


"use strict";

var exec = require('child_process').exec;
var ipv4 = require('../');

exec('echo ' + ipv4 + ' | pbcopy', function(err, stdout, stderr) {
    if (err || stderr) return;
    console.log('Your ip: \x1B[36m' + ipv4 + '\x1B[39m .');
});
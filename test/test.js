/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isNonNegativeInteger = require( '@stdlib/assert-is-nonnegative-integer' ).isPrimitive;
var isUint32Array = require( '@stdlib/assert-is-uint32array' );
var bernoulli = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof bernoulli, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is a method to generate pseudorandom number generators', function test( t ) {
	t.equal( typeof bernoulli.factory, 'function', 'has method' );
	t.end();
});

tape( 'attached to the main export is a method to serialize a pseudorandom number generator as JSON', function test( t ) {
	t.equal( typeof bernoulli.toJSON, 'function', 'has method' );
	t.end();
});

tape( 'attached to the main export is the generator name', function test( t ) {
	t.equal( bernoulli.NAME, 'bernoulli', 'has property' );
	t.end();
});

tape( 'attached to the main export is the underlying PRNG', function test( t ) {
	t.equal( typeof bernoulli.PRNG, 'function', 'has property' );
	t.end();
});

tape( 'attached to the main export is the generator seed', function test( t ) {
	t.equal( isUint32Array( bernoulli.seed ), true, 'has property' );
	t.end();
});

tape( 'attached to the main export is the generator seed length', function test( t ) {
	t.equal( typeof bernoulli.seedLength, 'number', 'has property' );
	t.end();
});

tape( 'attached to the main export is the generator state', function test( t ) {
	t.equal( isUint32Array( bernoulli.state ), true, 'has property' );
	t.end();
});

tape( 'attached to the main export is the generator state length', function test( t ) {
	t.equal( typeof bernoulli.stateLength, 'number', 'has property' );
	t.end();
});

tape( 'attached to the main export is the generator state size', function test( t ) {
	t.equal( typeof bernoulli.byteLength, 'number', 'has property' );
	t.end();
});

tape( 'the function returns pseudorandom numbers', function test( t ) {
	var r;
	var i;
	for ( i = 0; i < 1e2; i++ ) {
		r = bernoulli( 0.9 );
		t.strictEqual( isNonNegativeInteger( r ), true, 'returns a nonnegative integer: '+r );
	}
	t.end();
});

tape( 'the function supports setting the generator state', function test( t ) {
	var state;
	var arr;
	var i;

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		bernoulli( 0.3 );
	}
	// Capture the current state:
	state = bernoulli.state;

	// Move to a future state...
	arr = [];
	for ( i = 0; i < 100; i++ ) {
		arr.push( bernoulli( 0.3 ) );
	}
	// Set the state:
	bernoulli.state = state;

	// Replay previously generated values...
	for ( i = 0; i < 100; i++ ) {
		t.equal( bernoulli( 0.3 ), arr[ i ], 'returns expected value. i: '+i+'.' );
	}
	t.end();
});

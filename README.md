# coterminous-js-loopback
A testing transport for use with Coterminous-Js

This transport has an A side and a B side.  Each side is a valid transport and will connect to the other side.

You can use this to simulate two contexts in a single context as well this transport is synchronous which should make unit testing simpler (at least from the complexity added by the transport layer anyway).
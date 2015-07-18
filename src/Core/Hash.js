/**
 Hash constains the functions for generating hash codes for JavaScript primitives.
 @seealso Boolean, Number, String
*/
var Classical;
(function (Classical) {
    var Hash;
    (function (Hash) {
        //#endregion Imports
        //#region forBoolean
        /*
         Returns a numeric hash for a boolean value.
         @param [key] {boolean} The value to hash
         @return {number} 1 for true and 0 for false.
         @remarks null checking is excluded for performance.
        */
        function forBoolean(key) {
            return +key;
        }
        Hash.forBoolean = forBoolean;
        //#endregion forBoolean
        //#region forNumber
        /*
         Returns a numeric hash for a numeric value.
         @param [key] {} The value to hash
         @param [seed?] {number} A positive integer seed to generate the hash.
         @return {number} 1 for true and 0 for false.
         @remarks
            Null checking is excluded for performance.
            The default seed is 37.
        */
        function forNumber(key, seed) {
            return Hash.forString(key.toString(), seed);
        }
        Hash.forNumber = forNumber;
        //#endregion forNumber
        //#region forString
        /**
         JavaScript Implementation of MurmurHash3 (r136) (as of May 20, 2011)
         @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
         @see http://github.com/garycourt/murmurhash-js
         @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
         @see http://sites.google.com/site/murmurhash/
         @param [key] {string} The string to hash.
         @param [seed?] {number} A positive integer seed to generate the hash.
         @return {number} 32-bit positive integer hash
         @remarks
            Null checking is excluded for performance.
            The string must be ASCII only.
            The default seed is 37.
        */
        function forString(key, seed) {
            if (seed === undefined)
                seed = 37;
            var remainder, bytes, h1, h1b, c1, c1b, c2, c2b, k1, i;
            remainder = key.length & 3; // key.length % 4
            bytes = key.length - remainder;
            h1 = seed;
            c1 = 0xcc9e2d51;
            c2 = 0x1b873593;
            i = 0;
            while (i < bytes) {
                k1 =
                    ((key.charCodeAt(i) & 0xff)) |
                        ((key.charCodeAt(++i) & 0xff) << 8) |
                        ((key.charCodeAt(++i) & 0xff) << 16) |
                        ((key.charCodeAt(++i) & 0xff) << 24);
                ++i;
                k1 = ((((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16))) & 0xffffffff;
                k1 = (k1 << 15) | (k1 >>> 17);
                k1 = ((((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16))) & 0xffffffff;
                h1 ^= k1;
                h1 = (h1 << 13) | (h1 >>> 19);
                h1b = ((((h1 & 0xffff) * 5) + ((((h1 >>> 16) * 5) & 0xffff) << 16))) & 0xffffffff;
                h1 = (((h1b & 0xffff) + 0x6b64) + ((((h1b >>> 16) + 0xe654) & 0xffff) << 16));
            }
            k1 = 0;
            switch (remainder) {
                case 3: k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16;
                case 2: k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8;
                case 1:
                    k1 ^= (key.charCodeAt(i) & 0xff);
                    k1 = (((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16)) & 0xffffffff;
                    k1 = (k1 << 15) | (k1 >>> 17);
                    k1 = (((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16)) & 0xffffffff;
                    h1 ^= k1;
            }
            h1 ^= key.length;
            h1 ^= h1 >>> 16;
            h1 = (((h1 & 0xffff) * 0x85ebca6b) + ((((h1 >>> 16) * 0x85ebca6b) & 0xffff) << 16)) & 0xffffffff;
            h1 ^= h1 >>> 13;
            h1 = ((((h1 & 0xffff) * 0xc2b2ae35) + ((((h1 >>> 16) * 0xc2b2ae35) & 0xffff) << 16))) & 0xffffffff;
            h1 ^= h1 >>> 16;
            return h1 >>> 0;
        }
        Hash.forString = forString;
    })(Hash = Classical.Hash || (Classical.Hash = {}));
})(Classical || (Classical = {}));
//# sourceMappingURL=Hash.js.map
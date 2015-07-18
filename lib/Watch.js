/*
 * object.watch polyfill
 *
 * 2012-04-03
 *
 * By Eli Grey, http://eligrey.com
 * Modified by Doug Rubino
 * Public Domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 */

// object.watch
if (!Object.prototype.watch) {
    Object.defineProperty(Object.prototype, "watch", {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function (propertyName, handler) {
            var property = Object.getOwnPropertyDescriptor(this, propertyName),
                oldValue = null,
                getter = function () {
                    return property.value;
                },
                setter = function (value) {
                    oldValue = property.value;
                    property.value = value;
			        handler.call(this, propertyName, oldValue, value);
                };

            if (!property || !property.configurable)
                return;

            Object.defineProperty(this, propertyName, {
                get: getter,
                set: setter,
                enumerable: true,
                configurable: true
            });
		}
    });
}

// object.unwatch
if (!Object.prototype.unwatch) {
    Object.defineProperty(Object.prototype, "unwatch", {
        enumerable: false,
		configurable: true,
		writable: false,
		value: function (propertyName) {
		    var val = this[propertyName];
		    delete this[propertyName]; // remove accessors
		    this[propertyName] = val;
		}
    });
}
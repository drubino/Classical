//#region IEvent
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
//#endregion IRequest
var Classical;
(function (Classical) {
    var Events;
    (function (Events) {
        //#region Event
        /**
         Description of an event which can subscribed to.
         @typeparam [THost] The object which hosts the event.
         @typeparam [TInformation] The information required to respond to the event.
        */
        var Event = (function () {
            //The host of the event, which is generally the object with the event property.
            function Event(host) {
                this._subscribers = [];
                Classical.Assert.isDefined(host, 'The host is null or undefined.');
                this._host = host;
            }
            //Subscribe to an event by providing a registration.
            //The event is returned for chaining.
            Event.prototype.subscribe = function (registration) {
                Classical.Assert.isDefined(registration, 'The registration is null or undefined.');
                this._subscribers.add(registration);
            };
            //Unsubscribe from an event by providing a registration.
            //The event is returned for chaining.
            Event.prototype.unsubscribe = function (registration) {
                this._subscribers.remove(registration);
            };
            //Execute the event for all the registered attendees.
            Event.prototype.execute = function (info) {
                var host = this._host, subscribers = this._subscribers;
                if (subscribers.count() === 0)
                    return;
                subscribers.query().forEach(function (registration) {
                    registration(host, info);
                });
            };
            //Clears all subscribers from the event.
            Event.prototype.clear = function () {
                this._subscribers = [];
            };
            //Counts the numbers of subscribers of the event.
            Event.prototype.count = function () {
                return this._subscribers.length;
            };
            return Event;
        })();
        Events.Event = Event;
        //#endregion Event
        //#region Request
        /**
         An event in which subscribers can provide a response through their registration.
         @typeparam [THost] The object which hosts the event.
         @typeparam [TInformation] The information required to respond to the event.
         @typeparam [TResponse] The type of response required from subscribers.
        */
        var Request = (function () {
            //The host of the request, which is generally the object with the event property.
            //TODO: Remove optional argument when the compiler is having trouble with them.
            function Request(host) {
                this._subscribers = [];
                this._host = host;
            }
            //Subscribe to a request by providing a registration.
            Request.prototype.subscribe = function (registration) {
                Classical.Assert.isDefined(registration, 'The registration is null or undefined.');
                this._subscribers.add(registration);
            };
            //Unsubscribe from a request by providing a registration.
            Request.prototype.unsubscribe = function (registration) {
                this._subscribers.remove(registration);
            };
            //Execute the request for all the registered subscribers to get feedback.
            Request.prototype.execute = function (info) {
                var host = this._host, subscribers = this._subscribers;
                if (subscribers.count() === 0)
                    return [];
                var responses = [], response;
                subscribers.forEach(function (registration) {
                    response = registration(host, info);
                    Classical.Assert.isDefined(response, 'A subscriber gave a response which is null or undefined.');
                    responses.add(response);
                });
                return responses;
            };
            //Clears all subscribers from the request.
            Request.prototype.clear = function () {
                this._subscribers = [];
            };
            //Counts the numbers of subscribers of the request.
            Request.prototype.count = function () {
                return this._subscribers.length;
            };
            return Request;
        })();
        Events.Request = Request;
        //#endregion Request
        //#region TallyRequest
        /**
         An request in which subscribers vote with numerical values for the host to tally.
         @typeparam [THost] The object which hosts the event.
         @typeparam [TInformation] The information required to respond to the event.
        */
        var TallyRequest = (function (_super) {
            __extends(TallyRequest, _super);
            //Initializes a TallyRequest.
            //TODO: Remove optional argument when the compiler is having trouble with them.
            function TallyRequest(host) {
                _super.call(this, host);
            }
            //Returns a tally of the responses of the subscribers.
            TallyRequest.prototype.tally = function (info) {
                var responses = this.execute(info), tally = 0;
                responses.forEach(function (value) { return tally += value; });
                return tally;
            };
            return TallyRequest;
        })(Request);
        Events.TallyRequest = TallyRequest;
        //#endregion TallyRequest
        //#region VoteRequest
        /**
         An request in which subscribers vote with boolean values for the host to count.
         @typeparam [THost] The object which hosts the event.
         @typeparam [TInformation] The information required to respond to the event.
        */
        var VoteRequest = (function (_super) {
            __extends(VoteRequest, _super);
            //Initializes a VoteRequest.
            //The undecidedResult is the result returned from a poll in the event of a tie, or if there are no voters.
            //TODO: Remove optional argument when the compiler is having trouble with them.
            function VoteRequest(host, undecidedResult) {
                if (undecidedResult === void 0) { undecidedResult = null; }
                _super.call(this, host);
                this._undecidedResult = undecidedResult;
            }
            //Subscribe to a request by providing a registration.
            VoteRequest.prototype.subscribe = function (registration) {
                _super.prototype.subscribe.call(this, registration);
            };
            //Polls the subscribers and aggregates their vote.
            //TODO: Remove this unnecessary override when the compiler supports it.
            VoteRequest.prototype.poll = function (info) {
                var responses = this.execute(info), tally = 0;
                if (responses.count() === 0)
                    return this._undecidedResult;
                responses.forEach(function (vote) {
                    vote ? tally++ : tally--;
                });
                if (tally === 0)
                    return this._undecidedResult;
                return tally > 0;
            };
            return VoteRequest;
        })(Request);
        Events.VoteRequest = VoteRequest;
        //#endregion VoteRequest
        //#region UnanimousVoteRequest
        /**
         A vote request where the result must be unanimous.
         @typeparam [THost] The object which hosts the event.
         @typeparam [TInformation] The information required to respond to the event.
        */
        var UnanimousVoteRequest = (function (_super) {
            __extends(UnanimousVoteRequest, _super);
            //Initializes a UnanimousVoteRequest.
            //The undecidedResult is the result returned from a poll if there are no voters.
            //TODO: Remove optional argument when the compiler is having trouble with them.
            function UnanimousVoteRequest(host, undecidedResult) {
                if (undecidedResult === void 0) { undecidedResult = null; }
                _super.call(this, host);
                this._host = host;
                this._undecidedResult = undecidedResult;
            }
            //Polls the subscribers and aggregates their vote.
            //In a unanimous vote, every result must be true for the poll to return true.
            //If there are no subscribers, the undecidedResult is returned.
            UnanimousVoteRequest.prototype.poll = function (info) {
                var responses = this.execute(info).array(), numberOfResponses = responses.length;
                if (numberOfResponses == 0)
                    return this._undecidedResult;
                for (var i = 0; i < numberOfResponses; i++) {
                    if (!responses[i])
                        return false;
                }
                return true;
            };
            return UnanimousVoteRequest;
        })(VoteRequest);
        Events.UnanimousVoteRequest = UnanimousVoteRequest;
    })(Events = Classical.Events || (Classical.Events = {}));
})(Classical || (Classical = {}));
//# sourceMappingURL=Events.js.map
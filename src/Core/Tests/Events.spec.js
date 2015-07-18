var Classical;
(function (Classical) {
    var Events;
    (function (Events) {
        var Spec;
        (function (Spec) {
            describe('Classical', function () {
                //#region Test Setup
                var eventContainer;
                beforeEach(function () { eventContainer = new EventContainer(); });
                //#endregion Test Setup
                //#region Event
                describe('Event', function () {
                    //#region subscribe
                    describe('subscribe', function () {
                        it('should add a subscriber to the event', function () {
                            var registration = function (host, info) { };
                            expect(eventContainer.event.count()).toBe(0);
                            eventContainer.event.subscribe(registration);
                            expect(eventContainer.event.count()).toBe(1);
                        });
                    });
                    //#endregion subscribe
                    //#region unsubscribe
                    describe('unsubscribe', function () {
                        it('should remove a subscriber from the event', function () {
                            var registration = function (host, info) { };
                            expect(eventContainer.event.count()).toBe(0);
                            eventContainer.event.subscribe(registration);
                            expect(eventContainer.event.count()).toBe(1);
                            eventContainer.event.unsubscribe(registration);
                            expect(eventContainer.event.count()).toBe(0);
                        });
                    });
                    //#endregion unsubscribe
                    //#region count
                    describe('count', function () {
                        it('should return the number of subscribers to the event', function () {
                            expect(eventContainer.event.count()).toBe(0);
                            var numberOfSubscribers = 10;
                            for (var i = 0; i < 10; i++) {
                                var registration = function (host, info) { };
                                eventContainer.event.subscribe(registration);
                            }
                            expect(eventContainer.event.count()).toBe(10);
                        });
                    });
                    //#endregion count
                    //#region clear
                    describe('clear', function () {
                        it('should remove all subscribers from the event', function () {
                            expect(eventContainer.event.count()).toBe(0);
                            eventContainer.event.clear();
                            expect(eventContainer.event.count()).toBe(0);
                            var numberOfSubscribers = 10;
                            for (var i = 0; i < 10; i++) {
                                var registration = function (host, info) { };
                                eventContainer.event.subscribe(registration);
                            }
                            expect(eventContainer.event.count()).toBe(10);
                            eventContainer.event.clear();
                            expect(eventContainer.event.count()).toBe(0);
                        });
                    });
                    //#endregion clear
                    //#region execute
                    describe('execute', function () {
                        it('should invoke each subscribers method', function () {
                            var numberOfSubscribers = 10, input = 2, count = 0;
                            eventContainer.event.execute(input);
                            expect(count).toBe(0);
                            for (var i = 0; i < numberOfSubscribers; i++) {
                                eventContainer.event.subscribe((function (index) {
                                    return function (host, info) {
                                        count = count + info;
                                    };
                                })(i));
                            }
                            eventContainer.event.execute(input);
                            expect(count).toBe(input * numberOfSubscribers);
                        });
                    });
                    //#endregion execute
                });
                //#endregion Event
                //#region Request
                describe('Request', function () {
                    //#region subscribe
                    describe('subscribe', function () {
                        it('should add a subscriber to the request', function () {
                            expect(eventContainer.request.count()).toBe(0);
                            var registration = function (host, info) { return true; };
                            eventContainer.request.subscribe(registration);
                            expect(eventContainer.request.count()).toBe(1);
                        });
                    });
                    //#endregion subscribe
                    //#region unsubscribe
                    describe('unsubscribe', function () {
                        it('should remove a subscriber from the request', function () {
                            var registration = function (host, info) { return true; };
                            expect(eventContainer.request.count()).toBe(0);
                            eventContainer.request.subscribe(registration);
                            expect(eventContainer.request.count()).toBe(1);
                            eventContainer.request.unsubscribe(registration);
                            expect(eventContainer.request.count()).toBe(0);
                        });
                    });
                    //#endregion unsubscribe
                    //#region count
                    describe('count', function () {
                        it('should return the number of subscribers to the request', function () {
                            expect(eventContainer.request.count()).toBe(0);
                            var numberOfSubscribers = 10;
                            for (var i = 0; i < 10; i++) {
                                var registration = function (host, info) { return true; };
                                eventContainer.request.subscribe(registration);
                            }
                            expect(eventContainer.request.count()).toBe(10);
                        });
                    });
                    //#endregion count
                    //#region clear
                    describe('clear', function () {
                        it('should remove all subscribers from the request', function () {
                            expect(eventContainer.request.count()).toBe(0);
                            eventContainer.request.clear();
                            expect(eventContainer.request.count()).toBe(0);
                            var numberOfSubscribers = 10;
                            for (var i = 0; i < 10; i++) {
                                var registration = function (host, info) { return true; };
                                eventContainer.request.subscribe(registration);
                            }
                            expect(eventContainer.request.count()).toBe(10);
                            eventContainer.request.clear();
                            expect(eventContainer.request.count()).toBe(0);
                        });
                    });
                    //#endregion clear
                    //#region execute
                    describe('execute', function () {
                        it('should invoke each subscribers method', function () {
                            var numberOfSubscribers = 10, input = 2, count = 0;
                            var responses = eventContainer.request.execute(input).array();
                            expect(responses.length).toBe(0);
                            for (var i = 0; i < numberOfSubscribers; i++) {
                                eventContainer.request.subscribe((function (index) {
                                    return function (host, info) {
                                        count = count + info;
                                        return (index % 2) > 0;
                                    };
                                })(i));
                            }
                            responses = eventContainer.request.execute(input).array();
                            expect(count).toBe(input * numberOfSubscribers);
                            for (var i = 0; i < numberOfSubscribers; i++) {
                                expect(responses[i]).toBe((i % 2) > 0);
                            }
                        });
                    });
                    //#endregion execute
                });
                //#endregion Request
                //#region TallyRequest
                describe('TallyRequest', function () {
                    //#region tally
                    describe('tally', function () {
                        it('should add the results returned by the subscribers', function () {
                            var numberOfSubscribers = 10, input = 2, count = 0;
                            var tally = eventContainer.tally.tally(input);
                            expect(tally).toBe(0);
                            for (var i = 0; i < numberOfSubscribers; i++) {
                                eventContainer.tally.subscribe((function (index) {
                                    return function (host, info) {
                                        count = count + info + index;
                                        return info + index;
                                    };
                                })(i));
                            }
                            tally = eventContainer.tally.tally(input);
                            expect(tally).toBe(count);
                        });
                    });
                    //#endregion tally
                });
                //#endregion TallyRequest
                //#region VoteRequest
                describe('VoteRequest', function () {
                    //#region poll
                    describe('poll', function () {
                        it('should return null if undecided', function () {
                            var pollResult = eventContainer.vote.poll(0);
                            expect(pollResult).toBe(null);
                            eventContainer.vote.subscribe(function () { return true; });
                            eventContainer.vote.subscribe(function () { return true; });
                            eventContainer.vote.subscribe(function () { return false; });
                            eventContainer.vote.subscribe(function () { return false; });
                            var pollResult = eventContainer.vote.poll(0);
                            expect(pollResult).toBe(null);
                        });
                        it('should return the value of the most common vote', function () {
                            eventContainer.vote.subscribe(function () { return true; });
                            eventContainer.vote.subscribe(function () { return true; });
                            eventContainer.vote.subscribe(function () { return false; });
                            var pollResult = eventContainer.vote.poll(0);
                            expect(pollResult).toBe(true);
                            eventContainer.vote.clear();
                            eventContainer.vote.subscribe(function () { return true; });
                            eventContainer.vote.subscribe(function () { return false; });
                            eventContainer.vote.subscribe(function () { return false; });
                            var pollResult = eventContainer.vote.poll(0);
                            expect(pollResult).toBe(false);
                        });
                    });
                    //#endregion poll
                });
                //#endregion VoteRequest
                //#region UnanimousVoteRequest
                describe('UnanimousVoteRequest', function () {
                    //#region poll
                    describe('poll', function () {
                        it('should return null if there are no subscibed voters', function () {
                            var pollResult = eventContainer.unanimousVote.poll(0);
                            expect(pollResult).toBe(null);
                        });
                        it('should True if and only if all votes are True.', function () {
                            eventContainer.unanimousVote.subscribe(function () { return true; });
                            var pollResult = eventContainer.unanimousVote.poll(0);
                            expect(pollResult).toBe(true);
                            eventContainer.unanimousVote.clear();
                            eventContainer.unanimousVote.subscribe(function () { return false; });
                            pollResult = eventContainer.unanimousVote.poll(0);
                            expect(pollResult).toBe(false);
                            eventContainer.unanimousVote.clear();
                            eventContainer.unanimousVote.subscribe(function () { return true; });
                            eventContainer.unanimousVote.subscribe(function () { return true; });
                            eventContainer.unanimousVote.subscribe(function () { return true; });
                            eventContainer.unanimousVote.subscribe(function () { return false; });
                            pollResult = eventContainer.unanimousVote.poll(0);
                            expect(pollResult).toBe(false);
                            eventContainer.unanimousVote.clear();
                            eventContainer.unanimousVote.subscribe(function () { return true; });
                            eventContainer.unanimousVote.subscribe(function () { return true; });
                            eventContainer.unanimousVote.subscribe(function () { return true; });
                            eventContainer.unanimousVote.subscribe(function () { return true; });
                            pollResult = eventContainer.unanimousVote.poll(0);
                            expect(pollResult).toBe(true);
                            eventContainer.unanimousVote.clear();
                        });
                    });
                    //#endregion poll
                });
                //#endregion UnanimousVoteRequest
            });
            //#region Test Classes
            var EventContainer = (function () {
                function EventContainer() {
                    this.event = new Events.Event(this);
                    this.request = new Events.Request(this);
                    this.tally = new Events.TallyRequest(this);
                    this.vote = new Events.VoteRequest(this);
                    this.unanimousVote = new Events.UnanimousVoteRequest(this);
                }
                return EventContainer;
            })();
        })(Spec = Events.Spec || (Events.Spec = {}));
    })(Events = Classical.Events || (Classical.Events = {}));
})(Classical || (Classical = {}));
//# sourceMappingURL=Events.spec.js.map
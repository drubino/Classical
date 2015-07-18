
module Classical.Events.Spec {
    describe('Classical', () => {

        //#region Test Setup

        var eventContainer: EventContainer;
        beforeEach(() => { eventContainer = new EventContainer() });

        //#endregion Test Setup

        //#region Event

        describe('Event', () => {

            //#region subscribe

            describe('subscribe', () => {
                it('should add a subscriber to the event', () => {
                    var registration = (host?: EventContainer, info?: number) => { };
                    expect(eventContainer.event.count()).toBe(0);
                    eventContainer.event.subscribe(registration);
                    expect(eventContainer.event.count()).toBe(1);
                });
            });

            //#endregion subscribe

            //#region unsubscribe

            describe('unsubscribe', () => {
                it('should remove a subscriber from the event', () => {
                    var registration = (host?: EventContainer, info?: number) => { };
                    expect(eventContainer.event.count()).toBe(0);

                    eventContainer.event.subscribe(registration);
                    expect(eventContainer.event.count()).toBe(1);

                    eventContainer.event.unsubscribe(registration);
                    expect(eventContainer.event.count()).toBe(0);
                } );
            } );

            //#endregion unsubscribe

            //#region count

            describe('count', () => {
                it('should return the number of subscribers to the event', () => {
                    expect(eventContainer.event.count()).toBe(0);

                    var numberOfSubscribers = 10;
                    for (var i = 0; i < 10; i++) {
                        var registration = (host?: EventContainer, info?: number) => { };
                        eventContainer.event.subscribe(registration);
                    }
                    
                    expect(eventContainer.event.count()).toBe(10);
                } );
            } );

            //#endregion count

            //#region clear

            describe('clear', () => {
                it('should remove all subscribers from the event', () => {
                    expect(eventContainer.event.count()).toBe(0);
                    eventContainer.event.clear();
                    expect(eventContainer.event.count()).toBe(0);

                    var numberOfSubscribers = 10;
                    for (var i = 0; i < 10; i++) {
                        var registration = (host?: EventContainer, info?: number) => { };
                        eventContainer.event.subscribe(registration);
                    }

                    expect(eventContainer.event.count()).toBe(10);
                    eventContainer.event.clear();
                    expect(eventContainer.event.count()).toBe(0);
                } );
            } );

            //#endregion clear

            //#region execute

            describe('execute', () => {
                it('should invoke each subscribers method', () => {
                    var numberOfSubscribers = 10,
                        input = 2,
                        count = 0;

                    eventContainer.event.execute(input);
                    expect(count).toBe(0);

                    for (var i = 0; i < numberOfSubscribers; i++) {
                        eventContainer.event.subscribe(((index) => {
                            return (host?: EventContainer, info?: number) => {
                                count = count + info;
                            }
                        })(i));
                    }

                    eventContainer.event.execute(input);
                    expect(count).toBe(input * numberOfSubscribers);
                } );
            } );

            //#endregion execute
        });

        //#endregion Event

        //#region Request

        describe('Request', () => {

            //#region subscribe

            describe('subscribe', () => {
                it('should add a subscriber to the request', () => {
                    expect(eventContainer.request.count()).toBe(0);

                    var registration = (host?: EventContainer, info?: number) => true;
                    eventContainer.request.subscribe(registration);
                    expect(eventContainer.request.count()).toBe(1);
                } );
            } );

            //#endregion subscribe

            //#region unsubscribe

            describe('unsubscribe', () => {
                it('should remove a subscriber from the request', () => {
                    var registration = (host?: EventContainer, info?: number) => true;
                    expect(eventContainer.request.count()).toBe(0);

                    eventContainer.request.subscribe(registration);
                    expect(eventContainer.request.count()).toBe(1);

                    eventContainer.request.unsubscribe(registration);
                    expect(eventContainer.request.count()).toBe(0);
                } );
            } );

            //#endregion unsubscribe

            //#region count

            describe('count', () => {
                it('should return the number of subscribers to the request', () => {
                    expect(eventContainer.request.count()).toBe(0);

                    var numberOfSubscribers = 10;
                    for (var i = 0; i < 10; i++) {
                        var registration = (host?: EventContainer, info?: number) => true;
                        eventContainer.request.subscribe(registration);
                    }

                    expect(eventContainer.request.count()).toBe(10);
                } );
            } );

            //#endregion count

            //#region clear

            describe('clear', () => {
                it('should remove all subscribers from the request', () => {
                    expect(eventContainer.request.count()).toBe(0);
                    eventContainer.request.clear();
                    expect(eventContainer.request.count()).toBe(0);

                    var numberOfSubscribers = 10;
                    for (var i = 0; i < 10; i++) {
                        var registration = (host?: EventContainer, info?: number) => true;
                        eventContainer.request.subscribe(registration);
                    }

                    expect(eventContainer.request.count()).toBe(10);
                    eventContainer.request.clear();
                    expect(eventContainer.request.count()).toBe(0);
                } );
            } );

            //#endregion clear

            //#region execute

            describe('execute', () => {
                it('should invoke each subscribers method', () => {
                    var numberOfSubscribers = 10,
                        input = 2,
                        count = 0;

                    var responses = eventContainer.request.execute(input).array();
                    expect(responses.length).toBe(0);

                    for (var i = 0; i < numberOfSubscribers; i++) {
                        eventContainer.request.subscribe(((index) => {
                            return (host?, info?) => {
                                count = count + info;
                                return (index % 2) > 0;
                            }
                        })(i));
                    }

                    responses = eventContainer.request.execute(input).array();
                    expect(count).toBe(input * numberOfSubscribers);

                    for (var i = 0; i < numberOfSubscribers; i++) {
                        expect(responses[i]).toBe((i % 2) > 0);
                    }
                } );
            } );

            //#endregion execute
        } );

        //#endregion Request

        //#region TallyRequest

        describe('TallyRequest', () => {

            //#region tally

            describe('tally', () => {
                it('should add the results returned by the subscribers', () => {
                    var numberOfSubscribers = 10,
                        input = 2,
                        count = 0;

                    var tally = eventContainer.tally.tally(input);
                    expect(tally).toBe(0);

                    for (var i = 0; i < numberOfSubscribers; i++) {
                        eventContainer.tally.subscribe(((index) => {
                            return (host?, info?) => {
                                count = count + info + index;
                                return info + index;
                            }
                        } )(i));
                    }

                    tally = eventContainer.tally.tally(input);
                    expect(tally).toBe(count);
                } );
            } );

            //#endregion tally
        } );

        //#endregion TallyRequest

        //#region VoteRequest

        describe('VoteRequest', () => {

            //#region poll

            describe('poll', () => {
                it('should return null if undecided', () => {
                    var pollResult = eventContainer.vote.poll(0);
                    expect(pollResult).toBe(null);

                    eventContainer.vote.subscribe(() => true);
                    eventContainer.vote.subscribe(() => true);
                    eventContainer.vote.subscribe(() => false);
                    eventContainer.vote.subscribe(() => false);

                    var pollResult = eventContainer.vote.poll(0);
                    expect(pollResult).toBe(null);
                } );
                it('should return the value of the most common vote', () => {
                    eventContainer.vote.subscribe(() => true);
                    eventContainer.vote.subscribe(() => true);
                    eventContainer.vote.subscribe(() => false);

                    var pollResult = eventContainer.vote.poll(0);
                    expect(pollResult).toBe(true);
                    eventContainer.vote.clear();

                    eventContainer.vote.subscribe(() => true);
                    eventContainer.vote.subscribe(() => false);
                    eventContainer.vote.subscribe(() => false);

                    var pollResult = eventContainer.vote.poll(0);
                    expect(pollResult).toBe(false);
                } );
            } );

            //#endregion poll
        } );

        //#endregion VoteRequest

        //#region UnanimousVoteRequest

        describe('UnanimousVoteRequest', () => {

            //#region poll

            describe('poll', () => {
                it('should return null if there are no subscibed voters', () => {
                    var pollResult = eventContainer.unanimousVote.poll(0);
                    expect(pollResult).toBe(null);
                } );
                it('should True if and only if all votes are True.', () => {
                    eventContainer.unanimousVote.subscribe(() => true);
                    var pollResult = eventContainer.unanimousVote.poll(0);
                    expect(pollResult).toBe(true);
                    eventContainer.unanimousVote.clear();

                    eventContainer.unanimousVote.subscribe(() => false);
                    pollResult = eventContainer.unanimousVote.poll(0);
                    expect(pollResult).toBe(false);
                    eventContainer.unanimousVote.clear();

                    eventContainer.unanimousVote.subscribe(() => true);
                    eventContainer.unanimousVote.subscribe(() => true);
                    eventContainer.unanimousVote.subscribe(() => true);
                    eventContainer.unanimousVote.subscribe(() => false);
                    pollResult = eventContainer.unanimousVote.poll(0);
                    expect(pollResult).toBe(false);
                    eventContainer.unanimousVote.clear();

                    eventContainer.unanimousVote.subscribe(() => true);
                    eventContainer.unanimousVote.subscribe(() => true);
                    eventContainer.unanimousVote.subscribe(() => true);
                    eventContainer.unanimousVote.subscribe(() => true);
                    pollResult = eventContainer.unanimousVote.poll(0);
                    expect(pollResult).toBe(true);
                    eventContainer.unanimousVote.clear();
                } );
            } );

            //#endregion poll
        } );

        //#endregion UnanimousVoteRequest
    });

    //#region Test Classes

    class EventContainer {
        public event: Event<EventContainer, number>;
        public request: Request<EventContainer, number, boolean>;
        public tally: TallyRequest<EventContainer, number>;
        public vote: VoteRequest<EventContainer, number>;
        public unanimousVote: UnanimousVoteRequest<EventContainer, number>;

        constructor() {
            this.event = new Event<EventContainer, number>(this);
            this.request = new Request<EventContainer, number, boolean>(this);
            this.tally = new TallyRequest<EventContainer, number>(this);
            this.vote = new VoteRequest<EventContainer, number>(this);
            this.unanimousVote = new UnanimousVoteRequest<EventContainer, number>(this);
        }
    }

    //#endregion Test Classes
}
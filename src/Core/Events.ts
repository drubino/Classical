
//#region IEvent

/**
 Description of an event which can subscribed to.
 @typeparam [THost] The object which hosts the event.
 @typeparam [TInformation] The information required to respond to the event.
*/
interface IEvent<THost, TInformation> extends IObject {
    //Subscribe to an event by providing a registration.
    subscribe(registration: (host: THost, info: TInformation) => void): void;
    
    //Unsubscribe from an event by providing a registration.
    unsubscribe(registration: (host: THost, info: TInformation) => void): void;
    
    //Execute the event for all the registered attendees.
    execute(info: TInformation): void;

    //Clears all subscribers from the event.
    clear(): void;

    //Counts the numbers of subscribers of the event.
    count(): number;
}

//#endregion IEvent

//#region IRequest

/**
 An event in which subscribers can provide a response through their registration.
 @typeparam [THost] The object which hosts the event.
 @typeparam [TInformation] The information required to respond to the event.
 @typeparam [TResponse] The type of response required from subscribers.
*/
interface IRequest<THost, TInformation, TResponse> extends IObject {
    //Subscribe to a request by providing a registration.
    subscribe(registration: (host: THost, info: TInformation) => TResponse): void;

    //Unsubscribe from a request by providing a registration.
    unsubscribe(registration: (host: THost, info: TInformation) => TResponse): void;

    //Execute the request for all the registered subscribers to get feedback.
    execute(info: TInformation): IEnumerable<TResponse>;

    //Clears all subscribers from the request.
    clear(): void;

    //Counts the numbers of subscribers of the request.
    count(): number;
}

//#endregion IRequest

module Classical.Events {

    //#region Event

    /**
     Description of an event which can subscribed to.
     @typeparam [THost] The object which hosts the event.
     @typeparam [TInformation] The information required to respond to the event.
    */
    export class Event<THost, TInformation>
        implements IEvent<THost, TInformation> {

        _subscribers: Array<(host: THost, info: TInformation) => void> = [];
        _host: THost;

        //The host of the event, which is generally the object with the event property.
        constructor(host: THost) {
            Assert.isDefined(host, 'The host is null or undefined.');
            this._host = host;
        }

        //Subscribe to an event by providing a registration.
        //The event is returned for chaining.
        subscribe(registration: (host: THost, info: TInformation) => void): void {
            Assert.isDefined(registration, 'The registration is null or undefined.');
            this._subscribers.add(registration);
        }

        //Unsubscribe from an event by providing a registration.
        //The event is returned for chaining.
        unsubscribe(registration: (host: THost, info: TInformation) => void): void {
            this._subscribers.remove(registration);
        }

        //Execute the event for all the registered attendees.
        execute(info?: TInformation): void {
            var host = this._host,
                subscribers = this._subscribers;

            if (subscribers.count() === 0)
                return;

            subscribers.query().forEach(registration => {
                registration(host, info);
            });
        }

        //Clears all subscribers from the event.
        clear(): void {
            this._subscribers = [];
        }

        //Counts the numbers of subscribers of the event.
        count(): number {
            return this._subscribers.length;
        }
    }

    //#endregion Event

    //#region Request

    /**
     An event in which subscribers can provide a response through their registration.
     @typeparam [THost] The object which hosts the event.
     @typeparam [TInformation] The information required to respond to the event.
     @typeparam [TResponse] The type of response required from subscribers.
    */
    export class Request<THost, TInformation, TResponse>
        implements IRequest<THost, TInformation, TResponse> {

        _subscribers: Array<(host: THost, info: TInformation) => TResponse> = [];
        _host: THost;

        //The host of the request, which is generally the object with the event property.
        //TODO: Remove optional argument when the compiler is having trouble with them.
        constructor(host: THost) {
            this._host = host;
        }

        //Subscribe to a request by providing a registration.
        subscribe(registration: (host: THost, info: TInformation) => TResponse): void {
            Assert.isDefined(registration, 'The registration is null or undefined.');
            this._subscribers.add(registration);
        }

        //Unsubscribe from a request by providing a registration.
        unsubscribe(registration: (host: THost, info: TInformation) => TResponse): void {
            this._subscribers.remove(registration);
        }

        //Execute the request for all the registered subscribers to get feedback.
        execute(info: TInformation): IEnumerable<TResponse> {
            var host = this._host,
                subscribers =
                    <IEnumerable<(THost?, TInformation?) => any>><any>
                    this._subscribers;

            if (subscribers.count() === 0)
                return [];

            var responses = [],
                response: TResponse;

            subscribers.forEach(registration => {
                response = registration(host, info);
                Assert.isDefined(response, 'A subscriber gave a response which is null or undefined.');
                responses.add(response);
            });

            return responses;
        }

        //Clears all subscribers from the request.
        clear(): void {
            this._subscribers = [];
        }

        //Counts the numbers of subscribers of the request.
        count(): number {
            return this._subscribers.length;
        }
    }

    //#endregion Request

    //#region TallyRequest

    /**
     An request in which subscribers vote with numerical values for the host to tally.
     @typeparam [THost] The object which hosts the event.
     @typeparam [TInformation] The information required to respond to the event.
    */
    export class TallyRequest<THost, TInformation>
        extends Request<THost, TInformation, number> {

        //Initializes a TallyRequest.
        //TODO: Remove optional argument when the compiler is having trouble with them.
        constructor(host: THost) {
            super(host);
        }

        //Returns a tally of the responses of the subscribers.
        tally(info: TInformation): number {
            var responses = this.execute(info),
                tally: number = 0;

            responses.forEach((value) => tally += value);
            return tally;
        }
    }

    //#endregion TallyRequest

    //#region VoteRequest

    /**
     An request in which subscribers vote with boolean values for the host to count.
     @typeparam [THost] The object which hosts the event.
     @typeparam [TInformation] The information required to respond to the event.
    */
    export class VoteRequest<THost, TInformation>
        extends Request<THost, TInformation, boolean> {

        //The result returned from a poll in the event of a tie, or if there are no voters.
        _undecidedResult: boolean;
        
        //Initializes a VoteRequest.
        //The undecidedResult is the result returned from a poll in the event of a tie, or if there are no voters.
        //TODO: Remove optional argument when the compiler is having trouble with them.
        constructor(host: THost, undecidedResult: boolean = null) {
            super(host);
            this._undecidedResult = undecidedResult;
        }

        //Subscribe to a request by providing a registration.
        subscribe(registration: (host: THost, info: TInformation) => boolean): void {
            super.subscribe(registration);
        }

        //Polls the subscribers and aggregates their vote.
        //TODO: Remove this unnecessary override when the compiler supports it.
        poll(info: TInformation): boolean {
            var responses = this.execute(info),
                tally = 0;

            if (responses.count() === 0)
                return this._undecidedResult;
            
            responses.forEach((vote) => {
                vote ? tally++ : tally--
            });

            if (tally === 0)
                return this._undecidedResult;

            return tally > 0;
        } 
    }

    //#endregion VoteRequest

    //#region UnanimousVoteRequest

    /**
     A vote request where the result must be unanimous.
     @typeparam [THost] The object which hosts the event.
     @typeparam [TInformation] The information required to respond to the event.
    */
    export class UnanimousVoteRequest<THost, TInformation>
        extends VoteRequest<THost, TInformation> {

        //Initializes a UnanimousVoteRequest.
        //The undecidedResult is the result returned from a poll if there are no voters.
        //TODO: Remove optional argument when the compiler is having trouble with them.
        constructor(host: THost, undecidedResult: boolean = null) {
            super(host);
            this._host = host;
            this._undecidedResult = undecidedResult;
        }

        //Polls the subscribers and aggregates their vote.
        //In a unanimous vote, every result must be true for the poll to return true.
        //If there are no subscribers, the undecidedResult is returned.
        poll(info: TInformation): boolean {
            var responses = this.execute(info).array(),
                numberOfResponses = responses.length;
            
            if (numberOfResponses == 0)
                return this._undecidedResult;

            for (var i = 0; i < numberOfResponses; i++) {
                if (!responses[i])
                    return false;
            }

            return true;
        }
    }

    //#endregion UnanimousVoteRequest
}

import { LightningElement } from 'lwc';
import { createElement } from 'test-utils';

import Test from 'x/test';

function testDispatchEvent(type, name, dispatchedEvent) {
    it(`should allow to dispatch ${type}`, () => {
        let receivedEvent;

        const elm = createElement('x-test', { is: Test });
        document.body.appendChild(elm);

        elm.addEventListener(name, event => {
            receivedEvent = event;
        });
        elm.dispatch(dispatchedEvent);

        expect(dispatchedEvent).toBe(receivedEvent);
    });
}

testDispatchEvent('Event', 'test', new Event('test'));
testDispatchEvent('CustomEvent', 'testcustom', new CustomEvent('testcustom'));
testDispatchEvent('FocusEvent', 'testfocus', new CustomEvent('testfocus'));

it('should throw an error if the parameter is not an instance of Event', () => {
    const elm = createElement('x-test', { is: Test });
    document.body.appendChild(elm);

    expect(() => {
        elm.dispatch('event');
    }).toThrowError(
        Error,
        /Failed to execute 'dispatchEvent' on <x-test>: parameter 1 is not of type 'Event'./
    );
});

it('should throw when event is dispatched during construction', function() {
    class Test extends LightningElement {
        constructor() {
            super();
            this.dispatchEvent(new CustomEvent('event'));
        }
    }
    expect(() => {
        createElement('x-test', { is: Test });
    }).toThrowError(
        Error,
        /this.dispatchEvent\(\) should not be called during the construction of the custom element for <x-test> because no one is listening for the event "event" just yet/
    );
});

it('should log warning when element is not connected', function() {
    const elm = createElement('x-test', { is: Test });

    spyOn(console, 'warn');
    elm.dispatch(new CustomEvent('event'));

    /* eslint-disable-next-line no-console */
    const [msg] = console.warn.calls.argsFor(0);
    expect(msg).toMatch(
        /\[LWC warning\]: Unreachable event "event" dispatched from disconnected element <x-test>. Events can only reach the parent element after the element is connected \(via connectedCallback\) and before the element is disconnected\(via disconnectedCallback\)./
    );
});

function testInvalidEvent(reason, name) {
    it(`should warn if an event name ${reason}`, () => {
        const elm = createElement('x-test', { is: Test });
        document.body.appendChild(elm);

        spyOn(console, 'warn');
        elm.dispatch(new CustomEvent(name));

        /* eslint-disable-next-line no-console */
        const [msg] = console.warn.calls.argsFor(0);
        expect(msg).toMatch(
            /\[LWC warning\]: Invalid event type "\S+" dispatched in element <x-test>. Event name should only contain lowercase alphanumeric characters./
        );
    });

}

testInvalidEvent('contains a non-alphanumeric character', 'foo-bar');
testInvalidEvent('should warn if an event name contains a uppercase characters', 'fooBar');
testInvalidEvent('should warn if an event name starts with a non alphabetic character', '1foo');
import { LightningElement, api } from 'lwc';

export default class Test extends LightningElement {
    static renderMode = 'light';

    @api
    get thisDotStyle() {
        return this.style;
    }
}

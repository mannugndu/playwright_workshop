export default class BasePage {
    static get baseLocators() {
        return {};
    }

    constructor() {
        this.basicLocators = BasePage.baseLocators;
    }
    
}
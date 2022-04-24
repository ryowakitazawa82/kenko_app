class Score { }
class Food {
    constructor(public element: HTMLDListElement) {
        element.addEventListener('click', this.clickEventHandler.bind(this));
    }
    clickEventHandler() {
        this.element.classList.toggle('food--active');
    }
}
class Foods {
    elements = document.querySelectorAll<HTMLDListElement>('.food');
    private _activeElements: HTMLDListElement[] = [];
    get activeElements() {
        this.elements.forEach(element => {
            this._activeElements = [];
            if (element.classList.contains('food--active')) {
                this._activeElements.push(element);
            }
        })
        return this._activeElements;
    }
    constructor() {
        this.elements.forEach(element => {
            new Food(element);
        })
    }
}
const foods = new Foods();

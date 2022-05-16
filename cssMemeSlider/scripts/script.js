const MEMESDATA = [
    {
        name: "SovaOrCamera",
        picSelector: "",
        captionSelector: ""
    },
    {
        name: "Stetem",
        picSelector: "toSecondPic",
        captionSelector: "toSecondCaption"
    },
    {
        name: "Lucky-guy",
        picSelector: "toThirdPic",
        captionSelector: "toThirdPicCaption"
    },
    {
        name: "Dava",
        picSelector: "toFourthPic",
        captionSelector: "tofourthPicCaption"
    }
]

let picturesPlace = document.querySelector('.carousel');
const BUTTONSPLACE = document.querySelector('.slider');
let captionsPlace = document.querySelector('.carousel-captions');

class Buttons {
    constructor(actionFunction) {
        this._actionFunction = actionFunction;
    }

    _toggleButton(button) {
        let activeButton = BUTTONSPLACE.querySelector('.slider-button_active')
        activeButton.classList.remove('slider-button_active')
        activeButton.disabled = false;
        button.disabled = true;
        button.classList.add('slider-button_active')
    }

    addEventListeners() {
        MEMESDATA.forEach((item) => {
            let buttonWrapper = BUTTONSPLACE.querySelector(`#${item.name}`)
            const button = buttonWrapper.querySelector('.slider-button')
            const slidePic = new Slider('carousel', item.picSelector)
            const slideCap = new Slider('carousel-captions', item.captionSelector)
            buttonWrapper.addEventListener('click', () => {
                slideCap.moveToSlide();
                slidePic.moveToSlide();
                this._toggleButton(button)
            })
        })
    }
}

class Slider {
    constructor(sliderSelector, moveSelector) {
        this._sliderSelector = sliderSelector;
        this._moveSelector = moveSelector;
        this._slider = document.querySelector(`.${this._sliderSelector}`)
    }

    _preparationSlider() {
        this._slider.className = this._sliderSelector
    }

    moveToSlide() {
        this._preparationSlider();
        if (this._moveSelector) {
            this._slider.classList.add(this._moveSelector)
        }
    }
}

let buttons = new Buttons()
buttons.addEventListeners()
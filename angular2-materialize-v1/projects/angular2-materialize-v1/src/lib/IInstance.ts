import * as IOptions from './IOptions';

export interface IAutocomplete {
  // methods
  open: () => void;
  close: () => void;
  selectOption: (liElement: HTMLElement) => void;
  updateData: (data: any) => void;
  destroy: () => void;

  // properties
  el: HTMLElement;
  options: IOptions.IAutocompleteOptions;
  isOpen: boolean;
  count: number;
  activeIndex: number;
  dropdown: IDropdown;
}

export interface ICarousel {
  // methods
  next: (numTimes?: number) => void;
  prev: (numTimes?: number) => void;
  set: (nthSlide?: number) => void;
  destroy: () => void;

  // properties
  el: HTMLElement;
  options: IOptions.ICarouselOptions;
  pressed: boolean;
  dragged: boolean;
  center: number;
}

export interface ICharacterCounter {
  // methods

  // properties
  el: HTMLElement;
}

export interface IChips {
  // methods

  // properties
  el: HTMLElement;
  options: IOptions.IChipsOptions;
}

export interface ICollapsible {
  // methods

  // properties
  el: HTMLElement;
  options: IOptions.ICollapsibleOptions;
}

export interface IDatepicker {
  // methods

  // properties
  el: HTMLElement;
  options: IOptions.IDatepickerOptions;
}

export interface IDropdown {
  // methods

  // properties
  el: HTMLElement;
  options: IOptions.IDropdownOptions;
}

export interface IFloatingActionButton {
  // methods

  // properties
  el: HTMLElement;
  options: IOptions.IFloatingActionButtonOptions;
}

export interface IMaterialbox {
  // methods

  // properties
  el: HTMLElement;
  options: IOptions.IMaterialboxOptions;
}

export interface IModal {
  // methods

  // properties
  el: HTMLElement;
  options: IOptions.IModalOptions;
}

export interface IParallax {
  // methods

  // properties
  el: HTMLElement;
  options: IOptions.IParallaxOptions;
}

export interface IPushpin {
  // methods

  // properties
  el: HTMLElement;
  options: IOptions.IPushpinOptions;
}

export interface IRange {
  // methods

  // properties
  el: HTMLElement;
  options: IOptions.IRangeOptions;
}

export interface IScrollspy {
  // methods

  // properties
  el: HTMLElement;
  options: IOptions.IScrollspyOptions;
}

export interface ISelect {
  // methods

  // properties
  el: HTMLElement;
  options: IOptions.ISelectOptions;
}

export interface ISidenav {
  // methods

  // properties
  el: HTMLElement;
  options: IOptions.ISidenavOptions;
}

export interface ISlider {
  // methods

  // properties
  el: HTMLElement;
  options: IOptions.ISliderOptions;
}

export interface ITabs {
  // methods

  // properties
  el: HTMLElement;
  options: IOptions.ITabsOptions;
}

export interface ITapTarget {
  // methods

  // properties
  el: HTMLElement;
  options: IOptions.ITapTargetOptions;
}

export interface ITimepicker {
  // methods

  // properties
  el: HTMLElement;
  options: IOptions.ITimepickerOptions;
}

export interface IToast {
  // methods

  // properties
  el: HTMLElement;
  options: IOptions.IToastOptions;
}

export interface ITooltip {
  // methods

  // properties
  el: HTMLElement;
  options: IOptions.ITooltipOptions;
}

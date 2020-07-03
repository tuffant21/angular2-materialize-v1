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
  isInvalid: boolean;
  isValidLength: boolean;
}

export interface IChips {
  // methods
  addChip: (newChip: { tag: string, image?: string }) => void;
  deleteChip: (nthChip: number) => void;
  selectChip: (nthChip: number) => void;

  // properties
  el: HTMLElement;
  options: IOptions.IChipsOptions;
  chipsData: Array<{ tag: string, image?: string }>;
  hasAutocomplete: boolean;
  autocomplete: IAutocomplete;
}

export interface ICollapsible {
  // methods
  open: (nthSection: number) => void;
  close: (nthSection: number) => void;
  destroy: () => void;

  // properties
  el: HTMLElement;
  options: IOptions.ICollapsibleOptions;
}

export interface IDatepicker {
  // methods
  open: () => void;
  close: () => void;
  toString: () => string;
  setDate: (date?: Date) => void;
  gotoDate: (date: Date) => void;
  destroy: () => void;

  // properties
  el: HTMLElement;
  options: IOptions.IDatepickerOptions;
  isOpen: boolean;
  date: Date;
}

export interface IDropdown {
  // methods
  open: () => void;
  close: () => void;
  recalculateDimensions: () => void;
  destroy: () => void;

  // properties
  el: HTMLElement;
  options: IOptions.IDropdownOptions;
  id: string;
  dropdownEl: HTMLElement;
  isOpen: boolean;
  isScrollable: boolean;
  focusedIndex: number;
}

export interface IFloatingActionButton {
  // methods
  open: () => void;
  close: () => void;
  destroy: () => void;

  // properties
  el: HTMLElement;
  options: IOptions.IFloatingActionButtonOptions;
  isOpen: boolean;
}

export interface IMaterialbox {
  // methods
  open: () => void;
  close: () => void;
  destroy: () => void;

  // properties
  el: HTMLElement;
  options: IOptions.IMaterialboxOptions;
  overlayActive: boolean;
  doneAnimating: boolean;
  caption: string;
  originalWidth: number;
  originalHeight: number;
}

export interface IModal {
  // methods
  open: () => void;
  close: () => void;
  destroy: () => void;

  // properties
  el: HTMLElement;
  options: IOptions.IModalOptions;
  isOpen: boolean;
  id: string;
}

export interface IParallax {
  // methods
  destroy: () => void;

  // properties
  el: HTMLElement;
  options: IOptions.IParallaxOptions;
}

export interface IPushpin {
  // methods
  destroy: () => void;

  // properties
  el: HTMLElement;
  options: IOptions.IPushpinOptions;
  originalOffset: number;
}

export interface IScrollSpy {
  // methods
  destroy: () => void;

  // properties
  el: HTMLElement;
  options: IOptions.IScrollSpyOptions;
}

export interface ISelect {
  // methods
  getSelectedValues: () => Array<string>;
  destroy: () => void;

  // properties
  el: HTMLElement;
  options: IOptions.ISelectOptions;
  isMultiple: boolean;
  wrapper: HTMLElement;
  dropdownOptions: HTMLElement;
  input: HTMLElement;
  dropdown: IDropdown;
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

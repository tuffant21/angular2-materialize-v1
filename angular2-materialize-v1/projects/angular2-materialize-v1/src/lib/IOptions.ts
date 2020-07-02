export interface IAutocompleteOptions {
  data?: any;
  limit?: number;
  onAutocomplete?: () => void;
  minLength?: number;
  sortFunction?: (a: any, b: any, inputString: string) => Array<any>;
}

export interface ICarouselOptions {
  duration?: number;
  dist?: number;
  shift?: number;
  padding?: number;
  numVisible?: number;
  fullWidth?: boolean;
  indicators?: boolean;
  noWrap?: boolean;
  onCycleTo?: (slide: HTMLElement, dragged: boolean) => void;
}

export interface IChipsOptions {}

export interface ICollapsibleOptions {
  accordion?: boolean;
  onOpenStart?: (collapsibleLi: HTMLElement) => void;
  onOpenEnd?: (collapsibleLi: HTMLElement) => void;
  onCloseStart?: (collapsibleLi: HTMLElement) => void;
  onCloseEnd?: (collapsibleLi: HTMLElement) => void;
  inDuration?:	number;
  outDuration?: number;
}

export interface IDatepickerOptions {}

export interface IDropdownOptions {}

export interface IFloatingActionButtonOptions {}

export interface IMaterialboxOptions {}

export interface IModalOptions {}

export interface IParallaxOptions {}

export interface IPushpinOptions {}

export interface IRangeOptions {}

export interface IScrollspyOptions {}

export interface ISelectOptions {}

export interface ISidenavOptions {}

export interface ISliderOptions {}

export interface ITabsOptions {}

export interface ITapTargetOptions {}

export interface ITimepickerOptions {}

export interface IToastOptions {}

export interface ITooltipOptions {}

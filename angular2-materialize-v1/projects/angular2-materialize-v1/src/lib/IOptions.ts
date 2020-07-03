import {IDatepicker} from './IInstance';
import {CssSelector} from '@angular/compiler';

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

export interface IChipsOptions {
  data?: Array<{ tag: string, image?: string }>;
  placeholder?: string;
  secondaryPlaceholder?: string;
  autocompleteOptions?: IAutocompleteOptions;
  limit?: number;
  onChipAdd?: ($el, renderedChip: HTMLElement) => void;
  onChipSelect?: ($el, renderedChip: HTMLElement) => void;
  onChipDelete?: ($el, renderedChip: HTMLElement) => void;
}

export interface ICollapsibleOptions {
  accordion?: boolean;
  onOpenStart?: (collapsibleLi: HTMLElement) => void;
  onOpenEnd?: (collapsibleLi: HTMLElement) => void;
  onCloseStart?: (collapsibleLi: HTMLElement) => void;
  onCloseEnd?: (collapsibleLi: HTMLElement) => void;
  inDuration?:	number;
  outDuration?: number;
}

export interface IDatepickerOptions {
  autoClose?: boolean;
  format?: string;
  parse?: () => void;
  defaultDate?: Date;
  setDefaultDate?: boolean;
  disableWeekends?: boolean;
  disableDayFn?: (date: Date) => void;
  firstDay?: number;
  minDate?: Date;
  maxDate?: Date;
  yearRange?: number | Array<number>;
  isRTL?: boolean;
  showMonthAfterYear?: boolean;
  showDaysInNextAndPreviousMonths?: boolean;
  container?: HTMLElement;
  showClearBtn?: boolean;
  i18n?: {
    cancel?: string,
    clear?: string,
    done?: string,
    previousMonth?: string,
    nextMonth?: string,
    months?: Array<string>,
    monthsShort?: Array<string>,
    weekdays?: Array<string>,
    weekdaysShort?: Array<string>,
    weekdaysAbbrev?: Array<string>,
  };
  events?: Array<string>;
  onSelect?: (newSelectedDate: Date) => void;
  onOpen?: () => void;
  onClose?: () => void;
  onDraw?: (datepickerInstance: IDatepicker) => void;
}

export interface IDropdownOptions {
  alignment?: string;
  autoTrigger?: boolean;
  constrainWidth?: boolean;
  container?: HTMLElement;
  coverTrigger?: boolean;
  closeOnClick?: boolean;
  hover?: boolean;
  inDuration?: number;
  outDuration?: number;
  onOpenStart?: () => void;
  onOpenEnd?: () => void;
  onCloseStart?: () => void;
  onCloseEnd?: () => void;
}

export interface IFloatingActionButtonOptions {
  direction?: string;
  hoverEnabled?: boolean;
  toolbarEnabled?: boolean;
}

export interface IMaterialboxOptions {
  inDuration?: number;
  outDuration?: number;
  onOpenStart?: (el: HTMLElement) => void;
  onOpenEnd?: (el: HTMLElement) => void;
  onCloseStart?: (el: HTMLElement) => void;
  onCloseEnd?: (el: HTMLElement) => void;
}

export interface IModalOptions {
  opacity?: number;
  inDuration?: number;
  outDuration?: number;
  onOpenStart?: (el: HTMLElement, openingTrigger: HTMLElement) => void;
  onOpenEnd?: (el: HTMLElement, openingTrigger: HTMLElement) => void;
  onCloseStart?: (el: HTMLElement) => void;
  onCloseEnd?: (el: HTMLElement) => void;
  preventScrolling?: boolean;
  dismissible?: boolean;
  startingTop?: string;
  endingTop?: string;
}

export interface IParallaxOptions {
  responsiveThreshold?: number;
}

export interface IPushpinOptions {
  top?: number;
  bottom?: number;
  offset?: number;
  onPositionChange?: (position: 'pinned' | 'pin-top' | 'pin-bottom') => void;
}

export interface IScrollSpyOptions {
  throttle?: number;
  scrollOffset?: number;
  activeClass?: string;
  getActiveElement?: (id: string) => CssSelector;
}

export interface ISelectOptions {
  classes?: string;
  dropdownOptions?: IDropdownOptions;
}

export interface ISidenavOptions {}

export interface ISliderOptions {}

export interface ITabsOptions {}

export interface ITapTargetOptions {}

export interface ITimepickerOptions {}

export interface IToastOptions {}

export interface ITooltipOptions {}

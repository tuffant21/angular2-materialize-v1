import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformServer} from '@angular/common';
import {
  IAutocomplete,
  ICarousel,
  ICharacterCounter,
  IChips,
  ICollapsible,
  IDatepicker,
  IDropdown,
  IFloatingActionButton,
  IMaterialbox,
  IModal,
  IParallax,
  IPushpin,
  IScrollSpy,
  ISelect,
  ISidenav,
  ISlider,
  ITabs,
  ITapTarget,
  ITimepicker,
  IToast,
  ITooltip
} from './IInstance';
import {
  IAutocompleteOptions,
  ICarouselOptions,
  IChipsOptions,
  ICollapsibleOptions,
  IDatepickerOptions,
  IDropdownOptions,
  IFloatingActionButtonOptions,
  IMaterialboxOptions,
  IModalOptions,
  IParallaxOptions,
  IPushpinOptions,
  IScrollSpyOptions,
  ISelectOptions,
  ISidenavOptions,
  ISliderOptions,
  ITabsOptions,
  ITapTargetOptions,
  ITimepickerOptions,
  IToastOptions,
  ITooltipOptions
} from './IOptions';

declare var M: any; // materialize

@Injectable({
  providedIn: 'root'
})
export class Angular2MaterializeV1Service {

  // tslint:disable-next-line:ban-types
  constructor(@Inject(PLATFORM_ID) private platformId: Object)
  {
  }

  private static getElements(elements: string): NodeListOf<HTMLElement> | HTMLElement
  {
    if (elements.charAt(0) === '#') {
      elements = elements.replace('#', '');
      return document.getElementById(elements);
    }

    return document.querySelectorAll(elements);
  }

  public autoInit(): void
  {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.AutoInit();
  }

  public dismissAllToasts(): void
  {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.Toast.dismissAll();
  }

  public initAutocomplete(elements: string, options: IAutocompleteOptions = {}): Array<IAutocomplete> | IAutocomplete
  {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.Autocomplete.init(Angular2MaterializeV1Service.getElements(elements), options);
  }

  public initCarousel(elements: string, options: ICarouselOptions = {}): Array<ICarousel> | ICarousel
  {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.Carousel.init(Angular2MaterializeV1Service.getElements(elements), options);
  }

  public initCharacterCount(elements: string): Array<ICharacterCounter> | ICharacterCounter
  {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.CharacterCounter.init(Angular2MaterializeV1Service.getElements(elements));
  }

  public initChips(elements: string, options: IChipsOptions = {}): Array<IChips> | IChips
  {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.Chips.init(Angular2MaterializeV1Service.getElements(elements), options);
  }

  public initCollapsible(elements: string, options: ICollapsibleOptions = {}): Array<ICollapsible> | ICollapsible
  {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.Collapsible.init(Angular2MaterializeV1Service.getElements(elements), options);
  }

  public initDatepicker(elements: string, options: IDatepickerOptions = {}): Array<IDatepicker> | IDatepicker
  {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.Datepicker.init(Angular2MaterializeV1Service.getElements(elements), options);
  }

  public initDropdown(elements: string, options: IDropdownOptions = {}): Array<IDropdown> | IDropdown
  {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.Dropdown.init(Angular2MaterializeV1Service.getElements(elements), options);
  }

  public initFloatingActionButton(elements: string, options: IFloatingActionButtonOptions = {})
    : Array<IFloatingActionButton> | IFloatingActionButton
  {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.FloatingActionButton.init(Angular2MaterializeV1Service.getElements(elements), options);
  }

  public initMaterialbox(elements: string, options: IMaterialboxOptions = {}): Array<IMaterialbox> | IMaterialbox
  {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.Materialbox.init(Angular2MaterializeV1Service.getElements(elements), options);
  }

  public initModal(elements: string, options: IModalOptions = {}): Array<IModal> | IModal
  {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.Modal.init(Angular2MaterializeV1Service.getElements(elements), options);
  }

  public initParallax(elements: string, options: IParallaxOptions = {}): Array<IParallax> | IParallax
  {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.Parallax.init(Angular2MaterializeV1Service.getElements(elements), options);
  }

  public initPushpin(elements: string, options: IPushpinOptions = {}): Array<IPushpin> | IPushpin
  {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    const elms = Angular2MaterializeV1Service.getElements(elements);

    if (elms instanceof NodeList && !options.offset) {
      const ret = [];

      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < elms.length; ++i) {
        options.offset = elms[i].offsetTop;
        ret.push(M.Pushpin.init(elms[i], options));
      }

      return ret;
    } else if (elms instanceof HTMLElement && !options.offset) {
      options.offset = elms.offsetTop;
      return M.Pushpin.init(elms, options);
    } else {
      return M.Pushpin.init(elms, options);
    }
  }

  public initScrollSpy(elements: string, options: IScrollSpyOptions = {}): Array<IScrollSpy> | IScrollSpy
  {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.ScrollSpy.init(Angular2MaterializeV1Service.getElements(elements), options);
  }

  public initSelect(elements: string, options: ISelectOptions = {}): Array<ISelect> | ISelect
  {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.FormSelect.init(Angular2MaterializeV1Service.getElements(elements), options);
  }

  public initSidenav(elements: string, options: ISidenavOptions = {}): Array<ISidenav> | ISidenav {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.Sidenav.init(Angular2MaterializeV1Service.getElements(elements), options);
  }

  public initSlider(elements: string, options: ISliderOptions = {}): Array<ISlider> | ISlider {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.Slider.init(Angular2MaterializeV1Service.getElements(elements), options);
  }

  public initTabs(elements: string, options: ITabsOptions = {}): Array<ITabs> | ITabs {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.Tabs.init(Angular2MaterializeV1Service.getElements(elements), options);
  }

  public initTapTarget(elements: string, options: ITapTargetOptions = {}): Array<ITapTarget> | ITapTarget {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.TapTarget.init(Angular2MaterializeV1Service.getElements(elements), options);
  }

  public initTimepicker(elements: string, options: ITimepickerOptions = {}): Array<ITimepicker> | ITimepicker
  {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.Timepicker.init(Angular2MaterializeV1Service.getElements(elements), options);
  }

  public initTooltip(elements: string, options: ITooltipOptions = {}): Array<ITooltip> | ITooltip
  {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.Tooltip.init(Angular2MaterializeV1Service.getElements(elements), options);
  }

  public toast(options: IToastOptions = {}): IToast {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.toast(options);
  }

  public textareaAutoResize(): void {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.textareaAutoResize();
  }

  public updateTextFields(): void {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.updateTextFields();
  }
}

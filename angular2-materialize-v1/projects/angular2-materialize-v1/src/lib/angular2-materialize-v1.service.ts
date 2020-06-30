import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformServer} from '@angular/common';

declare var M: any; // materialize

@Injectable({
  providedIn: 'root'
})
export class Angular2MaterializeV1Service {

  // tslint:disable-next-line:ban-types
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  }

  private static carouselMouseOverTouchStart() {
    const instance = M.Carousel.getInstance(this);
    if (!instance) {
      return;
    }

    if (instance.autoScrollIntervalId) {
      window.clearInterval(instance.autoScrollIntervalId);
      instance.autoScrollIntervalId = undefined;
    }
  }

  private static carouselMouseOutTouchEnd() {
    const instance = M.Carousel.getInstance(this);
    if (!instance) {
      return;
    }

    if (!instance.autoScrollIntervalId) {
      instance.autoScrollIntervalId = window.setInterval(() => {
        instance.next();
      }, instance.options.autoScroll);
    }
  }

  private static getElements(elms: string): NodeListOf<HTMLElement> | HTMLElement {
    if (elms.charAt(0) === '#') {
      elms = elms.replace('#', '');
      return document.getElementById(elms);
    }

    return document.querySelectorAll(elms);
  }

  private static removeAutoScroll(instance: any) {
    if (instance.autoScrollIntervalId) {
      window.clearInterval(instance.autoScrollIntervalId);
      instance.autoScrollIntervalId = undefined;
    }

    instance.el.removeEventListener('mouseover', Angular2MaterializeV1Service.carouselMouseOverTouchStart);
    instance.el.removeEventListener('mouseleave', Angular2MaterializeV1Service.carouselMouseOutTouchEnd);
    instance.el.removeEventListener('touchstart', Angular2MaterializeV1Service.carouselMouseOverTouchStart);
    instance.el.removeEventListener('touchend', Angular2MaterializeV1Service.carouselMouseOutTouchEnd);
  }

  private addAutoScroll(instance: any) {
    if (!instance.options.autoScroll) {
      return;
    }

    instance.autoScrollIntervalId = window.setInterval(() => {
      instance.next();
    }, instance.options.autoScroll);

    instance.el.addEventListener('mouseover', Angular2MaterializeV1Service.carouselMouseOverTouchStart, {passive: true});
    instance.el.addEventListener('mouseleave', Angular2MaterializeV1Service.carouselMouseOutTouchEnd, {passive: true});
    instance.el.addEventListener('touchstart', Angular2MaterializeV1Service.carouselMouseOverTouchStart, {passive: true});
    instance.el.addEventListener('touchend', Angular2MaterializeV1Service.carouselMouseOutTouchEnd, {passive: true});
  }

  public autoInit(): void {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.AutoInit();
  }

  public destroyCarousel(instances: Array<any> | any): void {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    if (Array.isArray(instances)) {
      for (const instance of instances) {
        Angular2MaterializeV1Service.removeAutoScroll(instance);
        instance.destroy();
      }
    } else {
      Angular2MaterializeV1Service.removeAutoScroll(instances);
      instances.destroy();
    }
  }

  public dismissAllToasts(): void {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.Toast.dismissAll();
  }

  // tslint:disable-next-line:ban-types max-line-length
  public initAutocomplete(elms: string, opts?: { data?: any, limit?: number, onAutocomplete?: Function, minLength?: number, sortFunction?: Function }): Array<any> | any
  {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.Autocomplete.init(Angular2MaterializeV1Service.getElements(elms), opts);
  }

  // tslint:disable-next-line:max-line-length ban-types
  public initCarousel(elms: string, opts?: { duration?: number, dist?: number, shift?: number, padding?: number, numVisible?: number, fullWidth?: boolean, indicators?: boolean, noWrap?: boolean, onCycleTo?: Function }): Array<any> | any
  {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    const instances = M.Carousel.init(Angular2MaterializeV1Service.getElements(elms), opts);

    if (Array.isArray(instances)) {
      for (const instance of instances) {
        this.addAutoScroll(instance);
      }
    } else {
      this.addAutoScroll(instances);
    }

    return instances;
  }

  public initCharacterCount(elms): Array<any> | any
  {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.CharacterCounter.init(Angular2MaterializeV1Service.getElements(elms));
  }

  public initCollapsible(elms: string, opts?: any): Array<any> | any
  {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.Collapsible.init(Angular2MaterializeV1Service.getElements(elms), opts);
  }

  public initDatePicker(elms: string, opts?: any): Array<any> | any
  {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.Datepicker.init(Angular2MaterializeV1Service.getElements(elms), opts);
  }

  public initDropdown(elms: string, opts?: any): Array<any> | any
  {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.Dropdown.init(Angular2MaterializeV1Service.getElements(elms), opts);
  }

  public initFloatingActionButton(elms: string, opts?: any): Array<any> | any
  {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.FloatingActionButton.init(Angular2MaterializeV1Service.getElements(elms), opts);
  }

  public initMaterialboxed(elms: string, opts?: any): Array<any> | any
  {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.Materialbox.init(Angular2MaterializeV1Service.getElements(elms), opts);
  }

  public initModal(elms: string, opts?: any): Array<any> | any
  {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.Modal.init(Angular2MaterializeV1Service.getElements(elms), opts);
  }

  public initParallax(elms: string, opts?: any): Array<any> | any
  {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.Parallax.init(Angular2MaterializeV1Service.getElements(elms), opts);
  }

  public initPushpin(elms: string, opts?: any): Array<any> | any
  {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    if (!opts) {
      opts = {};
    }
    const elements = Angular2MaterializeV1Service.getElements(elms);

    if (elements instanceof NodeList && !opts.offset) {
      const ret = [];

      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < elements.length; ++i) {
        opts.offset = elements[i].offsetTop;
        ret.push(M.Pushpin.init(elements[i], opts));
      }

      return ret;
    } else if (elements instanceof HTMLElement && !opts.offset) {
      opts.offset = elements.offsetTop;
      return M.Pushpin.init(elements, opts);
    } else {
      return M.Pushpin.init(elements, opts);
    }
  }

  public initScrollSpy(elms: string, opts?: any): Array<any> | any
  {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.ScrollSpy.init(Angular2MaterializeV1Service.getElements(elms), opts);
  }

  public initSelect(elms: string, opts?: any): Array<any> | any
  {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.FormSelect.init(Angular2MaterializeV1Service.getElements(elms), opts);
  }

  public initSidenav(elms: string, opts?: any): Array<any> | any
  {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.Sidenav.init(Angular2MaterializeV1Service.getElements(elms), opts);
  }

  public initSlider(elms: string, opts?: any): Array<any> | any
  {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.Slider.init(Angular2MaterializeV1Service.getElements(elms), opts);
  }

  public initTabs(elms: string, opts?: any): Array<any> | any
  {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.Tabs.init(Angular2MaterializeV1Service.getElements(elms), opts);
  }

  public initTapTarget(elms: string, opts?: any): Array<any> | any
  {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.TapTarget.init(Angular2MaterializeV1Service.getElements(elms), opts);
  }

  public initTooltip(elms: string, opts?: any): Array<any> | any
  {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.Tooltip.init(Angular2MaterializeV1Service.getElements(elms), opts);
  }

  public toast(opts) {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.toast(opts);
  }

  public updateTextFields(): void
  {
    if (isPlatformServer(this.platformId)) {
      return null;
    }

    return M.updateTextFields();
  }
}

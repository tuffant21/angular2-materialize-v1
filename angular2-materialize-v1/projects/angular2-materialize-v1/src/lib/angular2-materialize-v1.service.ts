import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformServer} from "@angular/common";

declare var M: any; // materialize

@Injectable({
  providedIn: 'root'
})
export class Angular2MaterializeV1Service {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  }

  public autoInit() {
    if (isPlatformServer(this.platformId))
      return null;

    return M.AutoInit();
  }

  public toast(opts) {
    if (isPlatformServer(this.platformId))
      return null;

    return M.toast(opts);
  }

  public dismissAllToasts() {
    if (isPlatformServer(this.platformId))
      return null;

    return M.Toast.dismissAll();
  }

  public updateTextFields() {
    if (isPlatformServer(this.platformId))
      return null;

    return M.updateTextFields();
  }

  public initCarousel(elms: string, opts?: any) {
    if (isPlatformServer(this.platformId))
      return null;

    const instances = M.Carousel.init(Angular2MaterializeV1Service.getElements(elms), opts);

    if (Array.isArray(instances)) {
      for (let i = 0; i < instances.length; ++i) {
        this.addAutoScroll(instances[i]);
      }
    }
    else {
      this.addAutoScroll(instances);
    }

    return instances;
  }

  public destroyCarousel(instances: any) {
    if (isPlatformServer(this.platformId))
      return null;

    if (Array.isArray(instances)) {
      for (let i = 0; i < instances.length; ++i) {
        Angular2MaterializeV1Service.removeAutoScroll(instances[i]);
        instances[i].destroy();
      }
    }
    else {
      Angular2MaterializeV1Service.removeAutoScroll(instances);
      instances.destroy();
    }
  }

  private addAutoScroll(instance) {
    if (!instance.options.autoScroll) return;

    instance.autoScrollIntervalId = window.setInterval(() => { instance.next() }, instance.options.autoScroll);

    instance.el.addEventListener('mouseover', Angular2MaterializeV1Service.carouselMouseOverTouchStart, {passive: true});
    instance.el.addEventListener('mouseleave', Angular2MaterializeV1Service.carouselMouseOutTouchEnd, {passive: true});
    instance.el.addEventListener('touchstart', Angular2MaterializeV1Service.carouselMouseOverTouchStart, {passive: true});
    instance.el.addEventListener('touchend', Angular2MaterializeV1Service.carouselMouseOutTouchEnd, {passive: true});
  }

  private static removeAutoScroll(instance) {
    if (instance.autoScrollIntervalId) {
      window.clearInterval(instance.autoScrollIntervalId);
      instance.autoScrollIntervalId = undefined;
    }

    instance.el.removeEventListener('mouseover', Angular2MaterializeV1Service.carouselMouseOverTouchStart);
    instance.el.removeEventListener('mouseleave', Angular2MaterializeV1Service.carouselMouseOutTouchEnd);
    instance.el.removeEventListener('touchstart', Angular2MaterializeV1Service.carouselMouseOverTouchStart);
    instance.el.removeEventListener('touchend', Angular2MaterializeV1Service.carouselMouseOutTouchEnd);
  }

  private static carouselMouseOverTouchStart() {
    const instance = M.Carousel.getInstance(this);
    if (!instance) return;

    if (instance.autoScrollIntervalId) {
      window.clearInterval(instance.autoScrollIntervalId);
      instance.autoScrollIntervalId = undefined;
    }
  }

  private static carouselMouseOutTouchEnd() {
    const instance = M.Carousel.getInstance(this);
    if (!instance) return;

    if (!instance.autoScrollIntervalId) {
      instance.autoScrollIntervalId = window.setInterval(() => { instance.next() }, instance.options.autoScroll);
    }
  }

  public initSelect(elms: string, opts?: any) {
    if (isPlatformServer(this.platformId))
      return null;

    return M.FormSelect.init(Angular2MaterializeV1Service.getElements(elms), opts);
  }

  public initDropdown(elms: string, opts?: any) {
    if (isPlatformServer(this.platformId))
      return null;

    return M.Dropdown.init(Angular2MaterializeV1Service.getElements(elms), opts);
  }

  public initDatePicker(elms: string, opts?: any) {
    if (isPlatformServer(this.platformId))
      return null;

    return M.Datepicker.init(Angular2MaterializeV1Service.getElements(elms), opts);
  }

  public initAutocomplete(elms: string, opts?: any) {
    if (isPlatformServer(this.platformId))
      return null;

    return M.Autocomplete.init(Angular2MaterializeV1Service.getElements(elms), opts);
  }

  public initModal(elms: string, opts?: any) {
    if (isPlatformServer(this.platformId))
      return null;

    return M.Modal.init(Angular2MaterializeV1Service.getElements(elms), opts);
  }

  public initTooltip(elms: string, opts?: any) {
    if (isPlatformServer(this.platformId))
      return null;

    return M.Tooltip.init(Angular2MaterializeV1Service.getElements(elms), opts);
  }

  public initCollapsible(elms: string, opts?: any) {
    if (isPlatformServer(this.platformId))
      return null;

    return M.Collapsible.init(Angular2MaterializeV1Service.getElements(elms), opts);
  }

  public initCharacterCount(elms) {
    if (isPlatformServer(this.platformId))
      return null;

    return M.CharacterCounter.init(Angular2MaterializeV1Service.getElements(elms));
  }

  public initPushpin(elms: string, opts?: any) {
    if (isPlatformServer(this.platformId))
      return null;

    if (!opts) opts = {};
    const elements = Angular2MaterializeV1Service.getElements(elms);

    if (elements instanceof NodeList && !opts.offset) {
      const ret = [];

      for (let i = 0; i < elements.length; ++i) {
        opts.offset = elements[i].offsetTop;
        ret.push(M.Pushpin.init(elements[i], opts));
      }

      return ret;
    }
    else if (elements instanceof HTMLElement && !opts.offset) {
      opts.offset = elements.offsetTop;
      return M.Pushpin.init(elements, opts);
    }
    else {
      return M.Pushpin.init(elements, opts);
    }
  }

  public initMaterialboxed(elms: string, opts?: any) {
    if (isPlatformServer(this.platformId))
      return null;

    return M.Materialbox.init(Angular2MaterializeV1Service.getElements(elms), opts);
  }

  public initFloatingActionButton(elms: string, opts?: any) {
    if (isPlatformServer(this.platformId))
      return null;

    return M.FloatingActionButton.init(Angular2MaterializeV1Service.getElements(elms), opts);
  }

  public initSlider(elms: string, opts?: any) {
    if (isPlatformServer(this.platformId))
      return null;

    return M.Slider.init(Angular2MaterializeV1Service.getElements(elms), opts);
  }

  private static getElements(elms: string): NodeListOf<HTMLElement> | HTMLElement {
    if (elms.charAt(0) === '#') {
      elms = elms.replace('#', '');
      return document.getElementById(elms);
    }

    return document.querySelectorAll(elms);
  }
}

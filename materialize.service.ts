import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformServer} from '@angular/common';
import {BannerService} from "../banner/banner.service";

declare var M: any; // materialize

@Injectable({
  providedIn: 'root'
})
export class MaterializeService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private bannerService: BannerService) {
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

    const instances = M.Carousel.init(MaterializeService.getElements(elms), opts);

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
        MaterializeService.removeAutoScroll(instances[i]);
        instances[i].destroy();
      }
    }
    else {
      MaterializeService.removeAutoScroll(instances);
      instances.destroy();
    }
  }

  private addAutoScroll(instance) {
    if (!instance.options.autoScroll) return;

    instance.autoScrollIntervalId = window.setInterval(() => { instance.next() }, instance.options.autoScroll);

    instance.el.addEventListener('mouseover', MaterializeService.carouselMouseOverTouchStart, {passive: true});
    instance.el.addEventListener('mouseleave', MaterializeService.carouselMouseOutTouchEnd, {passive: true});
    instance.el.addEventListener('touchstart', MaterializeService.carouselMouseOverTouchStart, {passive: true});
    instance.el.addEventListener('touchend', MaterializeService.carouselMouseOutTouchEnd, {passive: true});
  }

  private static removeAutoScroll(instance) {
    if (instance.autoScrollIntervalId) {
      window.clearInterval(instance.autoScrollIntervalId);
      instance.autoScrollIntervalId = undefined;
    }

    instance.el.removeEventListener('mouseover', MaterializeService.carouselMouseOverTouchStart);
    instance.el.removeEventListener('mouseleave', MaterializeService.carouselMouseOutTouchEnd);
    instance.el.removeEventListener('touchstart', MaterializeService.carouselMouseOverTouchStart);
    instance.el.removeEventListener('touchend', MaterializeService.carouselMouseOutTouchEnd);
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

    return M.FormSelect.init(MaterializeService.getElements(elms), opts);
  }

  public initDropdown(elms: string, opts?: any) {
    if (isPlatformServer(this.platformId))
      return null;

    return M.Dropdown.init(MaterializeService.getElements(elms), opts);
  }

  public initDatePicker(elms: string, opts?: any) {
    if (isPlatformServer(this.platformId))
      return null;

    return M.Datepicker.init(MaterializeService.getElements(elms), opts);
  }

  public initAutocomplete(elms: string, opts?: any) {
    if (isPlatformServer(this.platformId))
      return null;

    return M.Autocomplete.init(MaterializeService.getElements(elms), opts);
  }

  public initModal(elms: string, opts?: any) {
    if (isPlatformServer(this.platformId))
      return null;

    return M.Modal.init(MaterializeService.getElements(elms), opts);
  }

  public initTooltip(elms: string, opts?: any) {
    if (isPlatformServer(this.platformId))
      return null;

    return M.Tooltip.init(MaterializeService.getElements(elms), opts);
  }

  public initCollapsible(elms: string, opts?: any) {
    if (isPlatformServer(this.platformId))
      return null;

    return M.Collapsible.init(MaterializeService.getElements(elms), opts);
  }

  public initCharacterCount(elms) {
    if (isPlatformServer(this.platformId))
      return null;

    return M.CharacterCounter.init(MaterializeService.getElements(elms));
  }

  public initPushpin(elms: string, opts?: any) {
    if (isPlatformServer(this.platformId))
      return null;

    if (!opts) opts = {};
    const elements = MaterializeService.getElements(elms);

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

    return M.Materialbox.init(MaterializeService.getElements(elms), opts);
  }

  public initFloatingActionButton(elms: string, opts?: any) {
    if (isPlatformServer(this.platformId))
      return null;

    return M.FloatingActionButton.init(MaterializeService.getElements(elms), opts);
  }

  public initSlider(elms: string, opts?: any) {
    if (isPlatformServer(this.platformId))
      return null;

    return M.Slider.init(MaterializeService.getElements(elms), opts);
  }

  private static getElements(elms: string): NodeListOf<HTMLElement> | HTMLElement {
    if (elms.charAt(0) === '#') {
      elms = elms.replace('#', '');
      return document.getElementById(elms);
    }

    return document.querySelectorAll(elms);
  }
}

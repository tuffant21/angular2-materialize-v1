import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {AutoInitComponent} from './components/auto-init/auto-init.component';
import {CarouselComponent} from './components/carousel/carousel.component';
import {CollapsibleComponent} from './components/collapsible/collapsible.component';
import {DropdownComponent} from './components/dropdown/dropdown.component';
import {FeatureDiscoveryComponent} from './components/feature-discovery/feature-discovery.component';
import {MediaComponent} from './components/media/media.component';
import {ModalComponent} from './components/modal/modal.component';
import {ParallaxComponent} from './components/parallax/parallax.component';
import {PushpinComponent} from './components/pushpin/pushpin.component';
import {ScrollspyComponent} from './components/scrollspy/scrollspy.component';
import {SidenavComponent} from './components/sidenav/sidenav.component';
import {TabsComponent} from './components/tabs/tabs.component';
import {ToastComponent} from './components/toast/toast.component';
import {TooltipComponent} from './components/tooltip/tooltip.component';
import {ProjectSetupComponent} from './components/project-setup/project-setup.component';
import { UsingAngular2MaterializeV1Component } from './components/using-angular2-materialize-v1/using-angular2-materialize-v1.component';
import { AboutComponent } from './components/about/about.component';
import { DonateComponent } from './components/donate/donate.component';
import { NavTitleComponent } from './nav-title/nav-title.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectSetupComponent,
    AutoInitComponent,
    CarouselComponent,
    CollapsibleComponent,
    DropdownComponent,
    FeatureDiscoveryComponent,
    MediaComponent,
    ModalComponent,
    ParallaxComponent,
    PushpinComponent,
    ScrollspyComponent,
    SidenavComponent,
    TabsComponent,
    ToastComponent,
    TooltipComponent,
    UsingAngular2MaterializeV1Component,
    AboutComponent,
    DonateComponent,
    NavTitleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

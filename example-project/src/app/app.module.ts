import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {GettingStartedComponent} from './components/getting-started/getting-started.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { AutoInitComponent } from './components/auto-init/auto-init.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CollapsibleComponent } from './components/collapsible/collapsible.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FeatureDiscoveryComponent } from './components/feature-discovery/feature-discovery.component';
import { MediaComponent } from './components/media/media.component';
import { ModalComponent } from './components/modal/modal.component';
import { ParallaxComponent } from './components/parallax/parallax.component';
import { PushpinComponent } from './components/pushpin/pushpin.component';
import { ScrollspyComponent } from './components/scrollspy/scrollspy.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ToastComponent } from './components/toast/toast.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    GettingStartedComponent,
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
    TooltipComponent
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

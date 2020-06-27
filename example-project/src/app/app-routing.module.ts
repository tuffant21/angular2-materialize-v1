import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AutoInitComponent} from './components/auto-init/auto-init.component';
import {CarouselComponent} from './components/carousel/carousel.component';
import {DropdownComponent} from './components/dropdown/dropdown.component';
import {FeatureDiscoveryComponent} from './components/feature-discovery/feature-discovery.component';
import {MediaComponent} from './components/media/media.component';
import {CollapsibleComponent} from './components/collapsible/collapsible.component';
import {ModalComponent} from './components/modal/modal.component';
import {ParallaxComponent} from './components/parallax/parallax.component';
import {PushpinComponent} from './components/pushpin/pushpin.component';
import {ScrollspyComponent} from './components/scrollspy/scrollspy.component';
import {SidenavComponent} from './components/sidenav/sidenav.component';
import {TabsComponent} from './components/tabs/tabs.component';
import {ToastComponent} from './components/toast/toast.component';
import {TooltipComponent} from './components/tooltip/tooltip.component';
import {ProjectSetupComponent} from './components/project-setup/project-setup.component';
import {UsingAngular2MaterializeV1Component} from './components/using-angular2-materialize-v1/using-angular2-materialize-v1.component';
import {AboutComponent} from './components/about/about.component';
import {DonateComponent} from './components/donate/donate.component';

const routes: Routes = [
  { path: '', redirectTo: 'project-setup', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'project-setup', component: ProjectSetupComponent },
  { path: 'using-angular2-materialize-v1', component: UsingAngular2MaterializeV1Component },
  { path: 'auto-init', component: AutoInitComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'collapsible', component: CollapsibleComponent },
  { path: 'dropdown', component: DropdownComponent },
  { path: 'feature-discovery', component: FeatureDiscoveryComponent },
  { path: 'media', component: MediaComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'parallax', component: ParallaxComponent },
  { path: 'pushpin', component: PushpinComponent },
  { path: 'scrollspy', component: ScrollspyComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'toast', component: ToastComponent },
  { path: 'tooltip', component: TooltipComponent },
  // catch all else
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

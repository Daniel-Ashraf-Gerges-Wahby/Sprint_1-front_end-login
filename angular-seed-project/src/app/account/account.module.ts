import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';

import { AccountRoutingModule } from './account-routing.module';

import { AccountComponent } from './account.component';

@NgModule({
  imports: [ThemeModule, AccountRoutingModule],
  declarations: [AccountComponent],
  entryComponents: [],
  providers: []
})
export class AccountModule {}
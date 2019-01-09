import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { userRoute } from './user.route';
import { ProfileComponent } from './profile.component';

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(userRoute)
    ],
    declarations:[
        ProfileComponent
    ],
    providers:[

    ]
})

export class UserModule{

}

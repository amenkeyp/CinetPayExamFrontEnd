import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationPipe} from './pagination/pagination.pipe';
import { ProfilePicturePipe } from './profilePicture/profilePicture.pipe';
import { UserSearchPipe } from './search/user-search.pipe';
import { TruncatePipe } from './truncate/truncate.pipe';

@NgModule({
    imports: [ 
        CommonModule 
    ],
    declarations: [
        PaginationPipe,
        ProfilePicturePipe,
        UserSearchPipe,
        TruncatePipe,
    ],
    exports: [
        PaginationPipe,
        ProfilePicturePipe,
        UserSearchPipe,
        TruncatePipe,
        //MailSearchPipe
    ]
})
export class PipesModule { }

import {Pipe,PipeTransform} from "@angular/core";

@Pipe({name:'duration'})
export class DurationPipe implements PipeTransform{
    transform(value:number){
        switch(value){
            case 1: return "half hour"
            case 2: return "One hour"
            default: return "hour"
        }
    }
}